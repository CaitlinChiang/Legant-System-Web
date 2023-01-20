import { ObjectId } from 'mongodb'
import { Product } from './product'

export interface Package {
  _id?: ObjectId
  consumerId?: ObjectId
  items?: PackageItem
  quantity?: number
  totalPrice?: number
  updatedAt?: Date
}

export interface PackageItem {
  product?: Product
  productId?: ObjectId
  quantity?: number
  totalPrice?: number
}

export interface AddPackageItem {
  item: PackageItem
  updatedAt?: Date
}

export interface UpdatePackageItemQty {
  price: number
  productId: ObjectId
  quantity: number
  updatedAt?: Date
}

export interface RemovePackageItem {
  productId: ObjectId
  updatedAt?: Date
}
