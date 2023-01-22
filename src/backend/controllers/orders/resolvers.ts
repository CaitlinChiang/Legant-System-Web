import { Context } from '../../../types/setup/context'
import { Address } from '../../../types/address'
import { Consumer } from '../../../types/consumer'
import { PackageItem } from '../../../types/package'
import { Order } from '../../../types/order'
import { Payment } from '../../../types/payment'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'
import { returnPackageItems } from '../../_utils/handleData/returnPackageItems'

export default {
  Order: {
    address: async (
      order: Order,
      _args: undefined,
      context: Context
    ): Promise<Address> => {
      if (!order?.addressId) return {}

      const address: Address = await context.dataloaders.addresses.byId.load(
        order.addressId
      )
      return address
    },

    consumer: async (
      order: Order,
      _args: undefined,
      context: Context
    ): Promise<Consumer> => {
      if (!order?.consumerId) return {}

      const consumer: Consumer = await context.dataloaders.consumers.byId.load(
        order.consumerId
      )
      return consumer
    },

    createdAt: async (order: Order): Promise<string> => {
      return formatDateTime(order?.createdAt, true)
    },

    items: async (
      order: Order,
      _args: undefined,
      context: Context
    ): Promise<PackageItem[]> => {
      return await returnPackageItems(context, order?.items)
    },

    itemsQuantity: async (order: Order): Promise<number> => {
      if (!order?.items || order?.items?.length === 0) return 0

      const itemsQuantity: number = order.items.reduce(
        (totalQuantity: number, currentProduct: PackageItem): number => {
          return totalQuantity + currentProduct.quantity
        },
        0
      )
      return itemsQuantity
    },

    payment: async (
      order: Order,
      _args: undefined,
      context: Context
    ): Promise<Payment> => {
      if (!order?._id) return {}

      const payment: Payment = await context.dataloaders.payments.byOrderId.load(
        order._id
      )
      return payment
    },

    updatedAt: async (order: Order): Promise<string> => {
      return formatDateTime(order?.updatedAt, true)
    }
  }
}
