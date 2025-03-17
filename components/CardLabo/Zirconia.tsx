"use client"
import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
import Position from "./Position"
// eslint-disable-next-line import/no-unresolved
import imageCard from "/images/card/zirconia.png"

const Zirconia = ({ labo }: { labo?: Labo }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
      <p className="absolute left-[23%] top-[51.5%] text-xs font-semibold text-gray-800 md:top-[51.2%] md:text-lg">
        {labo?.fullName}
      </p>
      <p className="absolute left-[23%] top-[37.8%] text-xs font-semibold text-gray-800 md:top-[37.8%] md:text-lg">
        {labo?.clinic}
      </p>
      <p className="absolute left-[23%] top-[65.8%] text-xs font-semibold text-gray-800 md:top-[65.8%] md:text-lg">
        {labo?.position}
      </p>
      <p className="absolute left-[23%] top-[79.3%] text-xs font-semibold text-gray-800 md:top-[79.8%] md:text-lg">
        {new Date(labo?.validTo ?? "").toLocaleString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
      <Position position={labo?.position} />
    </div>
  )
}

export default Zirconia
