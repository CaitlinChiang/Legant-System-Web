import { Context } from '../../../../types/setup/context'
import { GetAdmins } from '../../../../types/admin'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetAdmins,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'admins')
  return count
}
