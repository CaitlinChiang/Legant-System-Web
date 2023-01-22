import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { DeleteSupplier } from '../../../../types/supplier'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeleteSupplier,
  context: Context
): Promise<void> => {
  await deleteData(context, args, 'suppliers')

  await context.database.products.deleteMany({ supplierId: new ObjectId(args._id) })
}
