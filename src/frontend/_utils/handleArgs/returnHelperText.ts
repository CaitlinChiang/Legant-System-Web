import isEmail from 'validator/lib/isEmail'
import { formatText } from '../handleFormat/formatText'

export const returnHelperText = ({
  args,
  error,
  nestedProp,
  targetProp
}: {
  args: any
  error: boolean
  nestedProp?: string
  targetProp: string
}): string => {
  if (!error) return ''

  const { email, password } = args

  if (targetProp === 'email' && (!email || !isEmail(email))) {
    return 'Please enter valid email.'
  }

  if (targetProp === 'password' && password?.length < 8) {
    return 'Password must be at least 8 characters long.'
  }

  if (!args[targetProp]) {
    const fieldName = formatText(nestedProp || targetProp)
    return `${fieldName} is a required field.`
  }

  return ''
}
