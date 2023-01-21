export interface SignIn {
  email: string
  password: string
}

export interface ForgotPassword {
  email: string
  type: UserType
}

export interface ResetPasswordEmail {
  email: string
  newPassword: string
  verificationCode: string
}

export interface ResetPasswordProfile {
  email: string
  newPassword: string
  oldPassword: string
}
