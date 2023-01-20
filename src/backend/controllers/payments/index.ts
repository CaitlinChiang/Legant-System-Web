import { Database } from '../../../types/setup/database'
import dataloaders, { PaymentDataloaders } from './dataloaders'
import * as typeDefs from './typeDefs.graphql'
import mutations from './mutations'

export default {
  dataloaders: (db: Database): PaymentDataloaders => dataloaders(db),
  typeDefs,
  resolvers: {
    Mutation: mutations
  }
}
