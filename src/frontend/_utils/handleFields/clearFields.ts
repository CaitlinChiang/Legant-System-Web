export const clearFields = (args: any): any => {
  const clearedArgs: any = {}

  Object.keys(args).forEach((key: string): void => {
    switch (key) {
      case 'showPublic':
        clearedArgs[key] = false
        break
      default:
        clearedArgs[key] = ''
    }
  })

  return clearedArgs
}
