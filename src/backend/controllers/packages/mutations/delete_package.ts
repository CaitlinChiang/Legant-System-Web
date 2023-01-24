import { Context } from '../../../../types/setup/context'
import { DeletePackage } from '../../../../types/package'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeletePackage,
  context: Context
): Promise<void> => {
  await deleteData(context, args, 'packages')
}
