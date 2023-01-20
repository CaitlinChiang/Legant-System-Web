import { Context } from '../../../types/setup/context'
import { MutateAction } from '../../../enums/mutateAction'
import { mutateArgs } from '../handleArgs/mutateArgs'

export const createData = async (
  context: Context,
  args: any,
  dbName: string
): Promise<void> => {
  await context.database[dbName].insertOne(mutateArgs(args, MutateAction.CREATE))
}
