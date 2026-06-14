import Image from "next/image"
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/60" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
            ✨ Hecho con amor
          </span>
          <h1 className="font-heading text-5xl font-medium leading-[1.05] text-balance text-foreground md:text-6xl lg:text-7xl">
            Endulzamos tus momentos{" "}
            <em className="font-medium italic text-primary">más especiales</em>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Tortas personalizadas, catering para eventos y cajas de regalo
            artesanales. Cada creación está pensada para sorprender y emocionar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              💬 Solicitar presupuesto
            </a>
            <a
              href="#tortas"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver creaciones
            </a>
          </div>
          <div className="mt-2 flex items-center gap-8">
            <div>
              <p className="font-heading text-3xl font-semibold text-foreground">+500</p>
              <p className="text-sm text-muted-foreground">Pedidos felices</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-3xl font-semibold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Artesanal</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-3xl font-semibold text-foreground">+5</p>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
          </div>
        </div>

        {/* Imagen hero — torta rogel */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border shadow-2xl">
            <Image
              src="/images/torta-rogel.png"
              alt="Rogel artesanal con capas de dulce de leche y merengue"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Badge flotante */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-xl sm:block">
            <p className="font-heading text-lg font-semibold text-foreground">Diseños únicos</p>
            <p className="text-sm text-muted-foreground">A tu medida y estilo</p>
          </div>

          {/* Badge esquina superior */}
          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
            <p className="text-center text-2xl">🎂</p>
            <p className="text-center text-xs font-medium text-muted-foreground">Sin TACC<br/>disponible</p>
          </div>
        </div>
      </div>

      {/* Banda de confianza */}
      <div className="border-t border-border/50 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4">
          {["🎂 Tortas personalizadas", "🍫 Brownies y tartas", "🎁 Cajas de regalo", "🥂 Catering para eventos", "📍 Buenos Aires"].map((item) => (
            <span key={item} className="text-sm font-medium text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
