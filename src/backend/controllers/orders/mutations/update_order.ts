import { Context } from '../../../../types/setup/context'
import { Order, UpdateOrder } from '../../../../types/order'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateOrder,
  context: Context
): Promise<Order> => {
  const order: Order = await returnUpdatedData(context, args, 'orders')
  return order
}
