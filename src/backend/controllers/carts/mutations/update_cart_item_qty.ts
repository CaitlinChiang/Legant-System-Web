import { Context } from '../../../../types/setup/context'
import { Cart, UpdateCartItemQty } from '../../../../types/cart'
import { cartItemArgs } from '../../../_utils/handleArgs/cartItemArgs'

export default async (
  _root: undefined,
  args: UpdateCartItemQty,
  context: Context
): Promise<Cart> => {
  const cart: Cart = await context.database.carts
    .findOneAndUpdate(
      {
        consumerId: context.consumerId,
        items: { $elemMatch: cartItemArgs(args) }
      },
      {
        $set: {
          'items.$.quantity': args.quantity,
          'items.$.totalPrice': args.price * args.quantity
        }
      },
      { returnDocument: 'after' }
    )
    .then((cart) => cart.value)

  return cart
}
