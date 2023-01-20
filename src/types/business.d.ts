import { ObjectId } from 'mongodb'
import { Category } from '../enums/categories'
import { Gender } from '../enums/gender'

export interface Business {
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

export interface CreateBusiness {
  ageMax: number
  ageMin: number
  categories: Category[]
  email: string
  genders: Gender[]
  name: string
  createdAt?: Date
}

export interface UpdateBusiness {
  ageMax: number
  ageMin: number
  categories: Category[]
  email: string
  genders: Gender[]
  name: string
  updatedAt?: Date
}

export interface DeleteBusiness {
  _id: ObjectId
}
