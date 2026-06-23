import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { whatsappLink } from "@/lib/site"

const tortas = [
  {
    name: "Rogel",
    slug: "rogel",
    image: "/images/rogel-nuevo.png",
    category: "Clásicas",
    desc: "Capas finísimas de hojaldre casero con dulce de leche y merengue italiano tostado. El clásico argentino.",
    precio: "$45.000",
  },
  {
    name: "Torta de Cumpleaños",
    slug: "torta-cumpleanos",
    image: "/images/torta-30-real.jpg",
    category: "Personalizadas",
    desc: "Diseño, sabores y decoración 100% a tu elección. Cada torta es única como la celebración.",
    precio: "Desde $45.000",
  },
  {
    name: "Torta Chocolate con Frutos Rojos",
    slug: "torta-chocolate-frutos",
    image: "/images/torta-choco-frutos.png",
    category: "Chocolate",
    desc: "Brownie húmedo, ganache de chocolate, bombones de dulce de leche y frutos rojos frescos.",
    precio: "$55.000",
  },
  {
    name: "Torta de Casamiento",
    slug: "torta-casamiento",
    image: "/images/torta-boda-azul.jpg",
    category: "Eventos",
    desc: "Tres pisos con acabado fondant blanco y detalles en acuarela pintados a mano. Elegante e imponente.",
    precio: "A consultar",
  },
  {
    name: "Tarta de Manzana",
    slug: "tarta-manzana",
    image: "/images/tarta-manzana.png",
    category: "Tartas",
    desc: "Masa sablée crocante, manzanas caramelizadas con canela y crumble dorado. Un clásico reconfortante.",
    precio: "$38.000",
  },
  {
    name: "Torta de Letra",
    slug: "torta-letra",
    image: "/images/torta-letra.png",
    category: "Personalizadas",
    desc: "Cualquier letra o número con base de brownie, dulce de leche, bombones y crema. Original y deliciosa.",
    precio: "Desde $45.000",
  },
]

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
            <a href="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary mb-8">
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
              Hacé click en cada torta para ver fotos, el proceso de elaboración y cómo pedirla.
            </p>
          </div>
        </div>

        {/* Catálogo */}
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tortas.map((torta) => (
              <a
                key={torta.slug}
                href={`/tortas/${torta.slug}`}
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-end p-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      Ver más →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {torta.name}
                    </h2>
                    <span className="font-heading text-sm font-semibold text-primary whitespace-nowrap">
                      {torta.precio}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {torta.desc}
                  </p>
                  <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-medium text-primary">
                    Ver proceso y fotos →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm md:p-12">
            <p className="text-4xl mb-4">🎂</p>
            <h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              Hacemos tortas completamente a pedido. Contanos la ocasión, los colores y los sabores.
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
