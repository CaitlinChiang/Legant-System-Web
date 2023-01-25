import { Context } from '../../../types/setup/context'
import { CartItem } from '../../../types/cart'
import { Package, PackageItem } from '../../../types/package'
import { StockQuantityAction } from '../../../enums/stockQuantity'
import { returnData } from '../handleData/returnData'

export const updateStockQuantity = async (
  context: Context,
  action: StockQuantityAction,
  items: CartItem[]
): Promise<void> => {
  await updatePackageStockQty(context, action, items)
}

const updatePackageStockQty = async (
  context: Context,
  action: StockQuantityAction,
  items: CartItem[]
): Promise<void> => {
  for (let i = 0, n = items.length; i < n; i++) {
    const { packageId, quantity }: CartItem = items[i]

    const stockQty: number =
      action === StockQuantityAction.ADD ? quantity : -quantity

    await context.database.packages.findOneAndUpdate(
      { _id: packageId },
      { $inc: { stockQty } }
    )

    // UPDATING STOCK QUANTITY OF THE PACKAGE'S PRODUCTS
    const pack: Package = await returnData(context, { _id: packageId }, 'packages')

    await updateProductStockQty(context, action, pack.items)
  }
}

const updateProductStockQty = async (
  context: Context,
  action: StockQuantityAction,
  items: PackageItem[]
): Promise<void> => {
  for (let i = 0, n = items.length; i < n; i++) {
    const { productId, quantity }: PackageItem = items[i]

    const stockQty: number =
      action === StockQuantityAction.ADD ? quantity : -quantity

    await context.database.products.findOneAndUpdate(
      { _id: productId },
      { $inc: { stockQty } }
    )
  }
}
