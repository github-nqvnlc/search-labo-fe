"use client"

import { Box, Divider, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import Image from "next/image"

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import logo from "../../images/logo/logo.png"
import ButtonDarkMode from "../ButtonDarkMode"
import { useAuth } from "@app/hook/useAuth"
import { useSelector } from "react-redux"
import { RootState } from "@app/store/store"
import LogoutIcon from "@mui/icons-material/Logout"

const HeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isLogin, setIsLogin] = React.useState(false)
  const { logout } = useAuth()
  const { user } = useSelector((state: RootState) => state.auth)

  // menu information
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLButtonElement | null>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  // =================

  React.useEffect(() => {
    if (user) {
      setIsLogin(true)
    }
  }, [user])

  const menuItems = [
    {
      label: "Landing",
      router: "/landing",
    },
    {
      label: "Account",
      router: "/account",
    },
    {
      label: "Work",
      router: "/work",
    },
    {
      label: "Blog",
      router: "/blog",
    },
  ]

  const menuSettings = [
    // { id: "profile", label: `${t("navbar.profile")}`, name: "profile", href: "/profile" },
    // {
    //   id: "changePassword",
    //   label: `${t("navbar.changePassword")}`,
    //   name: "changePassword",
    //   href: "/change-password",
    //   icons: <ManageAccountsIcon className="text-gray-500 " />,
    //   onClick: () => {
    //     router.push("/change-password")
    //   },
    // },
    {
      id: "logout",
      label: "Logout",
      name: "logout",
      href: "/logout",
      icons: <LogoutIcon className="text-gray-500 " />,
      onClick: () => {
        logout()
        router.push("/login")
      },
    },
  ]

  return (
    <>
      <header className="relative flex w-full flex-wrap bg-white py-3 text-sm dark:bg-transparent sm:flex-nowrap sm:justify-start">
        <nav className="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Box
              onClick={() => router.push("/")}
              className="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
              aria-label="Brand"
            >
              <Image src={logo} alt="Logo" className="cursor-pointer rounded-full" width={70} height={70} />
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
                  className="hs-collapse-open:hidden size-4 shrink-0"
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
                  className="hs-collapse-open:block hidden size-4 shrink-0"
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
          <div
            id="hs-navbar-example"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
              {isLogin &&
                menuItems.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => router.push(item.router)}
                    className={`cursor-pointer font-medium ${
                      pathname.includes(item.router) ? "text-blue-500" : "text-gray-600"
                    } hover:text-gray-400 focus:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500`}
                  >
                    {item.label}
                  </Box>
                ))}
              <ButtonDarkMode />
              {isLogin ? (
                <Tooltip title="Open User Menu" arrow>
                  <Typography
                    className="block cursor-pointer  truncate text-sm text-gray-500"
                    onClick={handleOpenUserMenu}
                  >
                    {user?.name}
                  </Typography>
                </Tooltip>
              ) : (
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  onClick={() => router.push("/login")}
                >
                  Đăng Nhập
                </button>
              )}
              <Menu
                sx={{ mt: "30px" }}
                id="menu-settings"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box className="flex flex-col items-end px-2">
                  <Typography className="block cursor-pointer truncate text-sm font-bold text-branding">
                    {user?.name}
                  </Typography>
                  <Typography className="block cursor-pointer truncate text-sm text-gray-400">{user?.email}</Typography>
                </Box>
                <Divider sx={{ my: 0.5 }} />
                {menuSettings.map((setting) => (
                  <MenuItem
                    key={setting.id}
                    onClick={() => {
                      handleCloseUserMenu()
                      setting.onClick()
                    }}
                    disableRipple
                  >
                    {setting.icons}
                    <Typography className="ml-2 text-center text-gray-500 dark:text-gray-400">
                      {setting.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderBar
