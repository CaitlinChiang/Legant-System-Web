import { Context } from '../../../../types/setup/context'
import { Cart } from '../../../../types/cart'

export default async (
  _root: undefined,
  args: undefined,
  context: Context
): Promise<Cart> => {
  const cart: Cart = await context.database.carts.findOne({
    consumerId: context.consumerId
  })
  return cart
}
