"use client"

import "styles/tailwind.css"
import { usePathname } from "next/navigation"
import React from "react"
import { Provider } from "react-redux"
import { Bounce, ToastContainer } from "react-toastify"
import Footer from "@/components/Footer/Footer"
import HeaderBar from "@/components/Header/HeaderBar"
import PrelineScript from "@/components/PrelineScript"
import store from "@app/store/store"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const noLayoutRoutes = ["/login", "/sign-up", "/forgot-password"]

  const bodyLayout = noLayoutRoutes.includes(pathname) ? (
    children
  ) : (
    <>
      <div className="mx-auto max-w-screen-xl p-4">
        <HeaderBar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )

  return (
    <Provider store={store}>
      <html lang="en">
        <body className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-white">
          {bodyLayout}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </body>
        <PrelineScript />
      </html>
    </Provider>
  )
}
