"use client"

import { useState } from "react"
import { whatsappLink } from "@/lib/site"

type TortaPageProps = {
  name: string
  category: string
  desc: string
  longDesc: string
  proceso: string
  detalles: string[]
  images: { src: string; alt: string }[]
  videoUrl?: string
  videoType?: "youtube" | "mp4" | "instagram"
  precio?: string
  waMessage: string
  sabores?: string[]
  tiempoEntrega?: string
}

export function TortaPage({
  name,
  category,
  desc,
  longDesc,
  proceso,
  detalles,
  images,
  videoUrl,
  videoType,
  precio,
  waMessage,
  sabores,
  tiempoEntrega,
}: TortaPageProps) {
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/30 px-6 py-3">
        <div className="mx-auto max-w-6xl flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">Inicio</a>
          <span>/</span>
          <a href="/tortas" className="hover:text-primary transition-colors">Tortas</a>
          <span>/</span>
          <span className="text-foreground font-medium">{name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* GALERÍA */}
          <div className="flex flex-col gap-4">
            {/* Imagen principal */}
            <div
              className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-lg cursor-zoom-in group"
              onClick={() => setLightbox(true)}
            >
              <img
                src={images[activeImg]?.src ?? "/images/rogel-nuevo.png"}
                alt={images[activeImg]?.alt ?? name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-4xl drop-shadow-lg">🔍</span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  {category}
                </span>
              </div>
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {activeImg + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      activeImg === i ? "border-primary shadow-md scale-105" : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* VIDEO */}
            {videoUrl && (
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <span className="text-lg">🎬</span>
                  <p className="text-sm font-semibold text-foreground">Ver el proceso</p>
                </div>
                <div className="relative aspect-video bg-black">
                  {videoType === "youtube" ? (
                    <iframe
                      src={videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : videoType === "mp4" ? (
                    <video
                      src={videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      playsInline
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                      >
                        📸 Ver en Instagram
                      </a>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground text-center py-2">
                  Mirá cómo se hace paso a paso
                </p>
              </div>
            )}

            {/* Placeholder video si no hay */}
            {!videoUrl && (
              <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-center">
                <p className="text-3xl mb-2">🎬</p>
                <p className="text-sm font-medium text-foreground mb-1">Video del proceso</p>
                <p className="text-xs text-muted-foreground">Próximamente — seguinos en Instagram para ver cómo lo hacemos</p>
                <a
                  href="https://instagram.com/rincondedulzura.pasteleria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  📸 @rincondedulzura.pasteleria →
                </a>
              </div>
            )}
          </div>

          {/* INFO */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {category}
              </span>
              <h1 className="mt-2 font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
                {name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>

            {precio && (
              <div className="rounded-2xl border border-primary/20 bg-accent/40 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Precio desde</p>
                <p className="font-heading text-3xl font-semibold text-foreground">{precio}</p>
                <p className="text-xs text-muted-foreground mt-1">El precio final depende del tamaño y personalización.</p>
              </div>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed">
              {longDesc}
            </p>

            {/* Sabores */}
            {sabores && sabores.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">🍰 Sabores disponibles</p>
                <div className="flex flex-wrap gap-2">
                  {sabores.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Proceso */}
            <div className="rounded-2xl bg-secondary/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">✨ El proceso</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{proceso}</p>
            </div>

            {/* Detalles */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">📋 Incluye</p>
              <ul className="flex flex-col gap-2">
                {detalles.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tiempo entrega */}
            {tiempoEntrega && (
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <span className="text-xl">⏱️</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Tiempo de preparación</p>
                  <p className="text-xs text-muted-foreground">{tiempoEntrega}</p>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                💬 Pedir esta torta por WhatsApp
              </a>
              <a
                href="/precios"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Ver lista de precios →
              </a>
              <a
                href="/tortas"
                className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                ← Ver todas las tortas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 text-white text-5xl font-light leading-none hover:text-primary"
          >×</button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImg(i => Math.max(0, i - 1)) }}
            className="absolute left-4 text-white text-4xl font-light hover:text-primary px-4 py-2"
          >‹</button>
          <img
            src={images[activeImg]?.src}
            alt={images[activeImg]?.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImg(i => Math.min(images.length - 1, i + 1)) }}
            className="absolute right-4 text-white text-4xl font-light hover:text-primary px-4 py-2"
          >›</button>
        </div>
      )}
    </div>
  )
}
