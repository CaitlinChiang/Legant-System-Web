import { ObjectId } from 'mongodb'
import { PackageItem } from '../../../types/package'

export const packageItemArgs = (args: any): PackageItem => {
  const packageItem: PackageItem = {}

  if (args?.productId) {
    packageItem.productId = new ObjectId(args.productId)
  }

  return packageItem
}
