import { Context } from '../../../../types/setup/context'
import { Cart, CartItem, AddCartItem } from '../../../../types/cart'
import { MutateAction } from '../../../../enums/mutateAction'
import { cartItemArgs } from '../../../_utils/handleArgs/cartItemArgs'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'

export default async (
  _root: undefined,
  args: AddCartItem,
  context: Context
): Promise<void> => {
  const cart: Cart = await context.database.carts.findOne({
    consumerId: context.consumerId
  })

  let itemAppended = false
  let itemQuantity = 0

  for (let i = 0, n = cart?.items?.length; i < n; i++) {
    const cartItem: CartItem = cart.items[i]
    const cartItemObj = JSON.stringify(cartItemArgs(cartItem))
    const inputItemObj = JSON.stringify(cartItemArgs(args.item))

    if (cartItemObj === inputItemObj) {
      itemAppended = true
      itemQuantity = cartItem.quantity + args.item.quantity
    }
  }

  if (itemAppended) {
    await context.database.carts.findOneAndUpdate(
      {
        consumerId: context.consumerId,
        items: { $elemMatch: cartItemArgs(args.item) }
      },
      { $set: { 'items.$.quantity': itemQuantity } }
    )
  } else {
    await context.database.carts.findOneAndUpdate(
      { consumerId: context.consumerId },
      { $push: { items: mutateArgs(args.item, MutateAction.CREATE) } }
    )
  }
}
