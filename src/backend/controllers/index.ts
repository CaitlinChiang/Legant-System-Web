import { gql } from 'apollo-server-express'
import { Database } from '../../types/setup/database'
import { Dataloaders } from '../../types/setup/dataloaders'
import _common from './_common'
import addresses from './addresses'
import admins from './admins'
import carts from './carts'
import consumers from './consumers'
import orders from './orders'
import packs from './packages'
import payments from './payments'
import products from './products'
import reviews from './reviews'
import suppliers from './suppliers'

const emptyDefs = gql`
  type Query
  type Mutation
`

export const buildDataloaders = (db: Database): Dataloaders => ({
  addresses: addresses.dataloaders(db),
  consumers: consumers.dataloaders(db),
  packages: packs.dataloaders(db),
  payments: payments.dataloaders(db),
  products: products.dataloaders(db),
  suppliers: suppliers.dataloaders(db)
})

export const typeDefs = [
  emptyDefs,
  _common.typeDefs,
  addresses.typeDefs,
  admins.typeDefs,
  carts.typeDefs,
  consumers.typeDefs,
  orders.typeDefs,
  packs.typeDefs,
  payments.typeDefs,
  products.typeDefs,
  reviews.typeDefs,
  suppliers.typeDefs
]

export const resolvers = [
  _common.resolvers,
  admins.resolvers,
  carts.resolvers,
  consumers.resolvers,
  orders.resolvers,
  packs.resolvers,
  payments.resolvers,
  products.resolvers,
  reviews.resolvers,
  suppliers.resolvers
]
