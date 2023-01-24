import isEmail from 'validator/lib/isEmail'

export const returnError = ({
  args,
  error,
  nestedProp,
  targetProp
}: {
  args: any
  error: boolean
  nestedProp?: string
  targetProp: string
}): boolean => {
  if (!error) return false

  const val = args?.[targetProp]

  let emptyArgs = !val

  if (nestedProp) {
    emptyArgs = !val?.[nestedProp]
  }

  if (emptyArgs) return true
  if (targetProp === 'email' && !isEmail(args?.email)) return true
  if (targetProp === 'password' && args?.password?.length < 8) return true

  return false
}
