import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Package } from '../../../../types/package'

export default async (db: Database, ids: ObjectId[]): Promise<Package[]> => {
  const packages: Package[] = await db.packages.find({ _id: { $in: ids } }).toArray()

  const packagesById: { [id: string]: Package } = {}

  packages.forEach((pack: Package): void => {
    packagesById[String(pack._id)] = pack
  })

  return ids.map((id: ObjectId): Package => packagesById[String(id)])
}
