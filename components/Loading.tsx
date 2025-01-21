"use client"

import { Stack } from "@mui/material"
import { tailspin } from "ldrs"
import React from "react"

const Loading = () => {
  tailspin.register()

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <l-tailspin size="50" stroke="7" speed="0.9" color="#006584"></l-tailspin>
    </Stack>
  )
}

export default Loading
