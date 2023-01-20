import { Context } from '../../../../types/setup/context'
import { Product, GetProducts } from '../../../../types/product'
import { returnDataArray } from '../../../_utils/handleData/returnDataArray'

export default async (
  _root: undefined,
  args: GetProducts,
  context: Context
): Promise<Product[]> => {
  const products: Product[] = await returnDataArray(context, args, 'products')
  return products
}
