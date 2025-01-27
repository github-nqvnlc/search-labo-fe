import { AppDispatch, RootState } from "@app/store/store"
import { useDispatch, useSelector } from "react-redux"
import {
  addLabo as addLaboSlice,
  deleteLabo as deleteLaboSlice,
  getAllLabos as getAllLabosSlice,
  updateLabo as updateLaboSlice,
} from "@app/store/slices/laboSlice"
import { Labo } from "@app/type/interface"

export function useLabos() {
  const dispatch: AppDispatch = useDispatch()
  const { Labo, loading, error } = useSelector((state: RootState) => state.labo)

  const getAllLabos = async () => {
    await dispatch(getAllLabosSlice())
  }

  const addLabo = async (data: Labo) => {
    await dispatch(addLaboSlice(data))
  }

  const updateLabo = async (id: string, data: Labo) => {
    await dispatch(updateLaboSlice({ id: id, updatedData: data }))
  }

  const deleteLabo = async (id: string) => {
    await dispatch(deleteLaboSlice(id))
  }

  return {
    Labo,
    loading,
    error,
    getAllLabos,
    addLabo,
    updateLabo,
    deleteLabo,
  }
}
