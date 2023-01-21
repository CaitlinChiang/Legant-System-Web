import bcrypt from 'bcrypt'
import { UserInputError } from 'apollo-server-express'
import { Context } from '../../../../../types/setup/context'
import { Consumer } from '../../../../../types/consumer'
import { ResetPasswordEmail } from '../../../../../types/common/account'
import { MutateAction } from '../../../../../enums/mutateAction'
import { UserType } from '../../../../../enums/userType'
import { mutateArgs } from '../../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../../_utils/handleValidations/validateUser'

export default async (
  _root: undefined,
  args: ResetPasswordEmail,
  context: Context
): Promise<Consumer> => {
  await validateUser({
    context,
    email: args.email,
    shouldExist: true,
    type: UserType.CONSUMER
  })

  const consumer: Consumer = await context.database.consumers.findOne({
    email: args.email
  })

  const password = await bcrypt.hash(args.newPassword, 12)

  if (args.verificationCode !== consumer?.verificationCode) {
    throw new UserInputError('Verification code does not exist.')
  }

  const updatedConsumer: Consumer = await context.database.consumers
    .findOneAndUpdate(
      { verificationCode: args.verificationCode },
      { $set: mutateArgs({ password }, MutateAction.UPDATE) },
      { returnDocument: 'after' }
    )
    .then((consumer) => consumer.value)

  return updatedConsumer
}
