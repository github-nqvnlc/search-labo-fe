"use client"
import React from "react"

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <p className="py-5 text-4xl font-semibold">{children}</p>
}

export default Heading
