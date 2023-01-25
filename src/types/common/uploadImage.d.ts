import { FileUpload } from 'graphql-upload'

export interface UploadImageArgs {
  image?: Promise<FileUpload>
  imageType?: string
  name?: string
  orderId?: string
}
