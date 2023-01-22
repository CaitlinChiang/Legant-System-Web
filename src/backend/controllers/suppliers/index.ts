import { Database } from '../../../types/setup/database'
import dataloaders, { SupplierDataloaders } from './dataloaders'
import * as typeDefs from './typeDefs.graphql'
import resolvers from './resolvers'
import mutations from './mutations'
import queries from './queries'

export default {
  dataloaders: (db: Database): SupplierDataloaders => dataloaders(db),
  typeDefs,
  resolvers: {
    ...resolvers,
    Query: queries,
    Mutation: mutations
  }
}
