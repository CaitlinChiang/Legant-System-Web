import { ObjectId } from 'mongodb'
import { PaginateDataArgs } from './common/paginateData'

export interface Admin {
  _id?: ObjectId
  email?: string
  firstName?: string
  lastName?: string
  password?: string
  token?: string
  verificationCode?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GetAdmin {
  _id?: ObjectId
}

export interface GetAdmins {
  paginateData?: PaginateDataArgs
}

export interface CreateAdmin {
  email: string
  firstName: string
  lastName: string
  password: string
  createdAt?: Date
}

export interface UpdateAdmin {
  _id: ObjectId
  email: string
  firstName: string
  lastName: string
  updatedAt?: Date
}

export interface DeleteAdmin {
  _id: ObjectId
}
