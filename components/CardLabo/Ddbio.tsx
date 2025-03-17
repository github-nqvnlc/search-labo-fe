import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
import Position from "./Position"
// eslint-disable-next-line import/no-unresolved
import imageCard from "../../public/images/card/ddbio.png"

const Ddbio = ({ labo }: { labo?: Labo }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
      <p className="absolute right-[15%] top-[39.8%] text-xs font-semibold text-gray-800 md:right-[13%] md:top-[39.4%] md:text-lg">
        {labo?.codeNo}
      </p>
      <p className="absolute left-[24%] top-[53.5%] text-xs font-semibold text-gray-800 md:top-[53.2%] md:text-lg">
        {labo?.fullName}
      </p>
      <p className="absolute left-[24%] top-[39.8%] text-xs font-semibold text-gray-800 md:top-[39.8%] md:text-lg">
        {labo?.clinic}
      </p>
      <p className="absolute left-[24%] top-[67.8%] text-xs font-semibold text-gray-800 md:top-[66.5%] md:text-lg">
        {new Date(labo?.validTo ?? "").toLocaleString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
      <p className="absolute left-[24%] top-[80.7%] text-xs font-semibold text-gray-800 md:top-[79.6%] md:text-lg">
        {labo?.position}
      </p>
      <Position position={labo?.position} />
    </div>
  )
}

export default Ddbio
