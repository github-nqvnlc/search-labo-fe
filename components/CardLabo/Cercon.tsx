"use client"
import Image from "next/image"
import React from "react"
import { Labo } from "@app/type/interface"
import imageCard from "../../images/card/cercon.png"

const Cercon = ({ labo }: { labo?: Labo }) => {
  console.log(labo)
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Image className="h-auto w-full rounded-xl" src={imageCard} alt="Card Image" width={400} height={200} />
    </div>
  )
}

export default Cercon
