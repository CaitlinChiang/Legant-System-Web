import { Context } from '../../../../types/setup/context'
import { DeleteReview } from '../../../../types/review'
import { deleteData } from '../../../_utils/handleData/deleteData'

export default async (
  _root: undefined,
  args: DeleteReview,
  context: Context
): Promise<void> => {
  await deleteData(context, args, 'reviews')
}
