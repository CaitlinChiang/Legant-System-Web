import { Product } from '../../../types/product'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Product: {
    createdAt: async (product: Product): Promise<string> => {
      return formatDateTime(product?.createdAt, true)
    },

    stockQuantity: async (product: Product): Promise<number> => {
      if (!product?.stockQuantity) return 0

      return product?.stockQuantity
    },

    updatedAt: async (product: Product): Promise<string> => {
      return formatDateTime(product?.updatedAt, true)
    }
  }
}
