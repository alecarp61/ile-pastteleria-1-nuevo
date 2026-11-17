import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

const paths = [
  "",
  "/tortas",
  "/precios",
  "/tortas/rogel",
  "/tortas/torta-cumpleanos",
  "/tortas/torta-chocolate-frutos",
  "/tortas/torta-casamiento",
  "/tortas/tarta-manzana",
  "/tortas/torta-letra",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/tortas" || p === "/precios" ? 0.8 : 0.6,
  }))
}
