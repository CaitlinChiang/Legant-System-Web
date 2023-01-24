import { Context } from '../../../../types/setup/context'
import { GetPackages } from '../../../../types/package'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetPackages,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'packages')
  return count
}
