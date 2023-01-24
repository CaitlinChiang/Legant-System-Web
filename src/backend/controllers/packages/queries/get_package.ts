import { Context } from '../../../../types/setup/context'
import { Package, GetPackage } from '../../../../types/package'
import { returnData } from '../../../_utils/handleData/returnData'

export default async (
  _root: undefined,
  args: GetPackage,
  context: Context
): Promise<Package> => {
  const pack: Package = await returnData(context, args, 'packages')
  return pack
}
