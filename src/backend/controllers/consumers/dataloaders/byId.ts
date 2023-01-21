import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Consumer } from '../../../../types/consumer'

export default async (db: Database, ids: ObjectId[]): Promise<Consumer[]> => {
  const consumers: Consumer[] = await db.consumers
    .find({ _id: { $in: ids } })
    .toArray()

  const consumersById: { [id: string]: Consumer } = {}

  consumers.forEach((consumer: Consumer): void => {
    consumersById[String(consumer._id)] = consumer
  })

  return ids.map((id: ObjectId): Consumer => consumersById[String(id)])
}
