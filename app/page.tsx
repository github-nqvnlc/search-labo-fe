import { Metadata } from "next"
import HeroForm from "@/components/HeroForm/HeroForm"

export const metadata: Metadata = {
  title: "An Nhiên Labo - Dental Warranty",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://andentallab.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/images/logo/logo.png",
      },
    ],
  },
  icons: {
    icon: "/images/logo/logo-favicon.png", // Favicon mặc định
    shortcut: "/images/logo/logo-favicon.png", // Shortcut icon
    apple: "/images/logo/logo-favicon.png", // Icon cho Apple devices
    other: [
      {
        rel: "icon",
        url: "/images/logo/logo-favicon.png", // Favicon 32x32
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <HeroForm />
    </>
  )
}
