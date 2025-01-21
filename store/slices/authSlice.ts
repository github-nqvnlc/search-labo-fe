"use client"

// store/slicesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiClient } from "@/lib/apiClient"
import { toast } from "react-toastify"
import { AuthState, ChangePassword, User } from "@app/type/interface"

const initialState: AuthState = {
  user:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? (JSON.parse(localStorage.getItem("user") as string) as User)
      : null,
  loading: false,
  error: null,
}

// Async thunk for login
export const login = createAsyncThunk(
  "/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const data = await apiClient.post<{data: { user: User; accessToken: string }}>("/login", credentials)
      sessionStorage.setItem("token", data.data.accessToken)
      localStorage.setItem("user", JSON.stringify(data.data.user))
      toast.success("Login success!")
      return data.data.user
    } catch (err: any) {
      toast.error(`Login failed: ${err.message}`)
      return rejectWithValue(err.message)
    }
  }
)

// Async thunk for changing password
export const changePassword = createAsyncThunk(
  "/changePassword",
  async (data: ChangePassword, { rejectWithValue }) => {
    try {
      await apiClient.post("/change-password", { ...data })
      toast.success("Change password success!")
    } catch (err: any) {
      toast.error(`Change password failed: ${err.message}`)
      return rejectWithValue(err.message)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      sessionStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logout success!")
    },
  },
  extraReducers: (builder) => {
    // Handle login
    builder.addCase(login.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })

    // Handle changePassword
    builder.addCase(changePassword.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(changePassword.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(changePassword.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
