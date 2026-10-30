import { createFileRoute } from "@tanstack/react-router";
import StroitelstvoDomov from "@/pages/StroitelstvoDomov";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f89a9f63-3010-4c3c-ba73-c6b539da17e9.jpg";

export const Route = createFileRoute("/stroitelstvo-domov")({
  head: () => ({
    meta: [
      { title: "Строительство домов в Усть-Куте под ключ — цены от 25 000 ₽/м² | МАСТЕРОФФ" },
      { name: "description", content: "Строительство домов и коттеджей в Усть-Куте под ключ. Каркасные, брусовые, кирпичные дома. Фундамент, кровля, хозблоки. Гарантия 5 лет — звоните!" },
      { name: "keywords", content: "строительство домов Усть-Кут, построить дом Усть-Кут, каркасные дома Усть-Кут, дом из бруса Усть-Кут, коттеджи Усть-Кут, строительство коттеджей Усть-Кут, фундамент Усть-Кут, кровельные работы Усть-Кут" },
      { property: "og:title", content: "Строительство домов в Усть-Куте под ключ | МАСТЕРОФФ" },
      { property: "og:description", content: "Строительство домов и коттеджей в Усть-Куте: каркасные, брусовые, кирпичные. Гарантия 5 лет. Бесплатный выезд и смета." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/stroitelstvo-domov" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Строительство домов в Усть-Куте",
          "description": "Строительство домов и коттеджей в Усть-Куте под ключ. Каркасные, брусовые, кирпичные дома, фундамент, кровля.",
          "url": "https://masteroff38.ru/stroitelstvo-domov",
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
          "priceRange": "от 25 000 ₽/м²",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "62",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги строительства домов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство каркасного дома" },
                "price": "25000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "25000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство дома из бруса" },
                "price": "32000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "32000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство кирпичного дома" },
                "price": "38000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "38000", "priceCurrency": "RUB", "unitText": "м²" }
              }
            ]
          }
        }),
    },
    ],
  }),
  component: StroitelstvoDomov,
});
