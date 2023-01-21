import { Context } from '../../../../../types/setup/context'
import { ForgotPassword } from '../../../../../types/common/account'
import { MutateAction } from '../../../../../enums/mutateAction'
import { UserType } from '../../../../../enums/userType'
import { mutateArgs } from '../../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../../_utils/handleValidations/validateUser'
import { sendVerificationCode } from '../../../../_utils/handleMails/send/verificationCode'

export default async (
  _root: undefined,
  args: ForgotPassword,
  context: Context
): Promise<void> => {
  await validateUser({
    context,
    email: args.email,
    shouldExist: true,
    type: UserType.CONSUMER
  })

  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()

  await context.database.consumers.findOneAndUpdate(
    { email: args.email },
    { $set: mutateArgs({ verificationCode }, MutateAction.UPDATE) }
  )

  await sendVerificationCode(args.email, verificationCode)
}
