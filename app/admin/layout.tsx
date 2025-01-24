"use client"

import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@app/store/store"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])
  return <div>{children}</div>
}

export default Layout
