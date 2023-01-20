import { Context } from '../../../../types/setup/context'
import { Package, UpdatePackageItemQty } from '../../../../types/package'
import { packageItemArgs } from '../../../_utils/handleArgs/packageItemArgs'

export default async (
  _root: undefined,
  args: UpdatePackageItemQty,
  context: Context
): Promise<Package> => {
  const pack: Package = await context.database.packages
    .findOneAndUpdate(
      {
        consumerId: context.consumerId,
        items: { $elemMatch: packageItemArgs(args) }
      },
      {
        $set: {
          'items.$.quantity': args.quantity,
          'items.$.totalPrice': args.price * args.quantity
        }
      },
      { returnDocument: 'after' }
    )
    .then((pack) => pack.value)

  return pack
}
