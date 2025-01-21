"use client"
// hooks/useAuth.ts
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@app/store/store"
import { login as loginAuth, logout as logoutAuth, changePassword } from "@app/store/slices/authSlice"
import { ChangePassword } from "@app/type/interface"

export function useAuth() {
  const dispatch: AppDispatch = useDispatch()
  const { user, loading, error } = useSelector((state: RootState) => state.auth)

  const login = async (credentials: { email: string; password: string }) => {
    await dispatch(loginAuth(credentials))
  }

  const logout = () => {
    dispatch(logoutAuth())
  }

  const updatePassword = async (data: ChangePassword) => {
    await dispatch(changePassword(data))
  }

  return {
    user,
    loading,
    error,
    login,
    logout,
    updatePassword,
  }
}
