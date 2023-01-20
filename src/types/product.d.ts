import { ObjectId } from 'mongodb'
import { DateRange } from './common/dateRange'
import { PaginateDataArgs } from './common/paginateData'
import { Category } from '../enums/categories'

export interface Product {
  _id?: ObjectId
  businessId?: ObjectId
  category?: Category
  description?: string
  discount?: number
  imageUrl?: string
  name?: string
  price?: number
  showPublic?: boolean
  stockQuantity?: number
  createdAt?: Date
  updatedAt?: Date
}

export interface GetProduct {
  _id: ObjectId
}

export interface GetProducts {
  businessIds?: ObjectId[]
  categories?: string[]
  dateRange?: DateRange
  discount?: boolean
  paginateData?: PaginateDataArgs
  showPublic?: boolean
  stockQuantity?: StockQuantity
}

export interface CreateProduct {
  businessId?: ObjectId
  category: Category
  description: string
  discount?: number
  image: Promise<FileUpload>
  name: string
  price: number
  showPublic: boolean
  stockQuantity: number
  createdAt?: Date
}

export interface UpdateProduct {
  businessId?: ObjectId
  category: Category
  description: string
  discount?: number
  image?: Promise<FileUpload>
  imageUrl: string
  name: string
  price: number
  showPublic: boolean
  stockQuantity: number
  updatedAt?: Date
}

export interface DeleteProduct {
  _id: ObjectId
  imageUrl: string
}
