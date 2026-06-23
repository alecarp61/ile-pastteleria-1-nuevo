import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Torta de Cumpleaños | Rincón de Dulzura",
  description: "Tortas de cumpleaños personalizadas. Diseño, sabores y rellenos a tu elección.",
}

export default function TortaCumpleanosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Torta de Cumpleaños"
          category="Personalizadas"
          desc="Diseñada para tu celebración. Sabores, colores y decoración completamente a tu elección."
          longDesc="Cada torta de cumpleaños es única. Trabajamos junto al cliente para crear algo que refleje la personalidad del agasajado: desde diseños minimalistas hasta tortas temáticas elaboradas. La base puede ser de vainilla, chocolate o limón, con distintos rellenos y coberturas disponibles."
          proceso="Primero coordinamos el diseño por WhatsApp. Acordamos sabores, colores y decoración. La torta se hornea el día anterior y la decoración se realiza el mismo día de entrega para garantizar frescura y presentación impecable."
          detalles={[
            "Diseño 100% personalizable",
            "Bases de vainilla, chocolate o limón",
            "Rellenos a elección",
            "Cobertura de crema, ganache o fondant",
            "Decoración temática disponible",
            "Foto del diseño antes de confirmar",
          ]}
          sabores={["Vainilla con dulce de leche", "Chocolate con ganache", "Limón con crema", "Red velvet", "Zanahoria"]}
          images={[
            { src: "/images/torta-30-real.jpg", alt: "Torta de cumpleaños 30 con crema y detalles rojos" },
            { src: "/images/torta-choco-frutos.png", alt: "Torta de chocolate con frutos rojos" },
          ]}
          precio="Desde $45.000"
          tiempoEntrega="Mínimo 72 horas de anticipación"
          waMessage="¡Hola! Quiero consultar por una torta de cumpleaños personalizada."
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
