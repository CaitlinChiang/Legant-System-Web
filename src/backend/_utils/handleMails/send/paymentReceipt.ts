import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Address } from '../../../../types/address'
import { Consumer } from '../../../../types/consumer'
import { PackageItem } from '../../../../types/package'
import { Order } from '../../../../types/order'
import { Payment } from '../../../../types/payment'
import { formatDateTime } from '../../handleFormats/formatDateTime'
import { formatPrice } from '../../handleFormats/formatPrice'
import { returnPackageItems } from '../../handleData/returnPackageItems'

const AWS = require('../../setup/aws-ses')

export const sendPaymentReceipt = async (
  context: Context,
  orderId: ObjectId,
  payment: Payment
): Promise<void> => {
  if (!orderId) return

  const order: Order = await context.database.orders.findOne({ _id: orderId })
  const orderItems: PackageItem[] = await returnPackageItems(context, order.items)
  const consumer: Consumer = await context.database.consumers.findOne({
    _id: order.consumerId
  })
  const address: Address = await context.database.addresses.findOne({
    _id: order.addressId
  })

  let items = '['

  for (let i = 0, n = orderItems?.length; i < n; i++) {
    const packageItem: PackageItem = orderItems[i]

    const { quantity, totalPrice } = packageItem
    const name = packageItem?.product?.name

    items += `{ "name": "${name}", "quantity": "${quantity}", "totalPrice": "${totalPrice}" }, `
  }

  const args = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [consumer.email]
    },
    Template: 'PAYMENT_RECEIPT_TEMPLATE',
    TemplateData: `{ "orderId": "${orderId}", "createdAt": "${formatDateTime(
      order.createdAt
    )}", "user": { "firstName": "${consumer.firstName}", "lastName": "${
      consumer.lastName
    }", "email": "${consumer.email}" }, "postalCode": "${
      address.postalCode
    }", "street": "${address.street}", "items": ${
      items.slice(0, -2) + ']'
    }, "payment": { "amountDue": "${payment.amountDue}", "shippingFee": "${
      payment.shippingFee
    }", "total": "${formatPrice(payment.amountDue + payment.shippingFee)}" } }`,
    Source: 'legant.co@gmail.com',
    ReplyToAddresses: []
  }

  const sendEmail = new AWS.SES({ apiVersion: '2010-12-01' })
    .sendTemplatedEmail(args)
    .promise()

  sendEmail
    .then((data) => console.log(data))
    .catch((err) => console.error(err, err.stack))
}
