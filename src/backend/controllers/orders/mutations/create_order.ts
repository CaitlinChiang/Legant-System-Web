import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { CreateOrder } from '../../../../types/order'
import { OrderStatus } from '../../../../enums/orderStatus'
import { StockQuantityAction } from '../../../../enums/stockQuantity'
import { MutateAction } from '../../../../enums/mutateAction'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { createPayment } from '../../payments/mutations/create_payment'
import { emptyPackage } from '../../package/mutations/empty_package'
import { updateStockQuantity } from '../../../_utils/handleData/updateStockQuantity'

export default async (
  _root: undefined,
  args: CreateOrder,
  context: Context
): Promise<void> => {
  const { payment, ...remainingArgs } = args

  const orderId: ObjectId = await context.database.orders
    .insertOne({
      ...mutateArgs(remainingArgs, MutateAction.CREATE),
      status: OrderStatus.PENDING,
      consumerId: context.consumerId
    })
    .then((order) => order.insertedId)

  await createPayment(context, orderId, payment)

  await emptyPackage(context)

  await updateStockQuantity(context, StockQuantityAction.SUBTRACT, args.items)
}
