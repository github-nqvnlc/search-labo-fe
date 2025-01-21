// store/store.ts
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Types cho TypeScript
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
