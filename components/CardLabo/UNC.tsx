import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
// eslint-disable-next-line import/no-unresolved
import imageCard from "/images/card/razor.png"

const UNC = ({ labo }: { labo?: Labo }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
      <p className="absolute left-[54%] top-[calc(100%-85%)] text-xs font-semibold text-gray-800 md:top-[calc(100%-85%)] md:text-lg">
        <span className="text-xs italic">Tên/Name:</span> {labo?.fullName}
      </p>
      <p className="absolute left-[54%] top-[calc(100%-75%)] text-xs font-semibold text-gray-800 md:top-[calc(100%-75%)] md:text-lg">
        <span className="text-xs italic">Nha khoa/Clinic:</span> {labo?.clinic}
      </p>
      <p className="absolute left-[54%] top-[calc(100%-65%)] text-xs font-semibold text-gray-800 md:top-[calc(100%-65%)] md:text-lg">
        <span className="text-xs italic">Labo:</span> {labo?.laboName}
      </p>
      <p className="absolute left-[54%] top-[calc(100%-55%)] text-xs font-semibold text-gray-800 md:top-[calc(100%-55%)] md:text-lg">
        <span className="text-xs italic">Valid to:</span>{" "}
        {new Date(labo?.validTo ?? "").toLocaleString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
    </div>
  )
}

export default UNC
