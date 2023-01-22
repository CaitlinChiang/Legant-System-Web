import { Context } from '../../../types/setup/context'
import { Product } from '../../../types/product'
import { Supplier } from '../../../types/supplier'
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

    supplier: async (
      product: Product,
      _args: undefined,
      context: Context
    ): Promise<Supplier> => {
      if (!product.supplierId) return {}

      const supplier: Supplier = await context.dataloaders.suppliers.byId.load(
        product.supplierId
      )
      return supplier
    },

    updatedAt: async (product: Product): Promise<string> => {
      return formatDateTime(product?.updatedAt, true)
    }
  }
}
