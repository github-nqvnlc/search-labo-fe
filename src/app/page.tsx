import Balancer from "react-wrap-balancer"
import Link from "next/link"

import { Icons } from "@/icons"
import { Box } from "@mui/material"

import { Badge, Button, Input } from "@/ui"

export default function Home() {
	return (
		<>
			<section className="flex w-screen flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
				<Box className="mx-auto max-w-xl flex flex-col items-center gap-5">
					<h1 className="text-center text-3xl uppercase font-black leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
						Tra cứu thông tin
					</h1>

					<p className="text-center text-lg font-light text-foreground">
						<Balancer>
							<p>
								Chúng tôi cung cấp dịch vụ tra cứu thông tin miễn phí cho mọi
								người 24/7
							</p>
						</Balancer>
					</p>

					<Box className="w-full flex flex-col gap-4 md:flex-row md:gap-6">
						<Input type="text" />
					</Box>
				</Box>
			</section>
		</>
	)
}
