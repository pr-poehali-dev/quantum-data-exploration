import { createFileRoute } from "@tanstack/react-router";
import RusskayaPech from "@/pages/RusskayaPech";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/23fd7dd5-64a6-46df-93fd-85d9c16f8309.jpg";

export const Route = createFileRoute("/russkaya-pech")({
  head: () => ({
    meta: [
      { title: "Кладка русской печи в Усть-Куте под ключ — цены от 75 000 ₽ | МАСТЕРОФФ" },
      { name: "description", content: "Кладка русской печи в Усть-Куте: с лежанкой, варочной плитой, изразцами. Печники с опытом, гарантия 5 лет. Бесплатный выезд — звоните!" },
      { name: "keywords", content: "русская печь Усть-Кут, кладка русской печи Усть-Кут, печь с лежанкой Усть-Кут, печник Усть-Кут, кирпичная печь Усть-Кут" },
      { property: "og:title", content: "Кладка русской печи в Усть-Куте под ключ | МАСТЕРОФФ" },
      { property: "og:description", content: "Русские печи с лежанкой, варочной плитой и изразцами в Усть-Куте. Гарантия 5 лет, фиксированная смета." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/russkaya-pech" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Кладка русской печи в Усть-Куте",
          "description": "Кладка русских печей в Усть-Куте: с лежанкой, варочной плитой, изразцами, дымоходами.",
          "url": "https://masteroff38.ru/russkaya-pech",
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
          "priceRange": "от 75 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "41",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по кладке русских печей",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Классическая русская печь" },
                "price": "75000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Русская печь с лежанкой" },
                "price": "90000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Печь с варочной плитой" },
                "price": "85000",
                "priceCurrency": "RUB"
              }
            ]
          }
        }),
    },
    ],
  }),
  component: RusskayaPech,
});
