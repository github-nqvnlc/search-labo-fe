"use client"

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { useRouter } from "next/navigation"
import React from "react"
import ButtonIcon from "@/components/Button/ButtonIcon"
import Heading from "@/components/Heading"
import TableLabo from "@/components/Table/TableLabo"

const Page = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Heading>Labo</Heading>
        <ButtonIcon onClick={() => router.push("/admin/create")} icon={<AddCircleOutlineIcon />} outlineVariant={true}>
          Thêm mới dữ liệu
        </ButtonIcon>
      </div>
      <TableLabo />
    </div>
  )
}

export default Page
