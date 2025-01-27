"use client"

import { Box } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"
import Heading from "@/components/Heading"
import { Labo, LaboErrors } from "@app/type/interface"
import { useLabos } from "@app/hook/useLabos"
import { validationLabo } from "@/lib/validation"
import { toast } from "react-toastify"

const Page = () => {
  const router = useRouter()
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

  const handleAddLabo = async () => {
    if (!validationLabo(laboData, setErrors)) {
      console.log("error:", errors)
      toast.error("Vui lòng nhập đúng thông tin")
      return
    }

    await addLabo(laboData)
    router.push("/admin")
  }

  return (
    <div>
      <Heading>Nhập mới dữ liệu</Heading>

      <Box>
        <div className="w-full">
          <div className="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900 sm:mt-10 md:p-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Box className="w-full">
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

              <Box className="w-full">
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

              <Box className="w-full">
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

              <Box className="w-full">
                <label htmlFor="validTo" className="mb-2 block text-sm font-medium dark:text-white">
                  Có hiệu lực đến - Valid until
                </label>
                <input
                  type="date"
                  name="validTo"
                  id="validTo"
                  value={laboData.validTo}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.validTo.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Chọn ngày"
                />
              </Box>

              <Box className="w-full">
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
              <Box className="w-full">
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

              <Box className="w-full">
                <label htmlFor="position" className="mb-2 block text-sm font-medium dark:text-white">
                  Vị trí - Position
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={laboData.position}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.position.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập vị trí"
                />
              </Box>

              <Box className="w-full">
                <label htmlFor="restorationType" className="mb-2 block text-sm font-medium dark:text-white">
                  Loại phục hình - Restoration Type
                </label>
                <input
                  type="text"
                  name="restorationType"
                  id="restorationType"
                  value={laboData.restorationType}
                  onChange={handleInputChange}
                  className={`block w-full rounded-lg ${
                    errors.restorationType.length > 0 ? "border-red-500" : "border-gray-200"
                  } px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600`}
                  placeholder="Nhập loại phục hình"
                />
              </Box>

              <Box className="w-full">
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

              <Box className="w-full">
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
