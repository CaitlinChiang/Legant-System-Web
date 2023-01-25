import { Context } from '../../../../types/setup/context'
import { DeleteAdmin } from '../../../../types/admin'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeleteAdmin,
  context: Context
): Promise<void> => {
  await deleteData(context, args, 'admins')
}
