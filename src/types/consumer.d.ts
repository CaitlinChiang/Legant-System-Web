import { ObjectId } from 'mongodb'
import { Address } from './address'
import { PaginateDataArgs } from './common/paginateData'
import { Gender } from '../enums/gender'

export interface Consumer {
  _id?: ObjectId
  address: Address
  addressId?: ObjectId
  birthday?: Date
  email?: string
  firstName?: string
  gender?: Gender
  lastName?: string
  password?: string
  token?: string
  verificationCode?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface SignInConsumer {
  email: string
  password: string
}

export interface GetConsumer {
  _id: ObjectId
}

export interface GetConsumers {
  paginateData?: PaginateDataArgs
}

export interface CreateConsumer {
  addressId?: ObjectId
  birthday: Date
  email: string
  firstName: string
  gender: Gender
  lastName: string
  password: string
  createdAt?: Date
}

export interface UpdateConsumer {
  _id: ObjectId
  addressId: ObjectId
  birthday: Date
  email: string
  firstName: string
  gender: Gender
  lastName: string
  password: string
  updatedAt?: Date
}

export interface DeleteConsumer {
  _id: ObjectId
}
