import { ObjectId } from 'mongodb'
import { Address } from './address'
import { CartItem } from './cart'
import { Consumer } from './consumer'
import { Payment, CreatePayment } from './payment'
import { DateRange } from './common/dateRange'
import { PaginateDataArgs } from './common/paginateData'
import { OrderStatus } from '../enums/orderStatus'

export interface Order {
  _id?: ObjectId
  address?: Address
  addressId?: ObjectId
  consumer?: Consumer
  consumerId?: ObjectId
  items?: CartItem[]
  itemsQuantity?: number
  payment?: Payment
  paymentId?: ObjectId
  status?: OrderStatus
  createdAt?: Date
  updatedAt?: Date
}

export interface GetOrders {
  consumerId?: ObjectId
  dateRange?: DateRange
  paginateData?: PaginateDataArgs
  statuses?: OrderStatus[]
}

export interface CreateOrder {
  addressId: ObjectId
  consumerId?: ObjectId
  items: CartItem[]
  payment: CreatePayment
  status?: OrderStatus
  createdAt?: Date
}

export interface UpdateOrder {
  _id: ObjectId
  status: OrderStatus
  updatedAt?: Date
}

export interface DeleteOrder {
  _id: ObjectId
}
