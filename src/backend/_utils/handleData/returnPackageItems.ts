import { Context } from '../../../types/setup/context'
import { PackageItem } from '../../../types/package'
import { Product } from '../../../types/product'
import { formatPrice } from '../handleFormats/formatPrice'

export const returnPackageItems = async (
  context: Context,
  items: PackageItem[]
): Promise<PackageItem[]> => {
  const packageItems: PackageItem[] = []

  for (let i = 0, n = items?.length; i < n; i++) {
    const { productId, quantity } = items[i]

    const product: Product = await context.dataloaders.products.byId.load(productId)

    packageItems.push({
      product,
      quantity,
      totalPrice: formatPrice(product?.price * quantity)
    })
  }

  return packageItems
}
