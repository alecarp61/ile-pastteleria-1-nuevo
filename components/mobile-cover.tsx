import Image from "next/image"

export function MobileCover() {
  return (
    <div className="block md:hidden w-full">
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src="/images/portada-mobile.png"
          alt="Rincón de Dulzura — Pastelería Artesanal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  )
}
