import bcrypt from 'bcrypt'
import { UserInputError } from 'apollo-server-express'
import { Context } from '../../../../../types/setup/context'
import { Admin } from '../../../../../types/admin'
import { ResetPasswordEmail } from '../../../../../types/common/account'
import { MutateAction } from '../../../../../enums/mutateAction'
import { UserType } from '../../../../../enums/userType'
import { mutateArgs } from '../../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../../_utils/handleValidations/validateUser'

export default async (
  _root: undefined,
  args: ResetPasswordEmail,
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

  if (args.verificationCode !== admin?.verificationCode) {
    throw new UserInputError('Verification code does not exist.')
  }

  const updatedAdmin: Admin = await context.database.admins
    .findOneAndUpdate(
      { verificationCode: args.verificationCode },
      { $set: mutateArgs({ password }, MutateAction.UPDATE) },
      { returnDocument: 'after' }
    )
    .then((admin) => admin.value)

  return updatedAdmin
}
