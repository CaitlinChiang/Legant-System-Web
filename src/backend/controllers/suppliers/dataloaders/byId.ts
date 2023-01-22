import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Supplier } from '../../../../types/supplier'

export default async (db: Database, ids: ObjectId[]): Promise<Supplier[]> => {
  const suppliers: Supplier[] = await db.suppliers
    .find({ _id: { $in: ids } })
    .toArray()

  const suppliersById: { [id: string]: Supplier } = {}

  suppliers.forEach((supplier: Supplier): void => {
    suppliersById[String(supplier._id)] = supplier
  })

  return ids.map((id: ObjectId): Supplier => suppliersById[String(id)])
}
