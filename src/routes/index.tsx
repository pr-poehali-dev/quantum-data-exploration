import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "МАСТЕРОФФ — строительная компания в Усть-Куте" },
      { name: "description", content: "Строительная компания МАСТЕРОФФ в Усть-Куте. Строительство домов, бань, заборов, фундаментов под ключ. Гарантия качества, доступные цены. Звоните: +7 (950) 099-09-31" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/" },
    ],
  }),
  component: Index,
});
