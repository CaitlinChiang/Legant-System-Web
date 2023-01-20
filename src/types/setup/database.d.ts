import { Collection } from 'mongodb'
import { Address } from '../address'
import { Admin } from '../admin'
import { Business } from '../business'
import { Consumer } from '../consumer'
import { Order } from '../order'
import { Package } from '../package'
import { Payment } from '../payment'
import { Product } from '../product'
import { Review } from '../review'

export interface Database {
  addresses: Collection<Address>
  admins: Collection<Admin>
  businesses: Collection<Business>
  consumers: Collection<Consumer>
  orders: Collection<Order>
  packages: Collection<Package>
  payments: Collection<Payment>
  products: Collection<Product>
  reviews: Collection<Review>
}
