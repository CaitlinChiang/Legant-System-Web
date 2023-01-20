import { Context } from '../../../../types/setup/context'
import { Review, UpdateReview } from '../../../../types/review'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateReview,
  context: Context
): Promise<Review> => {
  const review: Review = await returnUpdatedData(context, args, 'reviews')
  return review
}
