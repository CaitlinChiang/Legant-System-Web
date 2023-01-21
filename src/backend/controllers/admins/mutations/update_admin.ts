import { Context } from '../../../../types/setup/context'
import { Admin, UpdateAdmin } from '../../../../types/admin'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateAdmin,
  context: Context
): Promise<Admin> => {
  const admin: Admin = await returnUpdatedData(context, args, 'admins')
  return admin
}
