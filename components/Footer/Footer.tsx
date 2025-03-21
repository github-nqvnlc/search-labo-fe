"use client"

import { Box } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import logo from "../../images/logo/logo.png"

const Footer = () => {
  const router = useRouter()
  return (
    <>
      <footer className="mt-auto w-full bg-gray-900 dark:bg-neutral-950">
        <div className="mx-auto mt-auto w-full max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full lg:col-span-3">
              <Box
                onClick={() => router.push("/")}
                className="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
                aria-label="Brand"
              >
                <Image src={logo} alt="Logo" className="cursor-pointer rounded-full" width={150} height={150} />
              </Box>
              <h1 className="mt-5 text-xl font-semibold uppercase text-gray-100">Dental Warranty</h1>
            </div>

            {/* <!-- End Col --> */}
            <div className="col-span-full lg:col-span-3">
              {/*     Tên Công Ty           */}
              <h1 className="text-xl font-semibold text-gray-100"></h1>
              <h1 className="mt-2 text-sm font-normal  text-gray-100">
                <span className="size-4 shrink-0">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    version="1.1"
                    className="mr-2 inline-block text-gray-100"
                  >
                    <path
                      d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                      fill=""
                    />
                  </svg> */}
                </span>{" "}
                {/* Địa chỉ here */}
              </h1>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-5 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400 dark:text-neutral-400">
                © {new Date().getFullYear()} An Nhien Labo.
              </p>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div></div>
            {/* <!-- End Social Brands --> */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
