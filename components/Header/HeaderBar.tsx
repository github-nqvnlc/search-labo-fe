"use client"

import { Box } from "@mui/material"
import Image from "next/image"

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { useSelector } from "react-redux"
import { useAuth } from "@app/hook/useAuth"
import { RootState } from "@app/store/store"
import logo from "/images/logo/logo.png"
import ButtonDarkMode from "../ButtonDarkMode"

const HeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isLogin, setIsLogin] = React.useState(false)
  const { logout } = useAuth()

  const { user } = useSelector((state: RootState) => state.auth)

  React.useEffect(() => {
    if (user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [user])

  const menuItems = [
    {
      label: "Quản lý dữ liệu",
      router: "/admin",
    },
  ]

  return (
    <>
      <header
        className={`relative hidden h-[150px] w-full flex-wrap bg-slate-100 bg-center bg-no-repeat py-3 text-sm dark:bg-neutral-800 sm:flex-nowrap sm:justify-start md:flex`}
      >
        <div className="bg-header absolute inset-0 bg-white bg-cover bg-bottom opacity-70"></div>
        <nav className="relative mx-auto w-full max-w-screen-xl px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex basis-full items-center justify-between ">
            <Box
              onClick={() => router.push("/")}
              className="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
              aria-label="Brand"
            >
              <Image src={logo} alt="Logo" className="cursor-pointer rounded-full" width={100} height={100} />
            </Box>

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative flex size-7 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  className="size-4 shrink-0 hs-collapse-open:hidden"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hidden size-4 shrink-0 hs-collapse-open:block"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <h1 className="basis-full whitespace-nowrap text-4xl font-bold uppercase text-[#2cb7d6] dark:text-neutral-200 sm:text-3xl lg:text-4xl">
            Dental Warranty
          </h1>
          <div
            id="hs-navbar-example"
            className="hs-collapse z-[999] hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
              {isLogin &&
                menuItems.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => router.push(item.router)}
                    className={`cursor-pointer font-medium ${
                      pathname.includes(item.router) ? "text-blue-500" : "text-white"
                    } hover:text-gray-400 focus:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500`}
                  >
                    {item.label}
                  </Box>
                ))}
              <ButtonDarkMode />
              {isLogin ? (
                <div className="hs-dropdown relative inline-flex">
                  <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-white"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    onClick={() => console.log("Dropdown")}
                  >
                    {user?.name}
                    <svg
                      className="size-4 hs-dropdown-open:rotate-180"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-neutral-700 dark:bg-neutral-800"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-with-header"
                  >
                    <div className="border-b border-gray-200 px-4 py-3 dark:border-neutral-700">
                      <p className="text-sm text-gray-500 dark:text-neutral-400">Đã đăng nhập</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">{user?.email}</p>
                    </div>
                    <div className="flex w-full flex-col items-start space-y-0.5 p-1">
                      <button className="flex w-full rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                        Cài đặt tài khoản
                      </button>
                      <button
                        onClick={() => {
                          router.push("/")
                          logout()
                        }}
                        className="flex w-full rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  onClick={() => router.push("/login")}
                >
                  Đăng Nhập
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderBar
