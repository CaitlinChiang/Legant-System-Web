import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { CreateAddress } from '../../../../types/address'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { MutateAction } from '../../../../enums/mutateAction'

export const createAddress = async (
  context: Context,
  args: CreateAddress
): Promise<ObjectId> => {
  const addressId: ObjectId = await context.database.addresses
    .insertOne(mutateArgs(args, MutateAction.CREATE))
    .then((data) => data.insertedId)

  return addressId
}
