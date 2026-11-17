"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

const slides = [
  { src: "/images/torta-30-real.jpg", alt: "Torta de cumpleaños 30 con crema y detalles rojos", name: "Torta de cumpleaños", href: "/tortas/torta-cumpleanos" },
  { src: "/images/torta-numeros.jpg", alt: "Torta de números decorada con bombones y confites", name: "Torta de números", href: "/tortas/torta-letra" },
  { src: "/images/torta-letra.png", alt: "Torta en forma de letra con dulce de leche y merengue", name: "Torta de letra", href: "/tortas/torta-letra" },
  { src: "/images/torta-boda-azul.jpg", alt: "Torta de casamiento de tres pisos con detalles en acuarela azul", name: "Torta de casamiento", href: "/tortas/torta-casamiento" },
  { src: "/images/torta-chocolate.jpg", alt: "Torta de chocolate con bombones y crema", name: "Torta de chocolate", href: "/tortas" },
  { src: "/images/torta-choco-frutos.png", alt: "Torta de chocolate con frutos rojos y crema", name: "Chocolate y frutos rojos", href: "/tortas/torta-chocolate-frutos" },
  { src: "/images/torta-chaja.jpg", alt: "Torta chajá con crema", name: "Torta chajá", href: "/tortas" },
  { src: "/images/torta-crema.jpg", alt: "Torta con crema y virutas de chocolate", name: "Torta de crema", href: "/tortas" },
  { src: "/images/torta-cheesecake.jpg", alt: "Cheesecake con frutos rojos", name: "Cheesecake de frutos rojos", href: "/tortas" },
  { src: "/images/rogel-nuevo.png", alt: "Rogel artesanal con capas de dulce de leche y merengue", name: "Rogel", href: "/tortas/rogel" },
]

const INTERVAL = 4500

export function CakeCarousel() {
  const track = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i: number) => {
    const el = track.current
    if (!el) return
    const next = (i + slides.length) % slides.length
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" })
  }, [])

  // Sincroniza el punto activo con el deslizamiento (dedo, mouse o automático)
  useEffect(() => {
    const el = track.current
    if (!el) return
    const onScroll = () => setIndex(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)))
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  // Avance automático; se frena al pasar el mouse, al tocar o si el usuario prefiere menos movimiento
  useEffect(() => {
    if (paused) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      if (!document.hidden) goTo(index + 1)
    }, INTERVAL)
    return () => clearInterval(t)
  }, [index, paused, goTo])

  return (
    <div
      className="group relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      aria-roledescription="carrusel"
      aria-label="Algunas de nuestras tortas"
    >
      <div
        ref={track}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <a
            key={s.src}
            href={s.href}
            className="relative h-full w-full shrink-0 snap-center"
            aria-label={`${s.name}: ver fotos y detalles`}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
                            className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
            <span className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 text-white">
              <span className="font-heading text-2xl font-medium drop-shadow md:text-3xl">{s.name}</span>
              <span className="shrink-0 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground">
                Ver más →
              </span>
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Torta anterior"
        className="absolute left-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-foreground shadow-md transition hover:bg-white md:flex md:opacity-0 md:group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Torta siguiente"
        className="absolute right-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-foreground shadow-md transition hover:bg-white md:flex md:opacity-0 md:group-hover:opacity-100"
      >
        ›
      </button>

      <div className="absolute left-0 right-0 top-4 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver ${s.name}`}
            aria-current={i === index}
            className="flex h-6 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
