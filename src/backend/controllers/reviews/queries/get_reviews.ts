import { Context } from '../../../../types/setup/context'
import { Review, GetReviews } from '../../../../types/review'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetReviews,
  context: Context
): Promise<Review[]> => {
  const reviews: Review[] = await returnDataArray(context, args, 'reviews')
  return reviews
}
