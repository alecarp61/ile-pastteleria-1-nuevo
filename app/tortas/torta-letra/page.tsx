import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Torta de Letra | Rincón de Dulzura",
}

export default function TortaLetraPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Torta de Letra"
          category="Personalizadas"
          desc="Cualquier letra o número, con brownie, dulce de leche, bombones y crema. Original y deliciosa."
          longDesc="Las tortas de letra son perfectas para celebraciones donde querés algo diferente. Se puede hacer cualquier inicial, número o combinación. La base es de brownie artesanal, se decora con dulce de leche, bombones de chocolate y crema. El resultado es tan lindo que da pena cortarla."
          proceso="La base se corta en la forma de la letra o número elegido. La decoración se realiza el mismo día de entrega para que llegue perfecta. Se puede personalizar el color de la crema y los detalles decorativos."
          detalles={[
            "Cualquier letra o número disponible",
            "Base de brownie artesanal",
            "Dulce de leche entre capas",
            "Bombones de chocolate decorativos",
            "Crema batida fresca",
            "Decoración personalizable",
          ]}
          sabores={["Brownie con dulce de leche", "Vainilla con crema", "Chocolate con ganache"]}
          images={[
            { src: "/images/torta-letra.png", alt: "Torta en forma de letra L con dulce de leche y merengue" },
          ]}
          precio="Desde $45.000"
          tiempoEntrega="Mínimo 48 horas de anticipación"
          waMessage="¡Hola! Me gustaría pedir una torta de letra/número. ¿Me podés dar más información?"
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
