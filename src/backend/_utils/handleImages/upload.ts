import { UploadImageArgs } from '../../../types/common/uploadImage'
import { UploadImageType } from '../../../enums/uploadImageType'

const cloudinary = require('../setup/cloudinary')

export const uploadImage = async (args: UploadImageArgs): Promise<string> => {
  if (!args.image) return

  const { createReadStream } = await args.image
  const fileName = assignFileName(args)

  return await uploadToCloudinary(createReadStream, fileName)
}

// GENERATE FILE NAMES
const assignFileName = (args: UploadImageArgs) => {
  const { imageType, name, orderId } = args

  switch (imageType) {
    case UploadImageType.PACKAGE:
      return generatePackageFileName(name)
    case UploadImageType.PAYMENT:
      return generatePaymentImageFileName(orderId)
    case UploadImageType.PRODUCT:
      return generateProductImageFileName(name)
  }
}

const generatePackageFileName = (name: string) => {
  const folderName = 'packages/'
  const modifiedPackageName = name.replaceAll(' ', '_').toLowerCase()

  return folderName.concat(modifiedPackageName)
}

const generatePaymentImageFileName = (orderId: string) => {
  const folderName = 'payments/'
  const modifiedPaymentId = orderId.substring(orderId.length - 5)

  return folderName.concat(modifiedPaymentId)
}

const generateProductImageFileName = (name: string) => {
  const folderName = 'products/'
  const modifiedProductName = name.replaceAll(' ', '_').toLowerCase()

  return folderName.concat(modifiedProductName)
}

// UPLOAD IMAGE TO CLOUDINARY
const uploadToCloudinary = async (createReadStream, fileName): Promise<string> => {
  let imageUrl = ''

  try {
    imageUrl = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { public_id: fileName },
        (err, res) => {
          if (err) reject(err)
          else resolve(res.secure_url)
        }
      )
      createReadStream().pipe(stream)
    })
  } catch (err) {
    console.error(err)
  }

  return imageUrl
}
