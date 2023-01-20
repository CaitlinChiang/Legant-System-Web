import { ObjectId } from 'mongodb'
import { Address } from './address'
import { Consumer } from './consumer'
import { PackageItem } from './package'
import { Payment, CreatePayment } from './payment'
import { PaginateDataArgs } from './common/paginateData'
import { OrderStatus } from '../enums/orderStatus'

export interface Order {
  _id?: ObjectId
  address?: Address
  addressId?: ObjectId
  consumer?: Consumer
  consumerId?: ObjectId
  items?: PackageItem[]
  itemsQuantity?: number
  payment?: Payment
  paymentId?: ObjectId
  status?: OrderStatus
  createdAt?: Date
  updatedAt?: Date
}

export interface GetOrder {
  _id: ObjectId
}

export interface GetOrders {
  consumerId?: ObjectId
  dateRange?: DateRange
  paginateData?: PaginateDataArgs
  statuses?: OrderStatus[]
}

export interface CreateOrder {
  addressId: ObjectId
  consumerId: ObjectId
  items: PackageItem[]
  payment: CreatePayment
  status?: OrderStatus
  createdAt?: Date
}

export interface UpdateOrder {
  _id: ObjectId
  status: OrderStatus
  updatedAt?: Date
}

export interface DeleteOrderArgs {
  _id: ObjectId
}
