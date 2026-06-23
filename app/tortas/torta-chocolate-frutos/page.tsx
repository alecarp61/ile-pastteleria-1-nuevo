import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Torta Chocolate con Frutos Rojos | Rincón de Dulzura",
}

export default function TortaChocolatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Torta Chocolate con Frutos Rojos"
          category="Chocolate"
          desc="Brownie húmedo, ganache de chocolate, bombones de dulce de leche y frutos rojos frescos."
          longDesc="Una combinación que conquista paladares. La base de brownie artesanal es húmeda y densa, el ganache de chocolate negro aporta intensidad, los bombones de dulce de leche dan suavidad y los frutos rojos frescos equilibran todo con su acidez natural. Una torta para los que aman el chocolate de verdad."
          proceso="La base de brownie se hornea el día anterior para que tome consistencia. El ganache se prepara con chocolate de calidad. Los bombones de dulce de leche se elaboran a mano. Los frutos rojos y la crema se colocan el mismo día de entrega para que lleguen en perfecto estado."
          detalles={[
            "Base de brownie artesanal húmedo",
            "Ganache de chocolate negro",
            "Bombones de dulce de leche caseros",
            "Crema batida fresca",
            "Frutos rojos (frutillas, arándanos, frambuesas)",
            "Sin conservantes",
          ]}
          sabores={["Chocolate negro", "Chocolate con leche", "Chocolate blanco"]}
          images={[
            { src: "/images/torta-choco-frutos.png", alt: "Torta de chocolate con frutos rojos y crema" },
          ]}
          precio="$55.000"
          tiempoEntrega="Mínimo 48 horas de anticipación"
          waMessage="¡Hola! Me gustaría pedir la torta de chocolate con frutos rojos."
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
