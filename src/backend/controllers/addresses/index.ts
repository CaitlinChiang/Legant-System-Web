import { Database } from '../../../types/setup/database'
import dataloaders, { AddressDataloaders } from './dataloaders'
import * as typeDefs from './typeDefs.graphql'

export default {
  dataloaders: (db: Database): AddressDataloaders => dataloaders(db),
  typeDefs
}
