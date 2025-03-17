import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
// eslint-disable-next-line import/no-unresolved
import imageCard from "/images/card/emax.png"

const EMax = ({ labo }: { labo?: Labo }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
      <p className="absolute left-1/4 top-[38.5%] text-xs font-semibold text-gray-800 md:top-[37%] md:text-lg">
        {labo?.fullName}
      </p>
      <p className="absolute left-1/4 top-[49.8%] text-xs font-semibold text-gray-800 sm:top-[50.5%] md:top-[48.8%] md:text-lg">
        {labo?.clinic}
      </p>
      <p className="absolute left-1/4 top-[63%] text-xs font-semibold text-gray-800 md:top-[62.3%] md:text-lg">
        {labo?.laboName}
      </p>
      <p className="absolute right-[3%] top-[58%] text-xs font-semibold text-gray-800 md:top-[57.5%] md:text-lg">
        {new Date(labo?.validTo ?? "").toLocaleString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
    </div>
  )
}

export default EMax
