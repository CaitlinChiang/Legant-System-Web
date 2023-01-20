import { ObjectId } from 'mongodb'
import { Category } from '../enums/categories'
import { Gender } from '../enums/gender'

export interface Supplier {
  _id?: ObjectId
  ageMax?: number
  ageMin?: number
  categories?: Category[]
  email?: string
  genders?: Gender[]
  name?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateSupplier {
  ageMax: number
  ageMin: number
  categories: Category[]
  email: string
  genders: Gender[]
  name: string
  createdAt?: Date
}

export interface UpdateSupplier {
  ageMax: number
  ageMin: number
  categories: Category[]
  email: string
  genders: Gender[]
  name: string
  updatedAt?: Date
}

export interface DeleteSupplier {
  _id: ObjectId
}
