import { Context } from '../../../../types/setup/context'
import { Package, UpdatePackage } from '../../../../types/package'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdatePackage,
  context: Context
): Promise<Package> => {
  const pack: Package = await returnUpdatedData(context, args, 'packages')
  return pack
}
