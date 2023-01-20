import { Context } from '../../../../types/setup/context'
import { GetProducts } from '../../../../types/product'
import { returnDataCount } from '../../../_utils/handleData/returnDataCount'

export default async (
  _root: undefined,
  args: GetProducts,
  context: Context
): Promise<number> => {
  const count: number = await returnDataCount(context, args, 'products')
  return count
}
