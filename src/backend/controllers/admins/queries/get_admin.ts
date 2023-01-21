import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Admin, GetAdmin } from '../../../../types/admin'

export default async (
  _root: undefined,
  args: GetAdmin,
  context: Context
): Promise<Admin> => {
  const admin: Admin = await context.database.admins.findOne({
    _id: args?._id ? new ObjectId(args._id) : context.adminId
  })
  return admin
}
