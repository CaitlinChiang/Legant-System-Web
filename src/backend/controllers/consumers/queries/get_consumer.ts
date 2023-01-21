import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Consumer, GetConsumer } from '../../../../types/consumer'

export default async (
  _root: undefined,
  args: GetConsumer,
  context: Context
): Promise<Consumer> => {
  const consumer: Consumer = await context.database.consumers.findOne({
    _id: args?._id ? new ObjectId(args._id) : context.consumerId
  })
  return consumer
}
