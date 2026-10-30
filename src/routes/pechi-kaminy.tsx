import { createFileRoute } from "@tanstack/react-router";
import PechiKaminy from "@/pages/PechiKaminy";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/2fa02e05-5b6f-4c2b-b817-076b465ada15.jpg";

export const Route = createFileRoute("/pechi-kaminy")({
  head: () => ({
    meta: [
      { title: "Печи и камины в Усть-Куте под ключ — цены от 55 000 ₽ | МАСТЕРОФФ" },
      { name: "description", content: "Строительство печей и каминов в Усть-Куте: кирпичные печи, банные печи-каменки, камины, дымоходы. Гарантия 5 лет. Бесплатный выезд — звоните!" },
      { name: "keywords", content: "печи Усть-Кут, камины Усть-Кут, кирпичная печь Усть-Кут, банная печь Усть-Кут, кладка печи Усть-Кут, дымоход Усть-Кут, печник Усть-Кут" },
      { property: "og:title", content: "Печи и камины в Усть-Куте под ключ | МАСТЕРОФФ" },
      { property: "og:description", content: "Кирпичные печи, банные каменки, камины и дымоходы в Усть-Куте. Гарантия 5 лет, фиксированная смета." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/pechi-kaminy" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Печи и камины в Усть-Куте",
          "description": "Строительство печей и каминов в Усть-Куте: кирпичные печи, банные печи-каменки, камины, дымоходы.",
          "url": "https://masteroff38.ru/pechi-kaminy",
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
          "priceRange": "от 55 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "34",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по строительству печей и каминов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Кирпичная печь" },
                "price": "60000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Банная печь" },
                "price": "55000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Камин" },
                "price": "80000",
                "priceCurrency": "RUB"
              }
            ]
          }
        }),
    },
    ],
  }),
  component: PechiKaminy,
});
