import { Context } from '../../../../../types/setup/context'
import { Consumer } from '../../../../../types/consumer'
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
    type: UserType.CONSUMER
  })

  const consumer: Consumer = await context.database.consumers.findOne({
    email: args.email
  })

  await validatePassword({ password: args.password, user: consumer })

  const token = await generateJWT(consumer._id)
  return token
}
