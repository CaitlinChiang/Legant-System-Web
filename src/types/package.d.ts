import { ObjectId } from 'mongodb'
import { Product } from './product'
import { PaginateDataArgs } from './common/paginateData'
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

export interface GetPackage {
  _id: ObjectId
}

export interface GetPackages {
  paginateData?: PaginateDataArgs
}

export interface CreatePackage {
  collection: Collection
  items: PackageItem[]
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface UpdatePackage {
  _id: ObjectId
  collection: Collection
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface DeletePackage {
  _id: ObjectId
}

export interface AddPackageItem {
  item: PackageItem
}

export interface RemovePackageItem {
  productId: ObjectId
}
