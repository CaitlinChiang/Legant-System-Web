import sign_in_consumer from './account/sign_in_consumer'
import create_consumer from './create_consumer'
import update_consumer from './update_consumer'
import delete_consumer from './delete_consumer'
import forgot_password_consumer from './account/forgot_password_consumer'
import reset_password_email_consumer from './account/reset_password_email_consumer'
import reset_password_profile_consumer from './account/reset_password_profile_consumer'

export default {
  sign_in_consumer,
  create_consumer,
  update_consumer,
  delete_consumer,
  forgot_password_consumer,
  reset_password_email_consumer,
  reset_password_profile_consumer
}
