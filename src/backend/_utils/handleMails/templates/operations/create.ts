import { paymentReceiptTemplate } from '../paymentReceipt'

const AWS = require('../../../setup/aws-ses')

export const createTemplate = async (): Promise<void> => {
  const createTemplate = new AWS.SES({ apiVersion: '2010-12-01' })
    // CHANGE TEMPLATE NAME DEPENDING ON WHICH TEMPLATE IS BEING CREATED
    .createTemplate({ Template: paymentReceiptTemplate })
    .promise()

  createTemplate
    .then(() => console.log('Template Successfully Created!'))
    .catch((err) => console.error(err, err.stack))
}
