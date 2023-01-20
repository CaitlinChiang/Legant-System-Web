import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { deleteImage } from '../../../_utils/handleImages/delete'

export const deletePayment = async (
  context: Context,
  orderId: ObjectId
): Promise<void> => {
  const imageProofUrl = String(orderId).substring(String(orderId).length - 5)

  await deleteImage({ imageUrl: 'payments/' + imageProofUrl })

  await context.database.payments.findOneAndDelete({
    _orderId: new ObjectId(orderId)
  })
}
