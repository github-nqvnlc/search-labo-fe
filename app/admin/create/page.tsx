"use client"

import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"
import { toast } from "react-toastify"
import Heading from "@/components/Heading"
import { validationLabo } from "@/lib/validation"
import { useLabos } from "@app/hook/useLabos"
import { Labo, LaboErrors } from "@app/type/interface"

const Page = () => {
  const router = useRouter()
  const [valuesPosition, setValuesPosition] = React.useState({
    A: "",
    B: "",
    C: "",
    D: "",
  })

  const [laboData, setLaboData] = React.useState<Labo>({
    codeNo: "",
    fullName: "",
    clinic: "",
    validTo: "",
    laboName: "",
    quantity: "",
    position: "",
    restorationType: "",
    origin: "",
    toothColor: "",
  })

  const [errors, setErrors] = React.useState<LaboErrors>({
    codeNo: "",
    fullName: "",
    clinic: "",
    validTo: "",
    laboName: "",
    quantity: "",
    position: "",
    restorationType: "",
    origin: "",
    toothColor: "",
  })

  const { addLabo } = useLabos()

  const combinedPosition = `${valuesPosition.A}-${valuesPosition.B}-${valuesPosition.C}-${valuesPosition.D}`

  const handleChangePosition = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesPosition((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLaboData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target
    setLaboData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  const handleAddLabo = async () => {
    if (!validationLabo({ ...laboData, position: combinedPosition }, setErrors)) {
      console.log("error:", errors)
      toast.error("Vui lòng nhập đúng thông tin")
      return
    }

    await addLabo({ ...laboData, position: combinedPosition })
    router.push("/admin")
  }

  return (
    <div>
      <Heading>Nhập mới dữ liệu</Heading>

      <Box>
        <div className="w-full">
          <div className="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900 sm:mt-10 md:p-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Box className="h-auto w-full">
                <label htmlFor="codeNo" className="mb-2 block text-sm font-medium dark:text-white">
                  Mã thẻ - Code No
                </label>
                <input
                  type="text"
                  name="codeNo"
                  id="codeNo"
                  value={laboData.codeNo}
                  onChange={handleInputChange}
                  className={`${
                    errors.codeNo.length > 0 ? "border-red-500" : "border-gray-200"
                  } block w-full rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhâp mã thẻ"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium dark:text-white">
                  Họ và tên - Fullname
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={laboData.fullName}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.fullName.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập họ và tên"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="clinic" className="mb-2 block text-sm font-medium dark:text-white">
                  Phòng khám - Clinic
                </label>
                <input
                  type="text"
                  name="clinic"
                  id="clinic"
                  value={laboData.clinic}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.clinic.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập phòng khám"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="validTo" className="mb-2 block text-sm font-medium dark:text-white">
                  Có hiệu lực đến - Valid to
                </label>
                <input
                  type="text"
                  name="validTo"
                  id="validTo"
                  value={laboData.validTo}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.validTo.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập ngày"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="laboName" className="mb-2 block text-sm font-medium dark:text-white">
                  Tên Labo - Labo Name
                </label>
                <input
                  type="text"
                  name="laboName"
                  id="laboName"
                  value={laboData.laboName}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.laboName.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập tên Labo"
                />
              </Box>
              <Box className="h-auto w-full">
                <label htmlFor="quantity" className="mb-2 block text-sm font-medium dark:text-white">
                  Số lượng - Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={laboData.quantity}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.quantity.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập số lượng"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="position" className="mb-2 block text-sm font-medium dark:text-white">
                  Vị trí - Position
                </label>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex size-full flex-1 flex-row items-center justify-center gap-1">
                    <div className="size-full flex-1 text-center">
                      <input
                        className={`block w-full rounded-lg ${
                          valuesPosition.A === "" ? "border-gray-200" : "border-blue-500"
                        } size-full px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500`}
                        type="text"
                        value={valuesPosition.A}
                        onChange={handleChangePosition("A")}
                      />
                    </div>
                    <div className="size-full flex-1 text-center">
                      <input
                        className={`block w-full rounded-lg ${
                          valuesPosition.B === "" ? "border-gray-200" : "border-blue-500"
                        } size-full px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500`}
                        type="text"
                        value={valuesPosition.B}
                        onChange={handleChangePosition("B")}
                      />
                    </div>
                  </div>
                  <div className="flex size-full flex-1 flex-row items-center justify-center gap-1">
                    <div className="size-full flex-1 text-center">
                      <input
                        className={`block w-full rounded-lg ${
                          valuesPosition.C === "" ? "border-gray-200" : "border-blue-500"
                        } size-full px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500`}
                        type="text"
                        value={valuesPosition.C}
                        onChange={handleChangePosition("C")}
                      />
                    </div>
                    <div className="size-full flex-1 text-center">
                      <input
                        className={`block w-full rounded-lg ${
                          valuesPosition.D === "" ? "border-gray-200" : "border-blue-500"
                        } size-full px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500`}
                        type="text"
                        value={valuesPosition.D}
                        onChange={handleChangePosition("D")}
                      />
                    </div>
                  </div>
                </div>
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="restorationType" className="mb-2 block text-sm font-medium dark:text-white">
                  Loại phục hình - Restoration Type
                </label>
                <Select
                  name="restorationType"
                  value={laboData.restorationType}
                  onChange={handleSelectChange}
                  sx={{ width: "100%" }}
                  className={`block w-full rounded-lg ${
                    errors.position.length > 0 ? "border-red-500" : "border-gray-200"
                  } text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                >
                  <MenuItem value="E.max">E.max</MenuItem>
                  <MenuItem value="UNC">UNC</MenuItem>
                  <MenuItem value="Titan">Titan</MenuItem>
                  <MenuItem value="Kim loại">Kim loại</MenuItem>
                  <MenuItem value="Cercon">Cercon</MenuItem>
                  <MenuItem value="Zirconia">Zirconia</MenuItem>
                  <MenuItem value="Ddbio">Ddbio</MenuItem>
                  <MenuItem value="Crom cobalt">Crom cobalt</MenuItem>
                  <MenuItem value="Răng">Răng</MenuItem>
                </Select>
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="origin" className="mb-2 block text-sm font-medium dark:text-white">
                  Xuất xứ - Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  id="origin"
                  value={laboData.origin}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.origin.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập xuất xứ"
                />
              </Box>

              <Box className="h-auto w-full">
                <label htmlFor="toothColor" className="mb-2 block text-sm font-medium dark:text-white">
                  Màu răng - Tooth Color
                </label>
                <input
                  type="text"
                  name="toothColor"
                  id="toothColor"
                  value={laboData.toothColor}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.toothColor.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập màu răng"
                />
              </Box>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => router.push("/admin")}
                className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-blue-600 dark:hover:text-blue-500 dark:focus:border-blue-600 dark:focus:text-blue-500"
              >
                Quay lại
              </button>
              <button
                type="button"
                onClick={handleAddLabo}
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Page
