import { Context } from '../../../../types/setup/context'
import { DeletePackage } from '../../../../types/package'
import { deleteImage } from '../../../_utils/handleImages/delete'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeletePackage,
  context: Context
): Promise<void> => {
  await deleteImage({ imageUrl: args?.imageUrl })

  await deleteData(context, args, 'packages')
}
