import { verificationCodeTemplate } from '../verificationCode'

const AWS = require('../../../setup/aws-ses')

export const updateTemplate = async (): Promise<void> => {
  const updateTemplate = new AWS.SES({ apiVersion: '2010-12-01' })
    // CHANGE TEMPLATE NAME DEPENDING ON WHICH TEMPLATE IS BEING UPDATED
    .updateTemplate({ Template: verificationCodeTemplate })
    .promise()

  updateTemplate
    .then(() => console.log('Template Successfully Updated!'))
    .catch((err) => console.error(err, err.stack))
}
