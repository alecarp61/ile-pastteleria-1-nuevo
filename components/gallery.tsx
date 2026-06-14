"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
  { src: "/images/torta-choco-frutos.png", alt: "Torta de chocolate con frutos rojos y crema" },
  { src: "/images/tarta-manzana.png", alt: "Tarta de manzana crumble artesanal" },
  { src: "/images/torta-letra.png", alt: "Torta en forma de letra con dulce de leche y merengue" },
  { src: "/images/torta-boda-azul.jpg", alt: "Torta de casamiento azul de tres pisos" },
  { src: "/images/torta-30-real.jpg", alt: "Torta de cumpleaños 30 con crema y detalle rojo" },
  { src: "/images/rogel-interior.png", alt: "Interior del rogel con capas de dulce de leche" },
]

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="galeria" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Galería
          </span>
          <h2 className="mt-3 font-heading text-4xl font-medium text-balance text-foreground md:text-5xl">
            Un vistazo a nuestras{" "}
            <em className="italic text-primary">creaciones</em>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hacé click en cualquier foto para verla en grande.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              onClick={() => setSelected(image.src)}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-sm group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-3xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/rincondedulzura.pasteleria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            📸 Ver más en Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 text-white text-4xl font-light leading-none hover:text-primary transition-colors"
          >
            ×
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected}
              alt="Imagen ampliada"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
