export const WHATSAPP_NUMBER = "+5491156600388"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const INSTAGRAM_HANDLE = "@rincondedulzura.pasteleria"
export const INSTAGRAM_URL = "https://instagram.com/rincondedulzura.pasteleria"

export const DEFAULT_WA_MESSAGE =
  "¡Hola Rincón de Dulzura! Me gustaría solicitar un presupuesto."
