import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Tarta de Manzana | Rincón de Dulzura",
}

export default function TartaManzanaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Tarta de Manzana"
          category="Tartas"
          desc="Masa sablée crocante, manzanas caramelizadas y crumble dorado. Un clásico reconfortante."
          longDesc="La tarta de manzana es uno de esos sabores que te llevan a casa. La masa sablée casera es crocante y mantecosa, el relleno de manzanas caramelizadas con canela tiene el dulzor justo, y el crumble dorado por encima le da esa textura irresistible. Se puede servir tibia con un toque de crema o helado."
          proceso="La masa se prepara y refrigera el día anterior. Las manzanas se cocinan lentamente con azúcar, canela y un toque de limón. El crumble se prepara por separado y se hornea junto a la tarta para lograr la textura perfecta."
          detalles={[
            "Masa sablée casera",
            "Manzanas caramelizadas con canela",
            "Crumble de manteca y avena",
            "Sin conservantes",
            "Ideal para 8-10 porciones",
          ]}
          sabores={["Manzana con canela", "Manzana con dulce de leche", "Manzana con crema pastelera"]}
          images={[
            { src: "/images/tarta-manzana.png", alt: "Tarta de manzana crumble artesanal" },
          ]}
          precio="$38.000"
          tiempoEntrega="Mínimo 24 horas de anticipación"
          waMessage="¡Hola! Me gustaría pedir una tarta de manzana."
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
