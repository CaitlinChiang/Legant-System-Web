import { Context } from '../../../../types/setup/context'
import { Package, UpdatePackage } from '../../../../types/package'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { returnUpdatedData } from '../../../_utils/handleData/returnUpdatedData'
import { uploadImage } from '../../../_utils/handleImages/upload'
import { deleteImage } from '../../../_utils/handleImages/delete'

export default async (
  _root: undefined,
  args: UpdatePackage,
  context: Context
): Promise<Package> => {
  const { image, ...modifiedArgs } = args

  let modifiedImageUrl = ''

  if (image) {
    await deleteImage({ imageUrl: args?.imageUrl })

    modifiedImageUrl = await uploadImage({
      imageType: UploadImageType.PACKAGE,
      image,
      name: args.name
    })
  }

  const updatePackageArgs: UpdatePackage = modifiedArgs

  if (modifiedImageUrl.trim() !== '') {
    updatePackageArgs.imageUrl = modifiedImageUrl
  }

  const pack: Package = await returnUpdatedData(
    context,
    updatePackageArgs,
    'packages'
  )
  return pack
}
