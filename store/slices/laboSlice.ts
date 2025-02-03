"use client"

// store/slicesSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { apiClient } from "@/lib/apiClient"
import { Labo } from "@app/type/interface"

interface LaboState {
  Labo: {
    data: Labo[]
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
    nextPage: number | null
    page: number
    pagingCounter: number
    prevPage: number | null
    totalDocs: number
    totalPages: number
  }
  loading: boolean
  error: string | null
}

const initialState: LaboState = {
  Labo: {
    data: [],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 0,
    nextPage: null,
    page: 0,
    pagingCounter: 0,
    prevPage: null,
    totalDocs: 0,
    totalPages: 0,
  },
  loading: false,
  error: null,
}

export const getAllLabos = createAsyncThunk("/labo", async () => {
  try {
    const data = await apiClient.get<Labo[]>("/labo")
    return data
  } catch (err: any) {
    return err.message
  }
})

export const addLabo = createAsyncThunk(
  "/labo/create",
  async (newLabo: {
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
  }) => {
    try {
      const data = await apiClient.post<Labo>("/labo", newLabo)
      toast.success("Thêm mới thành công")
      return data
    } catch (err: any) {
      toast.error(`Thêm mới thất bại: ${err.message}`)
      return err.message
    }
  }
)

export const updateLabo = createAsyncThunk(
  "/labo/update",
  async (data: {
    id: string
    updatedData: {
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
  }) => {
    try {
      const updatedLabo = await apiClient.put<Labo>(`/labo/${data.id}`, data.updatedData)
      toast.success("Cập nhật thành công")
      return updatedLabo
    } catch (err: any) {
      toast.error(`Cập nhật thất bại: ${err.message}`)
      return err.message
    }
  }
)

export const deleteLabo = createAsyncThunk("/labo/delete", async (id: string) => {
  try {
    await apiClient.delete(`/labo/${id}`)
    toast.success("Xóa thành công")
    return id
  } catch (err: any) {
    toast.error(`Xóa thất bại: ${err.message}`)
    return err.message
  }
})

const laboSlice = createSlice({
  name: "labo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLabos.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllLabos.fulfilled, (state, action) => {
      state.loading = false
      state.Labo = {
        data: action.payload.data?.docs,
        hasNextPage: action.payload.data?.hasNextPage,
        hasPrevPage: action.payload.data?.hasPrevPage,
        limit: action.payload.data?.limit,
        nextPage: action.payload.data?.nextPage,
        page: action.payload.data?.page,
        pagingCounter: action.payload.data?.pagingCounter,
        prevPage: action.payload.data?.prevPage,
        totalDocs: action.payload.data?.totalDocs,
        totalPages: action.payload.data?.totalPages,
      }
    })
    builder.addCase(getAllLabos.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })

    builder.addCase(addLabo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(addLabo.fulfilled, (state, action) => {
      state.loading = false
      state.Labo.data.push(action.payload)
    })
    builder.addCase(addLabo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })

    builder.addCase(updateLabo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(updateLabo.fulfilled, (state, action) => {
      state.loading = false
      state.Labo.data = state.Labo.data.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      )
    })
    builder.addCase(updateLabo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })

    builder.addCase(deleteLabo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(deleteLabo.fulfilled, (state, action) => {
      state.loading = false
      console.log("action.payload", action.payload)
      state.Labo.data = state.Labo.data.filter((item) => item._id !== action.payload)
    })
    builder.addCase(deleteLabo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})

export default laboSlice.reducer
