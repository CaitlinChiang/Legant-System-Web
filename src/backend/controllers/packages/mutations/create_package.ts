import { Context } from '../../../../types/setup/context'
import { CreatePackage } from '../../../../types/package'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { createData } from '../../../_utils/handleData/createData'
import { uploadImage } from '../../../_utils/handleImages/upload'

export default async (
  _root: undefined,
  args: CreatePackage,
  context: Context
): Promise<void> => {
  const { image, ...modifiedArgs } = args

  const imageUrl = await uploadImage({
    imageType: UploadImageType.PACKAGE,
    image,
    name: args.name
  })

  await createData(context, { ...modifiedArgs, imageUrl }, 'packages')
}
