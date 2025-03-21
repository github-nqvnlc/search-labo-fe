"use client"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar"
import PinIcon from "@mui/icons-material/Pin"
import PlaceIcon from "@mui/icons-material/Place"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import React from "react"
import { Labo } from "@app/type/interface"
import Cercon from "./Cercon"
import CromCobalt from "./CromCobalt"
import Ddbio from "./Ddbio"
import EMax from "./EMax"
import Metal from "./Metal"
import Titan from "./Titan"
import Tooth from "./Tooth"
import UNC from "./UNC"
import Zirconia from "./Zirconia"

const CardLabo = ({ labo }: { labo?: Labo }) => {
  const [expanded, setExpanded] = React.useState<boolean>(false)
  const [positionObj, setPositionObj] = React.useState({ A: "", B: "", C: "", D: "" })

  React.useEffect(() => {
    const parts = labo?.position?.split("-") || []

    // Điền các giá trị vào các vị trí A, B, C, D dựa trên thứ tự
    const [A, B, C, D] = [
      parts[0] || "", // Nếu không có giá trị tại vị trí, trả về chuỗi rỗng
      parts[1] || "",
      parts[2] || "",
      parts[3] || "",
    ]

    setPositionObj({ A, B, C, D })
  }, [labo?.position])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      {labo && Object.keys(labo).length > 0 ? (
        <div>
          {labo?.restorationType === "E.max" && <EMax labo={labo} />}
          {labo?.restorationType === "UNC" && <UNC labo={labo} />}
          {labo?.restorationType === "Titan" && <Titan labo={labo} />}
          {labo?.restorationType === "Kim loại" && <Metal labo={labo} />}
          {labo?.restorationType === "Cercon" && <Cercon labo={labo} />}
          {labo?.restorationType === "Zirconia" && <Zirconia labo={labo} />}
          {labo?.restorationType === "Crom cobalt" && <CromCobalt labo={labo} />}
          {labo?.restorationType === "Ddbio" && <Ddbio labo={labo} />}
          {labo?.restorationType === "Răng" && <Tooth labo={labo} />}
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-2 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            onClick={toggleExpanded}
          >
            Xem thêm
            {expanded ? (
              <svg
                className="size-4 shrink-0 rotate-180 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            ) : (
              <svg
                className="size-4 shrink-0 text-white hs-collapse-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            )}
          </button>
          <div
            className={`hs-collapse ${!expanded && "hidden"} w-full overflow-hidden transition-[height] duration-300`}
          >
            <div className="mt-5">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="inline-block min-w-full p-1.5 align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <tbody>
                          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <PinIcon /> Mã số thẻ:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.codeNo}
                            </td>
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <PermContactCalendarIcon /> Họ và tên:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.fullName}
                            </td>
                          </tr>

                          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-orange-500 dark:text-white"
                              >
                                <path
                                  d="M9.19807 4.45825C8.55418 4.22291 7.94427 4 7 4C5 4 4 6 4 8.5C4 10.0985 4.40885 11.0838 4.83441 12.1093C5.0744 12.6877 5.31971 13.2788 5.5 14C5.649 14.596 5.7092 15.4584 5.77321 16.3755C5.92401 18.536 6.096 21 7.5 21C8.39898 21 8.79286 19.5857 9.22652 18.0286C9.75765 16.1214 10.3485 14 12 14C13.6515 14 14.2423 16.1214 14.7735 18.0286C15.2071 19.5857 15.601 21 16.5 21C17.904 21 18.076 18.536 18.2268 16.3755C18.2908 15.4584 18.351 14.596 18.5 14C18.6803 13.2788 18.9256 12.6877 19.1656 12.1093C19.5912 11.0838 20 10.0985 20 8.5C20 6 19 4 17 4C16.0557 4 15.4458 4.22291 14.8019 4.45825C14.082 4.72136 13.3197 5 12 5C10.6803 5 9.91796 4.72136 9.19807 4.45825Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Nha khoa
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.clinic}
                            </td>
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <CalendarMonthIcon /> Ngày hiệu lực:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.validTo}
                            </td>
                          </tr>

                          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <VaccinesIcon /> Labo:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.laboName}
                            </td>
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <FormatListNumberedIcon /> Số lượng:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.quantity}
                            </td>
                          </tr>

                          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
                            <td className="mt-2 flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="text-orange-500 dark:text-white"
                                width="24px"
                                height="24px"
                                viewBox="0 -64 640 640"
                              >
                                <path d="M544 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96zM160 368c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64zm0-128c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48v64zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v56zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56v88zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v56zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56v88zm128 128c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64zm0-128c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48v64z" />
                              </svg>
                              Vị trí:
                            </td>
                            <td className="w-[200px] whitespace-nowrap p-2 text-left text-sm text-orange-100 dark:text-neutral-200">
                              <div className="flex w-auto flex-col items-center justify-center gap-1">
                                <div className="flex w-full flex-1 flex-row items-center justify-center gap-1">
                                  <p className="h-5 flex-1 rounded-[6px] bg-orange-500 px-2 text-center">
                                    {positionObj.A}
                                  </p>
                                  <p className="h-5 flex-1 rounded-[6px] bg-orange-500 px-2 text-center">
                                    {positionObj.B}
                                  </p>
                                </div>
                                <div className="flex w-full flex-1 flex-row items-center justify-center gap-1">
                                  <p className="h-5 flex-1 rounded-[6px] bg-orange-500 px-2 text-center">
                                    {positionObj.C}
                                  </p>
                                  <p className="h-5 flex-1 rounded-[6px] bg-orange-500 px-2  text-center">
                                    {positionObj.D}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="text-orange-500 dark:text-white"
                                width="24px"
                                height="24px"
                                viewBox="0 -64 640 640"
                              >
                                <path d="M544 0H96C42.98 0 0 42.98 0 96v64c0 35.35 28.66 64 64 64h512c35.34 0 64-28.65 64-64V96c0-53.02-42.98-96-96-96zM160 176c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-32c0-26.51 21.49-48 48-48s48 21.49 48 48v32zm144 0c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-56c0-30.93 25.07-56 56-56s56 25.07 56 56v56zm144 0c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-56c0-30.93 25.07-56 56-56s56 25.07 56 56v56zm128 0c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-32c0-26.51 21.49-48 48-48s48 21.49 48 48v32zm0 144H64c-35.34 0-64 28.65-64 64v32c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96v-32c0-35.35-28.66-64-64-64zm-416 80c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32zm144-8c0 30.93-25.07 56-56 56s-56-25.07-56-56v-24c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v24zm144 0c0 30.93-25.07 56-56 56s-56-25.07-56-56v-24c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v24zm128 8c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32z" />
                              </svg>
                              Loại phục hình:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.restorationType}
                            </td>
                          </tr>

                          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <PlaceIcon /> Xuất xứ:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.origin}
                            </td>
                            <td className="flex items-center gap-2 whitespace-nowrap p-2 text-left text-sm font-bold text-orange-500 dark:text-neutral-200">
                              <ColorLensIcon /> Màu răng:
                            </td>
                            <td className="whitespace-nowrap p-2 text-left text-sm text-orange-500 dark:text-neutral-200">
                              {labo?.toothColor}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Không có thông tin</p>
      )}
    </>
  )
}

export default CardLabo
