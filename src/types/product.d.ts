import { ObjectId } from 'mongodb'
import { Supplier } from './supplier'
import { DateRange } from './common/dateRange'
import { PaginateDataArgs } from './common/paginateData'
import { StockQuantity } from './common/stockQuantity'
import { Category } from '../enums/categories'

export interface Product {
  _id?: ObjectId
  category?: Category
  description?: string
  discount?: number
  imageUrl?: string
  name?: string
  price?: number
  showPublic?: boolean
  stockQuantity?: number
  supplier?: Supplier
  supplierId?: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export interface GetProduct {
  _id: ObjectId
}

export interface GetProducts {
  categories?: string[]
  dateRange?: DateRange
  discount?: boolean
  paginateData?: PaginateDataArgs
  showPublic?: boolean
  stockQuantity?: StockQuantity
  supplierId?: ObjectId
}

export interface CreateProduct {
  category: Category
  description: string
  discount?: number
  image: Promise<FileUpload>
  name: string
  price: number
  showPublic: boolean
  stockQuantity: number
  supplierId: ObjectId
  createdAt?: Date
}

export interface UpdateProduct {
  _id: ObjectId
  category: Category
  description: string
  discount?: number
  image?: Promise<FileUpload>
  imageUrl: string
  name: string
  price: number
  showPublic: boolean
  stockQuantity: number
  supplierId: ObjectId
  updatedAt?: Date
}

export interface DeleteProduct {
  _id: ObjectId
  imageUrl: string
}
