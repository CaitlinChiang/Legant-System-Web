import { Context } from '../../../../types/setup/context'
import { Address, UpdateAddress } from '../../../../types/address'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateAddress,
  context: Context
): Promise<Address> => {
  const address: Address = await returnUpdatedData(context, args, 'addresses')
  return address
}
