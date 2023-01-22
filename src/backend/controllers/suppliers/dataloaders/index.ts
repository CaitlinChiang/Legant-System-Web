import Dataloader from 'dataloader'
import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Supplier } from '../../../../types/supplier'
import byId from './byId'

export interface SupplierDataloaders {
  byId: Dataloader<ObjectId, Supplier, ObjectId[]>
}

export default (db: Database): SupplierDataloaders => ({
  byId: new Dataloader((ids: ObjectId[]): Promise<Supplier[]> => byId(db, ids))
})
