import { Context } from '../../../../types/setup/context'
import { CreatePackage } from '../../../../types/package'
import { createData } from '../../../_utils/handleData/createData'

export default async (
  _root: undefined,
  args: CreatePackage,
  context: Context
): Promise<void> => {
  await createData(context, args, 'packages')
}
