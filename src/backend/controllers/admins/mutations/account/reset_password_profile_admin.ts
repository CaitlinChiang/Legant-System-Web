import bcrypt from 'bcrypt'
import { Context } from '../../../../../types/setup/context'
import { Admin } from '../../../../../types/admin'
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
): Promise<Admin> => {
  await validateUser({
    context,
    email: args.email,
    shouldExist: true,
    type: UserType.ADMIN
  })

  const admin: Admin = await context.database.admins.findOne({
    email: args.email
  })

  const password = await bcrypt.hash(args.newPassword, 12)

  await validatePassword({
    password: args.oldPassword,
    reset: true,
    user: admin
  })

  const updatedAdmin: Admin = await context.database.admins
    .findOneAndUpdate(
      { email: args.email },
      { $set: mutateArgs({ password }, MutateAction.UPDATE) },
      { returnDocument: 'after' }
    )
    .then((consumer) => consumer.value)

  return updatedAdmin
}
