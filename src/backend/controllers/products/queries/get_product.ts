import { Context } from '../../../../types/setup/context'
import { Product, GetProduct } from '../../../../types/product'
import { returnData } from '../../../_utils/handleData/returnData'

export default async (
  _root: undefined,
  args: GetProduct,
  context: Context
): Promise<Product> => {
  const product: Product = await returnData(context, args, 'products')
  return product
}
