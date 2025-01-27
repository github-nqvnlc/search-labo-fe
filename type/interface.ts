export interface Credentials {
  email: string
  password: string
}

export interface User {
  _id: string
  name: string
  email: string
}

export interface ChangePassword {
  userId: string | null
  email: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export interface Labo {
  _id?: string
  id?: string
  codeNo: string
  fullName: string
  clinic: string
  validTo: string
  laboName: string
  quantity: string
  position: string
  restorationType: string
  origin: string
  toothColor: string
  isNew?: boolean
}

export interface LaboErrors {
  codeNo: string
  fullName: string
  clinic: string
  validTo: string
  laboName: string
  quantity: string
  position: string
  restorationType: string
  origin: string
  toothColor: string
}
