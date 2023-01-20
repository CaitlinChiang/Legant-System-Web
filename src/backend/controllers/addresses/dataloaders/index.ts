import Dataloader from 'dataloader'
import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Address } from '../../../../types/address'
import byId from './byId'

export interface AddressDataloaders {
  byId: Dataloader<ObjectId, Address, ObjectId[]>
}

export default (db: Database): AddressDataloaders => ({
  byId: new Dataloader((ids: ObjectId[]): Promise<Address[]> => byId(db, ids))
})
