import { Context } from '../../../../types/setup/context'
import { CreateReview } from '../../../../types/review'
import { createData } from '../../../_utils/handleData/createData'

export default async (
  _root: undefined,
  args: CreateReview,
  context: Context
): Promise<void> => {
  await createData(context, args, 'reviews')
}
