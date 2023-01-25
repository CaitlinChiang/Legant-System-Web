import { Context } from '../../../../types/setup/context'
import { GetReviews } from '../../../../types/review'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetReviews,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'reviews')
  return count
}
