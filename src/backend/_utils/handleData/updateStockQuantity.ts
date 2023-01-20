import { Context } from '../../../types/setup/context'
import { PackageItem } from '../../../types/package'
import { StockQuantityAction } from '../../../enums/stockQuantity'

export const updateStockQuantity = async (
  context: Context,
  action: StockQuantityAction,
  items: PackageItem[]
): Promise<void> => {
  for (let i = 0, n = items.length; i < n; i++) {
    const { productId, quantity } = items[i]

    const stockQuantity: number = action === StockQuantityAction.ADD ? quantity : -quantity

    await context.database.products.findOneAndUpdate(
      { _id: productId },
      { $inc: { stockQuantity } }
    )
  }
}
