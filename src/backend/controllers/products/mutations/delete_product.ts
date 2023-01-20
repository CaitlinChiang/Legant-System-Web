import { Context } from '../../../../types/setup/context'
import { DeleteProduct } from '../../../../types/product'
import { deleteImage } from '../../../_utils/handleImages/delete'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeleteProduct,
  context: Context
): Promise<void> => {
  await deleteImage({ imageUrl: args?.imageUrl })

  await deleteData(context, args, 'products')
}
