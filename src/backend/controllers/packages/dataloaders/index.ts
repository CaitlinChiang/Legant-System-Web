import Dataloader from 'dataloader'
import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Package } from '../../../../types/package'
import byId from './byId'

export interface PackageDataloaders {
  byId: Dataloader<ObjectId, Package, ObjectId[]>
}

export default (db: Database): PackageDataloaders => ({
  byId: new Dataloader((ids: ObjectId[]): Promise<Package[]> => byId(db, ids))
})
