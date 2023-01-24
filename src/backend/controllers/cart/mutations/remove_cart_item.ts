import { Context } from '../../../../types/setup/context'
import { Cart, RemoveCartItem } from '../../../../types/cart'
import { cartItemArgs } from '../../../_utils/handleArgs/cartItemArgs'

export default async (
  _root: undefined,
  args: RemoveCartItem,
  context: Context
): Promise<Cart> => {
  const cart: Cart = await context.database.carts
    .findOneAndUpdate(
      { consumerId: context.consumerId },
      { $pull: { items: cartItemArgs(args) } },
      { returnDocument: 'after' }
    )
    .then((cart) => cart.value)

  return cart
}
