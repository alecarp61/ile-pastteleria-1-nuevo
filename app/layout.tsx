import type { Metadata } from "next"
import { Playfair_Display, Jost } from "next/font/google"
import "./globals.css"
import { SITE_URL, WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/lib/site"

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

const DESCRIPTION =
  "Tortas personalizadas, catering para eventos y cajas de regalo artesanales. Cada creación hecha con amor y dedicación. Buenos Aires."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rincón de Dulzura | Pastelería Artesanal",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Rincón de Dulzura",
    title: "Rincón de Dulzura | Tortas personalizadas en Buenos Aires",
    description: DESCRIPTION,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Rogel artesanal de Rincón de Dulzura" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rincón de Dulzura | Tortas personalizadas en Buenos Aires",
    description: DESCRIPTION,
    images: ["/images/og.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Rincón de Dulzura",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/og.jpg`,
  logo: `${SITE_URL}/images/logo.jpg`,
  telephone: WHATSAPP_NUMBER,
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  areaServed: "Buenos Aires",
  sameAs: [INSTAGRAM_URL],
  founder: { "@type": "Person", name: "Ileana Reinoso" },
  makesOffer: [
    "Tortas personalizadas",
    "Catering y mesas dulces para eventos",
    "Cajas de regalo",
    "Opciones sin TACC",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name } })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable} scroll-smooth`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
