"use client"

import { usePathname, useRouter } from "next/navigation"

import { Box } from "@mui/material"
import clsx from "clsx"

import { navConfig } from "@/config"

export const Nav = () => {
	const pathname = usePathname()
	const router = useRouter()

	if (!navConfig) return null

	return (
		<nav className="flex items-center gap-4 text-sm lg:gap-6">
			{navConfig?.map(({ title, href = "/" }: any) => (
				<Box
					key={href}
					className={clsx(
						"transition-colors hover:text-foreground/80 cursor-pointer",
						pathname === href ? "text-foreground" : "text-foreground/60"
					)}
					onClick={() => router.push(href)}
				>
					{title}
				</Box>
			))}
		</nav>
	)
}
