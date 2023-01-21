import { Context } from '../../../../types/setup/context'
import { GetConsumers } from '../../../../types/consumer'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetConsumers,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'consumers')
  return count
}
