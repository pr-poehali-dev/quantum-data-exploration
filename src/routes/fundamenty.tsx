import { createFileRoute } from "@tanstack/react-router";
import Fundamenty from "@/pages/Fundamenty";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/d83922ab-5446-437f-a07d-c41b636b371c.jpg";

export const Route = createFileRoute("/fundamenty")({
  head: () => ({
    meta: [
      { title: "Фундаменты в Усть-Куте под ключ — цены от 2 000 ₽ | МАСТЕРОФФ" },
      { name: "description", content: "Строительство фундаментов в Усть-Куте: ленточный, свайно-винтовой, монолитная плита, столбчатый. Анализ грунта, гарантия 5 лет. Бесплатный выезд — звоните!" },
      { name: "keywords", content: "фундамент Усть-Кут, ленточный фундамент Усть-Кут, свайно-винтовой фундамент Усть-Кут, монолитная плита Усть-Кут, залить фундамент Усть-Кут, строительство фундамента Усть-Кут" },
      { property: "og:title", content: "Фундаменты в Усть-Куте под ключ | МАСТЕРОФФ" },
      { property: "og:description", content: "Ленточный, свайно-винтовой, монолитный фундамент в Усть-Куте. Анализ грунта, гарантия 5 лет, фиксированная смета." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/fundamenty" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Фундаменты в Усть-Куте",
          "description": "Строительство фундаментов в Усть-Куте: ленточный, свайно-винтовой, монолитная плита, столбчатый фундамент.",
          "url": "https://masteroff38.ru/fundamenty",
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
          "priceRange": "от 2 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "48",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по строительству фундаментов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Ленточный фундамент" },
                "price": "4500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "4500", "priceCurrency": "RUB", "unitText": "м.п." }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Свайно-винтовой фундамент" },
                "price": "3200",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "3200", "priceCurrency": "RUB", "unitText": "шт." }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Монолитная плита" },
                "price": "7500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7500", "priceCurrency": "RUB", "unitText": "м²" }
              }
            ]
          }
        }),
    },
    ],
  }),
  component: Fundamenty,
});
