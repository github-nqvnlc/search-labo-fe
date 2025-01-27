// store/store.ts
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import laboReducer from "./slices/laboSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    labo: laboReducer,
  },
})

// Types cho TypeScript
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
