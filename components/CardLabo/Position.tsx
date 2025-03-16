import React from "react"

const Position = ({ position }: { position?: string }) => {
  const [positionObj, setPositionObj] = React.useState({ A: "", B: "", C: "", D: "" })

  React.useEffect(() => {
    const parts = position?.split("-") || []

    if (parts.length !== 4) {
      console.error("Input string does not match the required format A-B-C-D")
      return
    }

    const [A, B, C, D] = parts.map((value) => {
      const parsedValue = parseInt(value, 10)
      return isNaN(parsedValue) ? "" : value
    }) as [string, string, string, string]

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
