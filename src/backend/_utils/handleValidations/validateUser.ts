import { UserInputError } from 'apollo-server-express'
import { Context } from '../../../types/setup/context'
import { Admin } from '../../../types/admin'
import { Consumer } from '../../../types/consumer'
import { UserType } from '../../../enums/userType'

export const validateUser = async ({
  context,
  email,
  shouldExist,
  type
}: {
  context: Context
  email: string
  shouldExist?: boolean
  type?: UserType
}): Promise<void> => {
  const admin: Admin = await context.database.admins.findOne({ email })
  const consumer: Consumer = await context.database.consumers.findOne({ email })

  const existingAdmin: boolean = type === UserType.ADMIN && admin !== null
  const nonExistingAdmin: boolean = type === UserType.ADMIN && !admin
  const existingConsumer: boolean = type === UserType.CONSUMER && consumer !== null
  const nonExistingConsumer: boolean = type === UserType.CONSUMER && !consumer

  if (!shouldExist && (existingAdmin || existingConsumer)) {
    throw new UserInputError('User with email already exists.')
  }

  if (shouldExist && (nonExistingAdmin || nonExistingConsumer)) {
    throw new UserInputError('User does not exist.')
  }
}
