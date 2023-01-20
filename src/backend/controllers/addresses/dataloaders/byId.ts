import { ObjectId } from 'mongodb'
import { Database } from '../../../../types/setup/database'
import { Address } from '../../../../types/address'

export default async (db: Database, ids: ObjectId[]): Promise<Address[]> => {
  const addresses: Address[] = await db.addresses
    .find({ _id: { $in: ids } })
    .toArray()

  const addressesById: { [id: string]: Address } = {}

  addresses.forEach((address: Address): void => {
    addressesById[String(address._id)] = address
  })

  return ids.map((id: ObjectId): Address => addressesById[String(id)])
}
