import { Context } from '../../../../types/setup/context'
import { Supplier, GetSupplier } from '../../../../types/supplier'
import { returnData } from '../../../_utils/handleData/returnData'

export default async (
  _root: undefined,
  args: GetSupplier,
  context: Context
): Promise<Supplier> => {
  const supplier: Supplier = await returnData(context, args, 'suppliers')
  return supplier
}
