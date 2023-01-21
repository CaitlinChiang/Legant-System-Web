import { Context } from '../../../../../types/setup/context'
import { Admin } from '../../../../../types/admin'
import { SignIn } from '../../../../../types/common/account'
import { UserType } from '../../../../../enums/userType'
import { validateUser } from '../../../../_utils/handleValidations/validateUser'
import { validatePassword } from '../../../../_utils/handleValidations/validatePassword'
import { generateJWT } from '../../../../_utils/auth/jwt'

export default async (
  _root: undefined,
  args: SignIn,
  context: Context
): Promise<string> => {
  await validateUser({
    context,
    email: args.email,
    shouldExist: true,
    type: UserType.ADMIN
  })

  const admin: Admin = await context.database.admins.findOne({
    email: args.email
  })

  await validatePassword({ password: args.password, user: admin })

  const token = await generateJWT(admin._id)
  return token
}
