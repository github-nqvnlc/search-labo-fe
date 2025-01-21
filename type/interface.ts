export interface Credentials {
  email: string
  password: string
}

export interface User {
  id: number
  username: string
  email: string
  role: string
  createdAt: string
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
