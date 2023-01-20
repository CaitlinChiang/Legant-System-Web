import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Product, UpdateProduct } from '../../../../types/product'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { MutateAction } from '../../../../enums/mutateAction'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { uploadImage } from '../../../_utils/handleImages/upload'
import { deleteImage } from '../../../_utils/handleImages/delete'

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
      productName: args.name
    })
  }

  const updateProductArgs: UpdateProduct = {
    ...mutateArgs(modifiedArgs, MutateAction.UPDATE)
  }

  if (modifiedImageUrl.trim() !== '') {
    updateProductArgs.imageUrl = modifiedImageUrl
  }

  const product: Product = await context.database.products
    .findOneAndUpdate(
      { _id: new ObjectId(args._id) },
      { $set: updateProductArgs },
      { returnDocument: 'after' }
    )
    .then((product) => product.value)

  return product
}
