"use client"
import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
// eslint-disable-next-line import/no-unresolved
import imageCard from "../../images/card/ddbio.png"

const Ddbio = ({ labo }: { labo?: Labo }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
      <p className="absolute left-[24%] top-[36.2%] text-xs font-semibold text-gray-800 md:top-[35%] md:text-lg">
        {labo?.codeNo}
      </p>
      <p className="absolute left-[24%] top-[65.8%] text-xs font-semibold text-gray-800 md:top-[64.2%] md:text-lg">
        {labo?.clinic}
      </p>
      <p className="absolute left-[24%] top-[50.2%] text-xs font-semibold text-gray-800 md:top-[49.9%] md:text-lg">
        {labo?.fullName}
      </p>
      <p className="absolute left-[24%] top-[80.7%] text-xs font-semibold text-gray-800 md:top-[79.6%] md:text-lg">
        {labo?.laboName}
      </p>
    </div>
  )
}

export default Ddbio
