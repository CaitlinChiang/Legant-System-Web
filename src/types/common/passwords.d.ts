export interface ForgotPassword {
  email: string
  type: UserType
}

export interface ResetEmailPassword {
  email: string
  newPassword: string
  verificationCode: string
}

export interface ResetProfilePassword {
  email: string
  newPassword: string
  oldPassword: string
}
