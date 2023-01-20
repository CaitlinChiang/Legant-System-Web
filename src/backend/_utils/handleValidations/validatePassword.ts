import bcrypt from 'bcrypt'
import { UserInputError } from 'apollo-server-express'
import { Admin } from '../../../types/admin'
import { Consumer } from '../../../types/consumer'

export const validatePassword = async ({
  password,
  reset,
  user
}: {
  password: string
  reset?: boolean
  user: Admin | Consumer
}): Promise<void> => {
  const passwordsMatch = await bcrypt.compare(password, user.password)

  if (!passwordsMatch && !reset) {
    throw new UserInputError('Incorrect password, please try again.')
  }

  if (!passwordsMatch && reset) {
    throw new UserInputError('Old password provided is incorrect.')
  }
}
