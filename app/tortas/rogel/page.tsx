import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TortaPage } from "@/components/torta-page"

export const metadata = {
  title: "Rogel | Rincón de Dulzura",
  description: "Rogel artesanal con capas de hojaldre y dulce de leche. La torta más clásica de la pastelería argentina.",
}

export default function RogelPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TortaPage
          name="Rogel"
          category="Clásicas"
          desc="La reina de las tortas argentinas. Hojaldre casero, dulce de leche y merengue italiano."
          longDesc="El rogel es una de las tortas más icónicas de la pastelería argentina. Cada capa de hojaldre se prepara a mano y se hornea por separado para lograr esa textura única: crocante por fuera, con el contraste suave del dulce de leche y la liviandad del merengue italiano tostado. Un clásico que nunca falla."
          proceso="El hojaldre se prepara el día anterior para que repose correctamente. Las capas se hornean una a una, se rellenan con dulce de leche artesanal y se cubren con merengue italiano hecho al momento. El tostado final se hace con soplete justo antes de entregar."
          detalles={[
            "Masa de hojaldre casera (sin margarina)",
            "Dulce de leche artesanal entre capas",
            "Merengue italiano tostado con soplete",
            "Sin conservantes ni aditivos",
            "Disponible en distintos tamaños",
          ]}
          sabores={["Dulce de leche clásico", "Dulce de leche + chocolate", "Dulce de leche + fruta"]}
          images={[
            { src: "/images/rogel-portada.png", alt: "Torta Rogel completa con merengue — por dentro y por fuera" },
            { src: "/images/rogel-nuevo.png", alt: "Rogel artesanal completo sobre bandeja" },
            { src: "/images/rogel-corte-blanco.png", alt: "Corte del rogel mostrando las capas de hojaldre y dulce de leche" },
            { src: "/images/rogel-corte-capas.png", alt: "Rogel cortado con capas y dulce de leche desbordando" },
          ]}
          precio="$45.000"
          tiempoEntrega="Mínimo 48 horas de anticipación"
          waMessage="¡Hola! Me gustaría pedir un Rogel. ¿Me podés dar más información?"
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
