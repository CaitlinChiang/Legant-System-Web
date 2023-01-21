import { Database } from '../../../types/setup/database'
import dataloaders, { ConsumerDataloaders } from './dataloaders'
import * as typeDefs from './typeDefs.graphql'
import resolvers from './resolvers'
import mutations from './mutations'
import queries from './queries'

export default {
  dataloaders: (db: Database): ConsumerDataloaders => dataloaders(db),
  typeDefs,
  resolvers: {
    ...resolvers,
    Query: queries,
    Mutation: mutations
  }
}
