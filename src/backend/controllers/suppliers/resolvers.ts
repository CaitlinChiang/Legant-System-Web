import { Supplier } from '../../../types/supplier'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Supplier: {
    createdAt: async (supplier: Supplier): Promise<string> => {
      return formatDateTime(supplier?.createdAt, true)
    },

    updatedAt: async (supplier: Supplier): Promise<string> => {
      return formatDateTime(supplier?.updatedAt, true)
    }
  }
}
