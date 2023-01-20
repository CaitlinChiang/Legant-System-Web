import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { Payment, UpdatePayment } from '../../../../types/payment'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { MutateAction } from '../../../../enums/mutateAction'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { uploadImage } from '../../../_utils/handleImages/upload'
import { deleteImage } from '../../../_utils/handleImages/delete'

export default async (
  _root: undefined,
  args: UpdatePayment,
  context: Context
): Promise<Payment> => {
  const { imageProof, ...modifiedArgs } = args

  let modifiedImageUrl = ''

  if (imageProof) {
    await deleteImage({ imageUrl: args.imageProofUrl })

    modifiedImageUrl = await uploadImage({
      imageType: UploadImageType.PAYMENT,
      image: imageProof,
      orderId: String(args._orderId)
    })
  }

  const updatePaymentArgs: UpdatePayment = {
    ...mutateArgs(modifiedArgs, MutateAction.UPDATE)
  }

  if (modifiedImageUrl.trim() !== '') {
    updatePaymentArgs.imageProofUrl = modifiedImageUrl
  }

  const payment: Payment = await context.database.payments
    .findOneAndUpdate(
      { _orderId: new ObjectId(args._orderId) },
      { $set: { ...updatePaymentArgs } },
      { returnDocument: 'after' }
    )
    .then((payment) => payment.value)

  return payment
}
