import { Db } from 'mongodb'
import { Database } from '../../../types/setup/database'
import { Address } from '../../../types/address'
import { Admin } from '../../../types/admin'
import { Business } from '../../../types/business'
import { Consumer } from '../../../types/consumer'
import { Order } from '../../../types/order'
import { Package } from '../../../types/package'
import { Payment } from '../../../types/payment'
import { Product } from '../../../types/product'
import { Review } from '../../../types/review'

export default (db: Db): Database => {
  return {
    addresses: db.collection<Address>('addresses'),
    admins: db.collection<Admin>('admins'),
    businesses: db.collection<Business>('businesses'),
    consumers: db.collection<Consumer>('consumers'),
    orders: db.collection<Order>('orders'),
    packages: db.collection<Package>('packages'),
    payments: db.collection<Payment>('payments'),
    products: db.collection<Product>('products'),
    reviews: db.collection<Review>('reviews')
  }
}
