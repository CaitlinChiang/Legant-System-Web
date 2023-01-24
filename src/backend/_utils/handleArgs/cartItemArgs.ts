import { ObjectId } from 'mongodb'
import { CartItem } from '../../../types/cart'

export const cartItemArgs = (args: any): CartItem => {
  const cartItem: CartItem = {}

  if (args?.packageId) {
    cartItem.packageId = new ObjectId(args.packageId)
  }

  return cartItem
}
