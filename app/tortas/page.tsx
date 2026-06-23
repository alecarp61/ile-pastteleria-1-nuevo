import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { whatsappLink } from "@/lib/site"

const tortas = [
  {
    name: "Rogel",
    image: "/images/rogel-nuevo.png",
    category: "Clásicas",
    desc: "La reina de las tortas argentinas. Capas finísimas de hojaldre casero intercaladas con dulce de leche, coronadas con merengue italiano tostado. Crujiente por fuera, melosa por dentro.",
    proceso: "El hojaldre se prepara a mano el día anterior. Las capas se hornean una a una para lograr la textura ideal.",
    detalles: ["Masa de hojaldre casera", "Dulce de leche artesanal", "Merengue italiano", "Se sirve a temperatura ambiente"],
  },
  {
    name: "Torta de Cumpleaños 30",
    image: "/images/torta-30-real.jpg",
    category: "Personalizadas",
    desc: "Torta personalizada con cobertura de crema y detalles decorativos a elección. Ideal para celebraciones especiales donde el diseño importa tanto como el sabor.",
    proceso: "El diseño se coordina con el cliente. La decoración se realiza el mismo día de entrega para garantizar frescura.",
    detalles: ["Diseño 100% personalizable", "Rellenos a elección", "Cobertura de crema batida", "Decoración temática"],
  },
  {
    name: "Torta de Chocolate con Frutos Rojos",
    image: "/images/torta-choco-frutos.png",
    category: "Chocolate",
    desc: "Base de brownie húmedo con ganache de chocolate, rodeada de bombones de dulce de leche y coronada con crema y frutos rojos frescos. Un contraste perfecto entre lo intenso y lo fresco.",
    proceso: "La base se hornea el día anterior para que tome consistencia. Los frutos rojos se colocan el día de entrega.",
    detalles: ["Base de brownie artesanal", "Ganache de chocolate negro", "Bombones de dulce de leche", "Frutos rojos frescos"],
  },
  {
    name: "Torta de Casamiento",
    image: "/images/torta-boda-azul.jpg",
    category: "Eventos",
    desc: "Torta de tres pisos con acabado fondant blanco y detalles en acuarela azul pintados a mano. Elegante, imponente y memorable. Perfecta para bodas y celebraciones grandes.",
    proceso: "Se coordina una reunión previa para definir diseño, sabores y porciones. Entrega e instalación el día del evento.",
    detalles: ["Múltiples pisos disponibles", "Detalles pintados a mano", "Sabores diferenciados por piso", "Entrega e instalación incluida"],
  },
  {
    name: "Tarta de Manzana",
    image: "/images/tarta-manzana.png",
    category: "Tartas",
    desc: "Masa sablée crocante con relleno de manzanas caramelizadas y crumble dorado por encima. Un clásico reconfortante con el equilibrio justo entre dulce y ácido.",
    proceso: "Las manzanas se cocinan lentamente con azúcar y canela. El crumble se prepara y hornea por separado para máxima textura.",
    detalles: ["Masa sablée casera", "Manzanas caramelizadas", "Crumble de manteca", "Sin conservantes"],
  },
  {
    name: "Torta de Letra",
    image: "/images/torta-letra.png",
    category: "Personalizadas",
    desc: "Torta con forma de letra o número para celebraciones únicas. Base de brownie con dulce de leche, rodeada de bombones y coronada con crema. Ideal para iniciales, cumpleaños y aniversarios.",
    proceso: "La letra se corta a mano sobre la base horneada. La decoración se realiza el mismo día de entrega.",
    detalles: ["Cualquier letra o número", "Base de brownie o vainilla", "Decoración personalizable", "Tamaño adaptable"],
  },
]

const categories = ["Todas", "Clásicas", "Personalizadas", "Chocolate", "Eventos", "Tartas"]

export default function TortasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border bg-secondary/30">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/50" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary mb-8"
            >
              ← Volver al inicio
            </a>
            <div className="block">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
                🎂 Elaboración artesanal
              </span>
            </div>
            <h1 className="mt-4 font-heading text-5xl font-medium text-foreground md:text-6xl">
              Nuestras <em className="italic text-primary">tortas</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
              Cada torta es única. Mirá nuestras creaciones, conocé el proceso y pedí la tuya a medida.
            </p>
          </div>
        </div>

        {/* Catálogo */}
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {tortas.map((torta) => (
              <div
                key={torta.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={torta.image}
                    alt={torta.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                      {torta.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    {torta.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {torta.desc}
                  </p>

                  {/* Proceso */}
                  <div className="rounded-xl bg-secondary/50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      ✨ El proceso
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {torta.proceso}
                    </p>
                  </div>

                  {/* Detalles */}
                  <ul className="flex flex-col gap-2">
                    {torta.detalles.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <a
                      href={whatsappLink(`¡Hola! Me gustaría pedir un presupuesto para: ${torta.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                    >
                      💬 Pedir esta torta
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-16 rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm md:p-12">
            <p className="text-4xl mb-4">🎂</p>
            <h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              Hacemos tortas completamente a pedido. Contanos la ocasión, los colores, los sabores y creamos algo único para vos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappLink("¡Hola! Quiero consultar por una torta personalizada.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                💬 Consultar por WhatsApp
              </a>
              <a
                href="/precios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Ver precios →
              </a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
