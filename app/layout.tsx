import type { Metadata } from "next"
import { Playfair_Display, Jost } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rincón de Dulzura | Pastelería Artesanal",
  description:
    "Tortas personalizadas, catering para eventos y cajas de regalo artesanales. Cada creación hecha con amor y dedicación. Buenos Aires.",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
