import { Context } from '../../../../types/setup/context'
import { Supplier, UpdateSupplier } from '../../../../types/supplier'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateSupplier,
  context: Context
): Promise<Supplier> => {
  const supplier: Supplier = await returnUpdatedData(context, args, 'suppliers')
  return supplier
}
