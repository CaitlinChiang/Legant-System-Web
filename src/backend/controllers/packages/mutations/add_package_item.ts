import { Context } from '../../../../types/setup/context'
import { Package, PackageItem, AddPackageItem } from '../../../../types/package'
import { MutateAction } from '../../../../enums/mutateAction'
import { packageItemArgs } from '../../../_utils/handleArgs/packageItemArgs'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'

export default async (
  _root: undefined,
  args: AddPackageItem,
  context: Context
): Promise<void> => {
  const pack: Package = await context.database.packages.findOne({
    consumerId: context.consumerId
  })

  let itemAppended = false
  let itemQuantity = 0

  for (let i = 0, n = pack?.items?.length; i < n; i++) {
    const packageItem: PackageItem = pack.items[i]
    const packageItemObj = JSON.stringify(packageItemArgs(packageItem))
    const inputItemObj = JSON.stringify(packageItemArgs(args.item))

    if (packageItemObj === inputItemObj) {
      itemAppended = true
      itemQuantity = packageItem.quantity + args.item.quantity
    }
  }

  if (itemAppended) {
    await context.database.packages.findOneAndUpdate(
      {
        consumerId: context.consumerId,
        items: { $elemMatch: packageItemArgs(args.item) }
      },
      { $set: { 'items.$.quantity': itemQuantity } }
    )
  } else {
    await context.database.packages.findOneAndUpdate(
      { consumerId: context.consumerId },
      { $push: { items: mutateArgs(args.item, MutateAction.CREATE) } }
    )
  }
}
