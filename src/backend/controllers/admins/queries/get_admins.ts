import { Context } from '../../../../types/setup/context'
import { Admin, GetAdmins } from '../../../../types/admin'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetAdmins,
  context: Context
): Promise<Admin[]> => {
  const admins: Admin[] = await returnDataArray(context, args, 'admins')
  return admins
}
