import { Context } from '../../../../types/setup/context'
import { Product, UpdateProduct } from '../../../../types/product'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { uploadImage } from '../../../_utils/handleImages/upload'
import { deleteImage } from '../../../_utils/handleImages/delete'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'

export default async (
  _root: undefined,
  args: UpdateProduct,
  context: Context
): Promise<Product> => {
  const { image, ...modifiedArgs } = args

  let modifiedImageUrl = ''

  if (image) {
    await deleteImage({ imageUrl: args?.imageUrl })

    modifiedImageUrl = await uploadImage({
      imageType: UploadImageType.PRODUCT,
      image,
      name: args.name
    })
  }

  const updateProductArgs: UpdateProduct = modifiedArgs

  if (modifiedImageUrl.trim() !== '') {
    updateProductArgs.imageUrl = modifiedImageUrl
  }

  const product: Product = await returnUpdatedData(
    context,
    updateProductArgs,
    'products'
  )
  return product
}
