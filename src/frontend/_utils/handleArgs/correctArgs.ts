import isEmail from 'validator/lib/isEmail'
import { formatFee } from '../handleFormat/formatFee'
import { formatStockQuantity } from '../handleFormat/formatStockQuantity'

export const correctArgs = (args: any): any => {
  Object.keys(args).forEach((key: string): void => {
    const val = args[key]

    if (typeof val === 'string') modifyArgs(key, args)

    if (typeof val === 'object' && val && !Array.isArray(val)) {
      Object.keys(val).forEach((key: string) => modifyArgs(key, val))
    }

    if (['email', 'password'].includes(key)) {
      validateArgs(args)
    }
  })

  return args
}

const modifyArgs = (key: string, args: any): any => {
  const val = args[key]

  if (isNaN(val) && !isImage && val?.trim().length === 0) {
    args[key] = null
  }

  if (key === 'price') {
    args[key] = formatFee(args[key])
  }

  if (key === 'stockQuantity') {
    args[key] = formatStockQuantity(args[key])
  }
}

const isImage = (val: any): boolean => {
  return val && val['type'].split('/')[0] === 'image'
}

const validateArgs = (args: any): any => {
  const { email, password } = args

  if (email && !isEmail(email)) {
    args.email = null
  }

  if (password && password?.length < 8) {
    args.password = null
  }

  return args
}
