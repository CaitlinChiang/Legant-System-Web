import { Context } from '../../../../types/setup/context'
import { Order, GetOrders } from '../../../../types/order'
import { queryArgs } from '../../../_utils/handleArgs/queryArgs'
import { searchConsumer } from '../../../_utils/handleData/searchConsumer'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetOrders,
  context: Context
): Promise<Order[]> => {
  const modifiedArgs: GetOrders | any = queryArgs(args)
  await searchConsumer(context, modifiedArgs, args.paginateData?.searchText)

  args.consumerId = context.consumerId

  const orders: Order[] = await returnDataArray(context, args, 'orders')
  return orders
}
