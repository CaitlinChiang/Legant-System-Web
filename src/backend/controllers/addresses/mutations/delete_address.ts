import { Context } from '../../../../types/setup/context'
import { DeleteAddress } from '../../../../types/address'
import { deleteData } from '../../../_utils/handleData/deleteData'

export const createAddress = async (
  context: Context,
  args: DeleteAddress
): Promise<void> => {
  await deleteData(context, args, 'addresses')
}
