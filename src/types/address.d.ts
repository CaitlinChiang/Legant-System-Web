import { ObjectId } from 'mongodb'
import { Country } from '../enums/countries'

export interface Address {
  _id?: ObjectId
  country?: Country
  postalCode?: string
  street?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateAddress {
  country: Country
  postalCode: string
  street: string
  createdAt?: Date
}

export interface UpdateAddress {
  _id: ObjectId
  country: Country
  postalCode: string
  street: string
  updatedAt?: Date
}

export interface DeleteAddress {
  _id: ObjectId
}
