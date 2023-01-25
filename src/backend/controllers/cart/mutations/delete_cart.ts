import { Context } from '../../../../types/setup/context'
import { DeleteCart } from '../../../../types/cart'
import { deleteData } from '../../../_utils/handleData/deleteData'

export const deleteCart = async (
  context: Context,
  args: DeleteCart
): Promise<void> => {
  await deleteData(context, { _id: args.consumerId }, 'carts')
}
