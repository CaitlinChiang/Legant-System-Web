import { Context } from '../../../../types/setup/context'
import { CreateSupplier } from '../../../../types/supplier'
import { createData } from '../../../_utils/handleData/createData'

export default async (
  _root: undefined,
  args: CreateSupplier,
  context: Context
): Promise<void> => {
  await createData(context, args, 'suppliers')
}
