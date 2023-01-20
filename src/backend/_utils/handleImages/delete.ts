const cloudinary = require('../setup/cloudinary')

export const deleteImage = async ({
  imageUrl
}: {
  imageUrl: string
}): Promise<void> => {
  if (!imageUrl) return

  await cloudinary.uploader.destroy(imageUrl)
}
