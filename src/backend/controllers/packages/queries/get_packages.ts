import { Context } from '../../../../types/setup/context'
import { Package, GetPackages } from '../../../../types/package'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetPackages,
  context: Context
): Promise<Package[]> => {
  const packages: Package[] = await returnDataArray(context, args, 'packages')
  return packages
}
