import { Context } from '../../../../types/setup/context'

export const emptyPackage = async (context: Context): Promise<void> => {
  await context.database.packages.findOneAndUpdate(
    { consumerId: context.consumerId },
    { $set: { items: [], quantity: 0, totalPrice: 0 } }
  )
}
