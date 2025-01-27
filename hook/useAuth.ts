"use client"
// hooks/useAuth.ts
import { useDispatch, useSelector } from "react-redux"
import { changePassword, login as loginAuth, logout as logoutAuth } from "@app/store/slices/authSlice"
import { AppDispatch, RootState } from "@app/store/store"
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
