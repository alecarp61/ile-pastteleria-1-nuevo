import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { whatsappLink } from "@/lib/site"

const categories = [
  {
    name: "Tortas y postres clásicos",
    emoji: "🎂",
    items: [
      { name: "Rogel", price: 45000, emoji: "🎂", desc: "Capas de hojaldre con dulce de leche y merengue" },
      { name: "Chocotorta", price: 55000, emoji: "🍫", desc: "La clásica con galletitas y crema de mascarpone" },
      { name: "Cheesecake de frutos rojos", price: 55000, emoji: "🍓", desc: "Base crocante con crema y frutos rojos frescos" },
      { name: "Lemon Pie", price: 40000, emoji: "🍋", desc: "Crema de limón, masa sablée y merengue italiano" },
      { name: "Key Lime Pie", price: 40000, emoji: "🍋", desc: "Versión americana con lima y base de galletitas" },
      { name: "Banoffee", price: 40000, emoji: "🍌", desc: "Banana, dulce de leche y crema batida" },
      { name: "Matilda", price: 65000, emoji: "🍫", desc: "Torta de chocolate húmeda con cobertura ganache" },
      { name: "Pavlova con dulce de leche, crema y frutos", price: 45000, emoji: "🍓", desc: "Merengue crocante por fuera, suave por dentro" },
      { name: "Torta nuez, dulce de leche y crema", price: 45000, emoji: "🌰", desc: "Nueces caramelizadas con capas de dulce de leche" },
    ],
  },
  {
    name: "Brownies",
    emoji: "🍫",
    items: [
      { name: "Brownie clásico", price: 35000, emoji: "🍫", desc: "Húmedo por dentro, crocante por fuera" },
      { name: "Brownie con dulce de leche y merengue", price: 50000, emoji: "🍫", desc: "Brownie clásico con cobertura de ddl y merengue tostado" },
    ],
  },
  {
    name: "Tartas",
    emoji: "🥧",
    items: [
      { name: "Tarta vainilla con dulce de leche y frutillas", price: 40000, emoji: "🍓", desc: "Crema de vainilla, dulce de leche y frutillas frescas" },
      { name: "Tarta de ricota", price: 40000, emoji: "🍰", desc: "Suave y cremosa, al horno en masa casera" },
      { name: "Pastafrola de membrillo", price: 35000, emoji: "🍰", desc: "La clásica con dulce de membrillo artesanal" },
      { name: "Pastafrola de batata", price: 35000, emoji: "🍰", desc: "Versión con dulce de batata, bien argentina" },
      { name: "Tarta coco y dulce de leche", price: 40000, emoji: "🥥", desc: "Combinación irresistible de coco rallado y ddl" },
      { name: "Tarta de manzana", price: 38000, emoji: "🍎", desc: "Manzana caramelizada con crumble dorado" },
    ],
  },
  {
    name: "Otros dulces",
    emoji: "🍪",
    items: [
      { name: "Cuadrados de limón", price: 30000, emoji: "🍰", desc: "Lemon bars con base crocante y crema de limón" },
      { name: "Alfajores (docena)", price: 17000, emoji: "🍪", desc: "Docena de alfajores artesanales con dulce de leche" },
    ],
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <div className="relative overflow-hidden border-b border-border bg-secondary/30">
          <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            {/* Botón volver */}
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary mb-8"
            >
              ← Volver al inicio
            </a>
            <div className="block">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
                ✨ Precios actualizados
              </span>
            </div>
            <h1 className="mt-4 font-heading text-5xl font-medium text-foreground md:text-6xl">
              Lista de <em className="italic text-primary">precios</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Todos los precios son por unidad (torta entera / docena según corresponda).
              Para pedidos especiales, escribime por WhatsApp.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm text-amber-800">
              ⚠️ Los precios pueden variar. Consultá disponibilidad antes de hacer el pedido.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
          <div className="flex flex-col gap-14">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                    {cat.name}
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <a
                      key={item.name}
                      href={whatsappLink(`¡Hola! Me gustaría pedir un presupuesto para: ${item.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-heading text-lg font-semibold text-primary">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          Pedir →
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm md:p-12">
            <p className="text-3xl">🎂</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground md:text-3xl">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              Hacemos creaciones a pedido. Contame qué tenés en mente y armamos algo especial para vos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappLink("¡Hola! Quiero consultar por un pedido especial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                💬 Consultar por WhatsApp
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                ← Volver al inicio
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
