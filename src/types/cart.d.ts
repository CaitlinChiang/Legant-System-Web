import { ObjectId } from 'mongodb'
import { Package } from './package'

export interface Cart {
  _id?: ObjectId
  consumerId?: ObjectId
  items?: CartItem[]
  quantity?: number
  totalPrice?: number
}

export interface CartItem {
  package?: Package
  packageId?: ObjectId
  quantity?: number
  totalPrice?: number
}

export interface AddCartItem {
  item: CartItem
}

export interface UpdateCartItemQty {
  price: number
  packageId?: ObjectId
  quantity: number
}

export interface RemoveCartItem {
  packageId: ObjectId
}
