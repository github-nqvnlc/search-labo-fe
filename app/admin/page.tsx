"use client"

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import React from "react"
import ButtonIcon from "@/components/Button/ButtonIcon"
import Heading from "@/components/Heading"
import TableLabo from "@/components/Table/TableLabo"

const Page = () => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Heading>Labo</Heading>
        <ButtonIcon icon={<AddCircleOutlineIcon />} outlineVariant={true}>
          Add data
        </ButtonIcon>
      </div>
      <TableLabo />
    </div>
  )
}

export default Page
