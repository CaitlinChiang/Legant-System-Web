import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { DeleteConsumer } from '../../../../types/consumer'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeleteConsumer,
  context: Context
): Promise<void> => {
  await deleteData(context, args, 'consumers')

  await context.database.consumers.findOneAndDelete({
    consumerId: new ObjectId(args._id)
  })
}
