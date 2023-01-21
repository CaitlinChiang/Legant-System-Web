import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { CreateConsumer } from '../../../../types/consumer'
import { MutateAction } from '../../../../enums/mutateAction'
import { UserType } from '../../../../enums/userType'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../_utils/handleValidations/validateUser'
import { generateJWT } from '../../../_utils/auth/jwt'

export default async (
  _root: undefined,
  args: CreateConsumer,
  context: Context
): Promise<string> => {
  await validateUser({ context, email: args.email, type: UserType.CONSUMER })

  const hashedPassword = await bcrypt.hash(args.password, 12)

  const consumerId: ObjectId = await context.database.consumers
    .insertOne({
      ...mutateArgs(args, MutateAction.CREATE),
      password: hashedPassword
    })
    .then((consumer) => consumer.insertedId)

  await context.database.packages.insertOne({ consumerId: consumerId })

  const token = await generateJWT(consumerId)
  return token
}
