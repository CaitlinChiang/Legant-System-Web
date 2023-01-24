import { UserType } from '../../../enums/userType'

export const generateAdminUrl = (type: UserType): string => {
  if (type === UserType.ADMIN) {
    return '/admin'
  }
  return ''
}
