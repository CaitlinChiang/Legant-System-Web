import { ObjectId } from 'mongodb'
import { Product } from './product'
import { DateRange } from './common/dateRange'
import { PaginateDataArgs } from './common/paginateData'
import { Collection } from '../enums/collections'

export interface Package {
  _id?: ObjectId
  collection?: Collection
  description?: string
  discount?: number
  imageUrl?: string
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
  collections?: Collection[]
  dateRange?: DateRange
  discount?: boolean
  paginateData?: PaginateDataArgs
  showPublic?: boolean
  stockQuantity?: StockQuantity
}

export interface CreatePackage {
  collection: Collection
  description: string
  discount?: number
  image: Promise<FileUpload>
  items: PackageItem[]
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface UpdatePackage {
  _id: ObjectId
  collection: Collection
  description: string
  discount?: number
  image?: Promise<FileUpload>
  imageUrl: string
  name: string
  showPublic: boolean
  stockQuantity: number
}

export interface DeletePackage {
  _id: ObjectId
  imageUrl: string
}

export interface AddPackageItem {
  item: PackageItem
}

export interface RemovePackageItem {
  productId: ObjectId
}
