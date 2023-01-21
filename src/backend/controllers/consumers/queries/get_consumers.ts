import { Context } from '../../../../types/setup/context'
import { Consumer, GetConsumers } from '../../../../types/consumer'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetConsumers,
  context: Context
): Promise<Consumer[]> => {
  const consumers: Consumer[] = await returnDataArray(context, args, 'consumers')
  return consumers
}
