import { FileUpload } from 'graphql-upload'
import { ObjectId } from 'mongodb'
import { PaymentMethod } from './paymentMethod'
import { PaymentStatus } from '../enums/paymentStatus'

export interface Payment {
  _id?: ObjectId
  _orderId?: ObjectId
  amountDue?: number
  imageProofUrl?: string
  paymentMethod?: PaymentMethod
  status?: PaymentStatus
  createdAt?: Date
  updatedAt?: Date
}

export interface CreatePayment {
  amountDue: number
  imageProof: Promise<FileUpload>
  paymentMethod: PaymentMethod
  status?: PaymentStatus
  createdAt?: Date
}

export interface UpdatePayment {
  _orderId: ObjectId
  imageProof?: Promise<FileUpload>
  imageProofUrl?: string
  status: PaymentStatus
  updatedAt?: Date
}
