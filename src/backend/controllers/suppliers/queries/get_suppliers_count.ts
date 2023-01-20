import { Context } from '../../../../types/setup/context'
import { GetSuppliers } from '../../../../types/supplier'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetSuppliers,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'suppliers')
  return count
}
