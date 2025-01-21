import { ChangePassword, Credentials } from "@app/type/interface"

// Validation for login form
export const validationAuthLogin = (
  credentials: Credentials,
  setErrors: (errors: Credentials) => void,
  t: (key: string) => string
) => {
  const errors = {
    email: "",
    password: "",
  }
  if (credentials.email.indexOf("@") === -1) {
    errors.email = t("login.error.invalidEmail")
  }
  if (!credentials.email) {
    errors.email = t("login.error.email")
  }
  if (!credentials.password) {
    errors.password = t("login.error.password")
  }

  setErrors(errors)
  return errors.email.length === 0 && errors.password.length === 0
}

// Validation for change password form
export const validationChangePassword = (changeData: ChangePassword, setErrors: (errors: ChangePassword) => void) => {
  const errors = {
    userId: null,
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }
  if (changeData.email.length === 0) {
    errors.email = "Email is required"
  }
  if (changeData.email.indexOf("@") === -1) {
    errors.email = "Email is invalid"
  }
  if (changeData.currentPassword.length === 0) {
    errors.currentPassword = "Current password is required"
  }
  if (changeData.newPassword.length === 0) {
    errors.newPassword = "New password is required"
  }
  if (changeData.confirmPassword.length === 0) {
    errors.confirmPassword = "Confirm password is required"
  }
  if (changeData.newPassword !== changeData.confirmPassword) {
    errors.confirmPassword = "Confirm password must match new password"
  }
  if (changeData.currentPassword === changeData.newPassword) {
    errors.newPassword = "New password must be different from current password"
  }

  setErrors(errors)
  return (
    errors.email.length === 0 &&
    errors.currentPassword.length === 0 &&
    errors.newPassword.length === 0 &&
    errors.confirmPassword.length === 0
  )
}
