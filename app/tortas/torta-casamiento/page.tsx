import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Torta de Casamiento | Rincón de Dulzura",
}

export default function TortaCasamientoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Torta de Casamiento"
          category="Eventos"
          desc="Tres pisos con acabado fondant blanco y detalles en acuarela pintados a mano. Elegante e imponente."
          longDesc="La torta de casamiento es el centro de la celebración. Trabajamos codo a codo con los novios para crear algo que refleje su estilo y personalidad. Cada detalle — desde los colores hasta los sabores de cada piso — se coordina en una reunión previa. El resultado es una pieza artística que también es deliciosa."
          proceso="Agendamos una reunión de diseño (presencial o virtual) para definir estilo, colores, sabores y porciones. La torta se arma en etapas: bases horneadas con anticipación, rellenos y decoración final el día del evento. Hacemos entrega e instalación en el salón."
          detalles={[
            "Reunión de diseño incluida",
            "Múltiples pisos (2, 3 o más)",
            "Sabores diferenciados por piso",
            "Detalles pintados a mano",
            "Entrega e instalación en el salón",
            "Corte incluido si se solicita",
          ]}
          sabores={["Vainilla con dulce de leche", "Chocolate con ganache", "Limón con crema", "Frutos rojos", "A definir con los novios"]}
          images={[
            { src: "/images/torta-boda-azul.jpg", alt: "Torta de casamiento de tres pisos con detalles en acuarela azul" },
          ]}
          tiempoEntrega="Mínimo 2 semanas de anticipación"
          waMessage="¡Hola! Me gustaría consultar por una torta de casamiento. ¿Podemos coordinar una reunión de diseño?"
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
