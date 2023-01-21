import { Consumer } from '../../../types/consumer'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Consumer: {
    createdAt: async (consumer: Consumer): Promise<string> => {
      return formatDateTime(consumer?.createdAt, true)
    },

    updatedAt: async (consumer: Consumer): Promise<string> => {
      return formatDateTime(consumer?.updatedAt, true)
    }
  }
}
