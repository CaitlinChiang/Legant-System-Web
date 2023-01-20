import { ObjectId } from 'mongodb'
import { PaginateDataArgs } from './common/paginateData'

export interface Review {
  _id?: ObjectId
  consumerId?: ObjectId
  review?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GetReview {
  _id: ObjectId
}

export interface GetReviews {
  paginateData?: PaginateDataArgs
}

export interface CreateReview {
  consumerId: ObjectId
  review: string
}

export interface UpdateReview {
  consumerId: ObjectId
  review: string
}

export interface DeleteReview {
  _id: ObjectId
}
