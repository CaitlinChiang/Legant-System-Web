import { ObjectId } from 'mongodb'
import { Admin } from '../../../types/admin'
import { Consumer } from '../../../types/consumer'
import { Database } from '../../../types/setup/database'
import { generateJWT, verifyJWT } from './jwt'

export default async (
  headers,
  database: Database
): Promise<Admin | Consumer | null> => {
  if (!headers.accesstoken) return

  const decoded = await verifyJWT(headers.accesstoken)
  if (!decoded) return

  let user: Consumer | Admin = null

  user = await database.consumers.findOne({ _id: new ObjectId(decoded._id) })

  if (!user) {
    user = await database.admins.findOne({ _id: new ObjectId(decoded._id) })
  }

  const minutesRemaining = (decoded.exp - new Date().getTime() / 1000) / 60
  if (minutesRemaining <= 5) {
    user.token = await generateJWT(new ObjectId(decoded._id))
  }

  return user
}
