import { createFileRoute } from "@tanstack/react-router";
import OtdelkaKvartir from "@/pages/OtdelkaKvartir";

export const Route = createFileRoute("/otdelka-kvartir")({
  head: () => ({
    meta: [
      { title: "Отделка квартир в Усть-Куте под ключ — цены от 800 ₽/м² | МАСТЕРОФФ" },
      { name: "description", content: "Ремонт и отделка квартир в Усть-Куте под ключ. Косметический от 800 ₽/м², капитальный от 2500 ₽/м². Гарантия 3 года, договор, чеки. Бесплатный замер — звоните!" },
      { name: "keywords", content: "отделка квартир Усть-Кут, ремонт квартир Усть-Кут, ремонт под ключ Усть-Кут, косметический ремонт Усть-Кут, капитальный ремонт Усть-Кут, отделка квартир цена Усть-Кут" },
      { property: "og:title", content: "Отделка квартир в Усть-Куте под ключ | МАСТЕРОФФ" },
      { property: "og:description", content: "Ремонт квартир в Усть-Куте: косметический, капитальный, под ключ. Гарантия 3 года. Бесплатный замер и смета за 24 часа." },
      { property: "og:image", content: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/96b30de2-deeb-4151-aed8-b0952d14597f.jpg" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/otdelka-kvartir" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Отделка квартир в Усть-Куте",
          "description": "Ремонт и отделка квартир в Усть-Куте под ключ. Косметический, капитальный ремонт, дизайн-проект.",
          "url": "https://masteroff38.ru/otdelka-kvartir",
          "image": "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/96b30de2-deeb-4151-aed8-b0952d14597f.jpg",
          "telephone": "+7-914-891-0000",
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
          "priceRange": "от 800 ₽/м²",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "87",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по ремонту квартир",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Косметический ремонт квартиры" },
                "price": "800",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "800", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Капитальный ремонт квартиры" },
                "price": "2500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "2500", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Ремонт квартиры под ключ" },
                "price": "4000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "4000", "priceCurrency": "RUB", "unitText": "м²" }
              }
            ]
          }
        }),
    },
    ],
  }),
  component: OtdelkaKvartir,
});
