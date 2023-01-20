import { MutateAction } from '../../../enums/mutateAction'
import { currentDateTime } from '../handleFormats/returnCurrentDateTime'
import { correctArgs } from './correctArgs'

export const mutateArgs = (args: any, action: MutateAction): any => {
  let mutateArgs: any = {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, ...updateArgs } = args

  switch (action) {
    case MutateAction.CREATE:
      mutateArgs = { ...args, createdAt: currentDateTime() }
      break
    case MutateAction.UPDATE:
      mutateArgs = { ...updateArgs, updatedAt: currentDateTime() }
  }

  correctArgs(mutateArgs, true)

  return mutateArgs
}
