"use client"

import Image from "next/image"
import logo from "@/images/logo.jpg"
import { Box } from "@mui/material"
import { useRouter } from "next/navigation"

const Brand = () => {
	const router = useRouter()
	return (
		<>
			<Box onClick={() => router.push("/")} className="size-14 flex items-center gap-2 rounded-full overflow-hidden cursor-pointer">
				<Image src={logo} alt="logo" height={2000} width={2000} />
			</Box>
		</>
	)
}

export { Brand }
