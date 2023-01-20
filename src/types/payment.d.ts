import { FileUpload } from 'graphql-upload'
import { ObjectId } from 'mongodb'
import { PaymentMethod } from './paymentMethod'
import { PaymentStatus } from '../enums/paymentStatus'

export interface Payment {
  _id?: ObjectId
  amountDue?: number
  imageProofUrl?: string
  paymentMethod?: PaymentMethod
  shippingFee?: number
  status?: PaymentStatus
  createdAt?: Date
  updatedAt?: Date
}

export interface CreatePayment {
  amountDue: number
  imageProof: Promise<FileUpload>
  paymentMethod: PaymentMethod
  shippingFee: number
  status?: PaymentStatus
  createdAt?: Date
}

export interface UpdatePayment {
  _id: ObjectId
  imageProof?: Promise<FileUpload>
  imageProofUrl?: string
  status: PaymentStatus
  updatedAt?: Date
}
