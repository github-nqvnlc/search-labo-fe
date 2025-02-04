"use client"

import "styles/tailwind.css"
import { usePathname } from "next/navigation"
import React from "react"
import { Provider } from "react-redux"
import { Bounce, ToastContainer } from "react-toastify"
import Footer from "@/components/Footer/Footer"
import HeaderBar from "@/components/Header/HeaderBar"
import PrelineScript from "@/components/PrelineScript"
import Test from "@/components/Test"
import store from "@app/store/store"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const noLayoutRoutes = ["/login", "/sign-up", "/forgot-password"]

  const bodyLayout = noLayoutRoutes.includes(pathname) ? (
    children
  ) : (
    <>
      <HeaderBar />
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="h-auto md:min-h-[calc(100vh-40px)]">{children}</div>
      </div>
      <Footer />
    </>
  )

  return (
    <html lang="en">
      <Provider store={store}>
        <body className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-white">
          <Test />
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
      </Provider>
      <PrelineScript />
    </html>
  )
}
