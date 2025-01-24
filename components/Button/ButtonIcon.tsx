"use client"

import React from "react"

const ButtonIcon = ({
  children,
  icon,
  outlineVariant = false,
}: {
  children?: React.ReactNode
  icon?: React.ReactNode
  outlineVariant?: boolean
}) => {
  const outline = (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    >
      {icon}
      {children}
    </button>
  )

  const solid = (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium uppercase text-white shadow-sm hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    >
      {icon}
      {children}
    </button>
  )

  return <div>{outlineVariant ? outline : solid}</div>
}

export default ButtonIcon
