import { Context } from '../../../types/setup/context'
import { Package, PackageItem } from '../../../types/package'
import { returnPackageItems } from '../../_utils/handleData/returnPackageItems'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Package: {
    items: async (
      pack: Package,
      _args: undefined,
      context: Context
    ): Promise<PackageItem[]> => {
      return await returnPackageItems(context, pack?.items)
    },

    quantity: async (pack: Package): Promise<number> => {
      if (!pack?.items || pack?.items?.length === 0) return 0

      const itemsQuantity: number = pack.items.reduce(
        (totalQuantity: number, currentProduct: PackageItem): number => {
          return totalQuantity + currentProduct.quantity
        },
        0
      )
      return itemsQuantity
    },

    totalPrice: async (pack: Package): Promise<number> => {
      if (!pack?.items || pack?.items?.length === 0) return 0

      const itemsTotalPrice: number = pack.items.reduce(
        (totalPrice: number, currentProduct: PackageItem): number => {
          return totalPrice + currentProduct.totalPrice
        },
        0
      )
      return itemsTotalPrice
    },

    updatedAt: async (pack: Package): Promise<string> => {
      return formatDateTime(pack?.updatedAt, true)
    }
  }
}
