import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata = {
  title: "Zain Ikram Nawaz — Three.js & Next.js Developer",
  description:
    "I build 3D product configurators and interactive web experiences with Three.js and Next.js. 60fps, browser-native, no plugins.",
  keywords: [
    "Three.js developer",
    "Next.js developer",
    "3D product configurator",
    "React Three Fiber",
    "WebGL developer",
    "interactive web experiences",
    "Zain Ikram Nawaz",
  ],
  authors: [{ name: "Zain Ikram Nawaz", url: "https://vankea.com" }],
  creator: "Zain Ikram Nawaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zain Ikram Nawaz — Three.js & Next.js Developer",
    description:
      "I build 3D product configurators and interactive web experiences. 60fps, browser-native, no plugins.",
    siteName: "Zain Ikram Nawaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ikram Nawaz — Three.js & Next.js Developer",
    description: "3D product configurators & interactive web experiences.",
    creator: "@zainikramnawaz",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
