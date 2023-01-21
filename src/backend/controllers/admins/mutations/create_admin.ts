import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { CreateAdmin } from '../../../../types/admin'
import { MutateAction } from '../../../../enums/mutateAction'
import { UserType } from '../../../../enums/userType'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { validateUser } from '../../../_utils/handleValidations/validateUser'
import { generateJWT } from '../../../_utils/auth/jwt'

export default async (
  _root: undefined,
  args: CreateAdmin,
  context: Context
): Promise<string> => {
  await validateUser({ context, email: args.email, type: UserType.ADMIN })

  const hashedPassword = await bcrypt.hash(args.password, 12)

  const adminId: ObjectId = await context.database.admins
    .insertOne({
      ...mutateArgs(args, MutateAction.CREATE),
      password: hashedPassword
    })
    .then((admin) => admin.insertedId)

  const token = await generateJWT(adminId)
  return token
}
