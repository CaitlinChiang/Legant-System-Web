import { Context } from '../../../types/setup/context'
import { Address } from '../../../types/address'
import { Consumer } from '../../../types/consumer'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Consumer: {
    address: async (
      consumer: Consumer,
      _args: undefined,
      context: Context
    ): Promise<Address> => {
      if (!consumer.addressId) return {}

      const address: Address = await context.dataloaders.addresses.byId.load(
        consumer.addressId
      )
      return address
    },

    createdAt: async (consumer: Consumer): Promise<string> => {
      return formatDateTime(consumer?.createdAt, true)
    },

    updatedAt: async (consumer: Consumer): Promise<string> => {
      return formatDateTime(consumer?.updatedAt, true)
    }
  }
}
