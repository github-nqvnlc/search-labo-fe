"use client"
import React from "react"

const Position = ({ position }: { position?: string }) => {
  const [positionObj, setPositionObj] = React.useState({ A: "", B: "", C: "", D: "" })

  React.useEffect(() => {
    const parts = position?.split("-") || []

    // Điền các giá trị vào các vị trí A, B, C, D dựa trên thứ tự
    const [A, B, C, D] = [
      parts[0] || "", // Nếu không có giá trị tại vị trí, trả về chuỗi rỗng
      parts[1] || "",
      parts[2] || "",
      parts[3] || "",
    ]

    setPositionObj({ A, B, C, D })
  }, [position])

  return (
    <div className={`absolute right-[7.5%] top-[62%] h-10 w-36 text-xs sm:h-28 md:h-16 md:w-56 md:text-lg`}>
      <div className="flex size-full flex-col items-center justify-center">
        <div className="flex size-full flex-1 flex-row items-center justify-center">
          <div className="size-full flex-1 text-center">{positionObj.A}</div>
          <div className="size-full flex-1 text-center">{positionObj.B}</div>
        </div>
        <div className="flex size-full flex-1 flex-row items-center justify-center">
          <div className="size-full flex-1 text-center">{positionObj.C}</div>
          <div className="size-full flex-1 text-center">{positionObj.D}</div>
        </div>
      </div>
    </div>
  )
}

export default Position
