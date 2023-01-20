import { Context } from '../../../../types/setup/context'
import { Supplier, GetSuppliers } from '../../../../types/supplier'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetSuppliers,
  context: Context
): Promise<Supplier[]> => {
  const suppliers: Supplier[] = await returnDataArray(context, args, 'suppliers')
  return suppliers
}
