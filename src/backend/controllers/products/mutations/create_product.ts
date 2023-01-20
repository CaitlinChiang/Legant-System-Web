import { Context } from '../../../../types/setup/context'
import { CreateProduct } from '../../../../types/product'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { MutateAction } from '../../../../enums/mutateAction'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { uploadImage } from '../../../_utils/handleImages/upload'

export default async (
  _root: undefined,
  args: CreateProduct,
  context: Context
): Promise<void> => {
  const { image, ...modifiedArgs } = args

  const imageUrl = await uploadImage({
    imageType: UploadImageType.PRODUCT,
    image,
    productName: args.name
  })

  await context.database.products.insertOne({
    ...mutateArgs(modifiedArgs, MutateAction.CREATE),
    imageUrl
  })
}
