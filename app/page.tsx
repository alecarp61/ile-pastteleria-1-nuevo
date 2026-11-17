import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { About } from "@/components/about"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <QuoteForm />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
