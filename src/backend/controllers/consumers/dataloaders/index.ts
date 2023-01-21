import Dataloader from 'dataloader'
import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Consumer } from '../../../../types/consumer'
import byId from './byId'

export interface ConsumerDataloaders {
  byId: Dataloader<ObjectId, Consumer, ObjectId[]>
}

export default (db: Database): ConsumerDataloaders => ({
  byId: new Dataloader((ids: ObjectId[]): Promise<Consumer[]> => byId(db, ids))
})
