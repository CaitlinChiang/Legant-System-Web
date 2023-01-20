import { Context } from '../../../../types/setup/context'
import { Package } from '../../../../types/package'

export default async (
  _root: undefined,
  args: undefined,
  context: Context
): Promise<Package> => {
  const pack: Package = await context.database.packages.findOne({
    consumerId: context.consumerId
  })
  return pack
}
