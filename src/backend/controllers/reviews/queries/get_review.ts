import { Context } from '../../../../types/setup/context'
import { Review, GetReview } from '../../../../types/review'
import { returnData } from '../../../_utils/handleData/returnData'

export default async (
  _root: undefined,
  args: GetReview,
  context: Context
): Promise<Review> => {
  const review: Review = await returnData(context, args, 'reviews')
  return review
}
