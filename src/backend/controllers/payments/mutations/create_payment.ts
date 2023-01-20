import { ObjectId } from 'mongodb'
import { Context } from '../../../../types/setup/context'
import { CreatePayment } from '../../../../types/payment'
import { PaymentStatus } from '../../../../enums/paymentStatus'
import { UploadImageType } from '../../../../enums/uploadImageType'
import { MutateAction } from '../../../../enums/mutateAction'
import { mutateArgs } from '../../../_utils/handleArgs/mutateArgs'
import { uploadImage } from '../../../_utils/handleImages/upload'
import { sendPaymentReceipt } from '../../../_utils/handleMails/send/paymentReceipt'

export const createPayment = async (
  context: Context,
  orderId: ObjectId,
  paymentArgs: CreatePayment
): Promise<void> => {
  const { imageProof, ...modifiedArgs } = paymentArgs

  const imageProofUrl = await uploadImage({
    imageType: UploadImageType.PAYMENT,
    image: imageProof,
    orderId: String(orderId)
  })

  await context.database.payments.insertOne({
    ...mutateArgs(modifiedArgs, MutateAction.CREATE),
    _orderId: orderId,
    imageProofUrl,
    status: PaymentStatus.COMPLETE
  })

  await sendPaymentReceipt(context, orderId, modifiedArgs)
}
