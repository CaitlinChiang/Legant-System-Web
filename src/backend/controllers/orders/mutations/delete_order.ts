import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Order, DeleteOrder } from '../../../../types/order'
import { StockQuantityAction } from '../../../../enums/stockQuantity'
import { updateStockQuantity } from '../../../_utils/handleData/updateStockQuantity'
import { deletePayment } from '../../payments/mutations/delete_payment'

export default async (
  _root: undefined,
  args: DeleteOrder,
  context: Context
): Promise<void> => {
  const order: Order = await context.database.orders
    .findOneAndDelete({ _id: new ObjectId(args._id) })
    .then((order) => order.value)

  await deletePayment(context, args._id)

  await updateStockQuantity(context, StockQuantityAction.ADD, order?.items)
}
