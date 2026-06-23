const reviews = [
  {
    name: "Sebastián G.",
    stars: 5,
    text: "Desde que abrís la caja se nota la diferencia. El rogel tenía capas perfectas y el merengue estaba increíble. Lo pedí para el cumpleaños de mi mamá y quedó encantada. Definitivamente vuelvo.",
    occasion: "Cumpleaños",
  },
  {
    name: "Valentina M.",
    stars: 5,
    text: "Pedí la torta de casamiento y superó todas mis expectativas. Los tres pisos quedaron espectaculares, el diseño en acuarela azul era exactamente lo que quería. Todos los invitados preguntaron quién la había hecho.",
    occasion: "Casamiento",
  },
  {
    name: "Nicolás W.",
    stars: 5,
    text: "La atención fue excelente, respondieron rápido todas mis dudas. Pedí una caja de regalo para el día del padre y llegó perfecta, con una presentación muy cuidada. El rogel estaba buenísimo.",
    occasion: "Día del Padre",
  },
  {
    name: "Camila R.",
    stars: 5,
    text: "Hice el catering para el cumpleaños de 15 de mi hija y quedó todo impecable. La mesa dulce era hermosa y los alfajores volaron. Muy recomendable para eventos.",
    occasion: "Cumpleaños de 15",
  },
  {
    name: "Hernán T.",
    stars: 5,
    text: "La torta de letra con forma de inicial fue un éxito total. El brownie estaba húmedo y el dulce de leche en punto justo. Presentación impecable y entrega a tiempo.",
    occasion: "Aniversario",
  },
  {
    name: "Laura P.",
    stars: 5,
    text: "El cheesecake de frutos rojos que pedí para mi reunión de trabajo dejó a todos sin palabras. La base crocante con la crema suave era una combinación perfecta. Ya hice el segundo pedido.",
    occasion: "Reunión de trabajo",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-base">★</span>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="resenas" className="scroll-mt-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Reseñas
          </span>
          <h2 className="mt-3 font-heading text-4xl font-medium text-balance text-foreground md:text-5xl">
            Lo que dicen{" "}
            <em className="italic text-primary">nuestros clientes</em>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Más de 500 pedidos felices. Estas son algunas de sus historias.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Stars count={review.stars} />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {review.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Promedio */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-amber-400 text-2xl">★</span>
            ))}
          </div>
          <p className="font-heading text-2xl font-semibold text-foreground">5.0 / 5.0</p>
          <p className="text-sm text-muted-foreground">Basado en +100 reseñas de clientes</p>
        </div>
      </div>
    </section>
  )
}
