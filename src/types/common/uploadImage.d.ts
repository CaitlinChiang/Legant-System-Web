import { FileUpload } from 'graphql-upload'

export interface UploadImageArgs {
  image?: Promise<FileUpload>
  imageType?: string
  orderId?: string
  productName?: string
}
