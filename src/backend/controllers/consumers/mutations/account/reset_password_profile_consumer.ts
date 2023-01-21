import bcrypt from 'bcrypt'
import { Context } from '../../../../../types/setup/context'
import { Consumer } from '../../../../../types/consumer'
import { ResetPasswordProfile } from '../../../../../types/common/account'
import { MutateAction } from '../../../../../enums/mutateAction'
import { UserType } from '../../../../../enums/userType'
import { mutateArgs } from '../../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../../_utils/handleValidations/validateUser'
import { validatePassword } from '../../../../_utils/handleValidations/validatePassword'

export default async (
  _root: undefined,
  args: ResetPasswordProfile,
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

  await validatePassword({
    password: args.oldPassword,
    reset: true,
    user: consumer
  })

  const updatedConsumer: Consumer = await context.database.consumers
    .findOneAndUpdate(
      { email: args.email },
      { $set: mutateArgs({ password }, MutateAction.UPDATE) },
      { returnDocument: 'after' }
    )
    .then((consumer) => consumer.value)

  return updatedConsumer
}
