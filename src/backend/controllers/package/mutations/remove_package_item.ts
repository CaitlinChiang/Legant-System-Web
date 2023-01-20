import { Context } from '../../../../types/setup/context'
import { Package, RemovePackageItem } from '../../../../types/package'
import { packageItemArgs } from '../../../_utils/handleArgs/packageItemArgs'

export default async (
  _root: undefined,
  args: RemovePackageItem,
  context: Context
): Promise<Package> => {
  const pack: Package = await context.database.packages
    .findOneAndUpdate(
      { consumerId: context.consumerId },
      { $pull: { items: packageItemArgs(args) } },
      { returnDocument: 'after' }
    )
    .then((pack) => pack.value)

  return pack
}
