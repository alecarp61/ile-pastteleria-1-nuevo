import Image from "next/image"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site"

const highlights = [
  { value: "IAG", label: "Egresada del Instituto Argentino de Gastronomía" },
  { value: "100%", label: "Recetas artesanales hechas a mano" },
  { value: "+5", label: "Años endulzando momentos especiales" },
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">

        {/* Foto real de Ileana */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src="/images/ileana.jpg"
              alt="Ileana Reinoso — Pastelera profesional egresada del IAG"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 px-4 py-3 backdrop-blur-sm">
              <p className="font-heading text-base font-semibold text-foreground">Ileana Reinoso</p>
              <p className="text-xs text-muted-foreground">Profesional Gastronómica · IAG</p>
            </div>
          </div>
          {/* Decoración */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/70 [z-index:-1]" />
          <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-primary/10 [z-index:-1]" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Conocé a la pastelera
          </span>
          <h2 className="mt-3 font-heading text-4xl font-medium leading-tight text-balance text-foreground md:text-5xl">
            Hola, soy{" "}
            <em className="italic text-primary">Ileana</em>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Soy profesional gastronómica egresada del Instituto Argentino de
            Gastronomía (IAG). Rincón de Dulzura nació de mi amor por la
            repostería y del deseo de transformar cada celebración en un
            recuerdo inolvidable.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Trabajo con ingredientes nobles, recetas cuidadas y una dedicación
            que se siente en cada detalle. Creo que un buen postre une a las
            personas, por eso pongo el corazón en cada torta, mesa dulce y caja
            de regalo que sale de mi cocina.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <dt className="font-heading text-2xl font-semibold text-primary">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground text-pretty">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            📸 Seguime en Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}
