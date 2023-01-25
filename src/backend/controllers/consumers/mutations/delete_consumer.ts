import { Context } from '../../../../types/setup/context'
import { DeleteConsumer } from '../../../../types/consumer'
import { deleteData } from '../../../_utils/handleData/deleteData'
import { deleteAddress } from '../../addresses/mutations/delete_address'
import { deleteCart } from '../../carts/mutations/delete_cart'

export default async (
  _root: undefined,
  args: DeleteConsumer,
  context: Context
): Promise<void> => {
  await deleteAddress(context, { _id: args.addressId })

  await deleteCart(context, { consumerId: args._id })

  await deleteData(context, args, 'consumers')
}
