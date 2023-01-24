import { ObjectId } from 'mongodb'
import { Country } from '../enums/countries'

export interface Address {
  _id?: ObjectId
  country?: Country
  postalCode?: string
  street?: string
}

export interface CreateAddress {
  country: Country
  postalCode: string
  street: string
}

export interface UpdateAddress {
  _id: ObjectId
  country: Country
  postalCode: string
  street: string
}

export interface DeleteAddress {
  _id: ObjectId
}
