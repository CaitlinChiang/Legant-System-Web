import { ObjectId } from 'mongodb'
import { Context } from '../../../types/setup/context'
import { Consumer } from '../../../types/consumer'

export const searchConsumer = async (
  context: Context,
  args: any,
  searchText: string
): Promise<void> => {
  if (!searchText) return

  delete args['$text']

  const consumers: Consumer[] = await context.database.consumers.find(args).toArray()
  args.consumerId = {
    $in: consumers.map((consumer: Consumer): ObjectId => new ObjectId(consumer._id))
  }
}
