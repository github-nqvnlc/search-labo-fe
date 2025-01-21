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
