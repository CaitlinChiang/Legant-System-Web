import { Context } from '../../../../types/setup/context'
import { CreateAddress } from '../../../../types/address'
import { createData } from '../../../_utils/handleData/createData'

export const createAddress = async (
  context: Context,
  args: CreateAddress
): Promise<void> => {
  await createData(context, args, 'addresses')
}
