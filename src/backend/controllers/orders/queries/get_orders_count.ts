import { Context } from '../../../../types/setup/context'
import { GetOrders } from '../../../../types/order'
import { queryArgs } from '../../../_utils/handleArgs/queryArgs'
import { searchConsumer } from '../../../_utils/handleData/searchConsumer'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetOrders,
  context: Context
): Promise<number> => {
  const modifiedArgs: GetOrders | any = queryArgs(args)
  await searchConsumer(context, modifiedArgs, args.paginateData?.searchText)

  args.consumerId = context.consumerId

  const count: number = await returnDataCount(context, args, 'orders')
  return count
}
