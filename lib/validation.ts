import { ChangePassword, Credentials, Labo, LaboErrors } from "@app/type/interface"

export const processDash = (input: string) => {
  // Loại bỏ dấu '-' ở đầu và cuối chuỗi
  let trimmedInput = input.replace(/^-+|-+$/g, "")
  // Lặp lại thay thế dấu '-' nằm giữa các ký tự bất kỳ
  while (trimmedInput.includes("-")) {
    trimmedInput = trimmedInput.replace(/(\S)-(\S)/g, "$1, $2")
  }
  return trimmedInput
}

// Validation for login form
export const validationAuthLogin = (
  credentials: Credentials,
  setErrors: (errors: Credentials) => void,
  t?: (key: string) => string
) => {
  const errors = {
    email: "",
    password: "",
  }
  if (credentials.email.indexOf("@") === -1) {
    errors.email = t ? t("login.error.invalidEmail") : "Email is invalid"
  }
  if (!credentials.email) {
    errors.email = t ? t("login.error.email") : "Email is required"
  }
  if (!credentials.password) {
    errors.password = t ? t("login.error.password") : "Password is required"
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

export const validationLabo = (labo: Labo, setErrors: (errors: LaboErrors) => void) => {
  const errors = {
    codeNo: "",
    fullName: "",
    clinic: "",
    validTo: "",
    laboName: "",
    quantity: "",
    position: "",
    restorationType: "",
    origin: "",
    toothColor: "",
  }

  if (labo.codeNo.length === 0) {
    errors.codeNo = "Code No is required"
  }

  if (labo.fullName.length === 0) {
    errors.fullName = "fullName is required"
  }

  if (labo.clinic.length === 0) {
    errors.clinic = "Clinic is required"
  }

  if (labo.validTo.length === 0) {
    errors.validTo = "Valid To is required"
  }

  if (labo.laboName.length === 0) {
    errors.laboName = "Labo Name is required"
  }

  if (Number(labo.quantity) === 0) {
    errors.quantity = "Quantity is required"
  }

  if (labo.position.length === 0) {
    errors.position = "Position is required"
  }

  if (labo.restorationType.length === 0) {
    errors.restorationType = "Restoration Type is required"
  }

  setErrors(errors)

  return (
    errors.codeNo.length === 0 &&
    errors.fullName.length === 0 &&
    errors.clinic.length === 0 &&
    errors.validTo.length === 0 &&
    errors.laboName.length === 0 &&
    errors.quantity.length === 0 &&
    errors.position.length === 0 &&
    errors.restorationType.length === 0
  )
}
