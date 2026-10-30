import { createFileRoute } from "@tanstack/react-router";
import StroitelnayaKompaniya from "@/pages/StroitelnayaKompaniya";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/591d0384-8961-4b94-9549-07fe2a65847c.jpg";

export const Route = createFileRoute("/stroitelnaya-kompaniya")({
  head: () => ({
    meta: [
      { title: "О компании — строительная компания МАСТЕРОФФ в Усть-Куте" },
      { name: "description", content: "МАСТЕРОФФ — строительная компания в Усть-Куте. Строительство домов и бань, отделка квартир, заборы, электрика, сантехника. Более 10 лет на рынке, гарантия до 5 лет." },
      { name: "keywords", content: "строительная компания Усть-Кут, о компании МАСТЕРОФФ, строительство Усть-Кут, ремонт Усть-Кут" },
      { property: "og:title", content: "О компании МАСТЕРОФФ — строительная компания в Усть-Куте" },
      { property: "og:description", content: "Полный цикл строительных и бытовых услуг в Усть-Куте: дома, бани, отделка, заборы, электрика, сантехника. Более 10 лет опыта." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/stroitelnaya-kompaniya" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — строительная компания в Усть-Куте",
          "description": "Строительная компания в Усть-Куте. Строительство домов и бань, отделка квартир, заборы, электрика, сантехника, клининг.",
          "url": "https://masteroff38.ru/stroitelnaya-kompaniya",
          "image": HERO_IMG,
          "telephone": "+7-950-099-09-31",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Кирова, 77, офис 29",
            "addressLocality": "Усть-Кут",
            "addressRegion": "Иркутская область",
            "addressCountry": "RU"
          },
          "areaServed": {
            "@type": "City",
            "name": "Усть-Кут"
          },
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "62",
            "bestRating": "5"
          }
        }),
    },
    ],
  }),
  component: StroitelnayaKompaniya,
});
