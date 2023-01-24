import { Context } from '../../../types/setup/context'
import { CartItem } from '../../../types/cart'
import { Package } from '../../../types/package'
import { formatPrice } from '../handleFormats/formatPrice'

export const returnCartItems = async (
  context: Context,
  items: CartItem[]
): Promise<CartItem[]> => {
  const cartItems: CartItem[] = []

  for (let i = 0, n = items?.length; i < n; i++) {
    const { packageId, quantity } = items[i]

    const pack: Package = await context.dataloaders.packages.byId.load(packageId)

    cartItems.push({
      package: pack,
      quantity,
      totalPrice: formatPrice(pack?.totalPrice * quantity)
    })
  }

  return cartItems
}
