import { Context } from '../../../../types/setup/context'
import { Consumer, UpdateConsumer } from '../../../../types/consumer'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateConsumer,
  context: Context
): Promise<Consumer> => {
  const consumer: Consumer = await returnUpdatedData(context, args, 'consumers')
  return consumer
}
