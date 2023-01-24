import { ObjectId } from 'mongodb'
import { Product } from './product'
import { Collection } from '../enums/collections'

export interface Package {
  _id?: ObjectId
  collection?: Collection
  items?: PackageItem[]
  name?: string
  quantity?: number
  showPublic?: boolean
  stockQuantity?: number
  totalPrice?: number
}

export interface PackageItem {
  product?: Product
  productId?: ObjectId
  quantity?: number
  totalPrice?: number
}

export interface CreatePackage {
  collection: Collection
  items: PackageItem[]
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface UpdatePackage {
  collection: Collection
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface AddPackageItem {
  item: PackageItem
}

export interface RemovePackageItem {
  productId: ObjectId
}
