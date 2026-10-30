import { createFileRoute } from "@tanstack/react-router";
import PlastikovyeOkna from "@/pages/PlastikovyeOkna";

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ce4e43a9-df6a-4752-ac9d-ff563a858901.webp";

export const Route = createFileRoute("/plastikovye-okna")({
  head: () => ({
    meta: [
      { title: "Пластиковые окна в Усть-Куте — производство и монтаж от 8 500 ₽/м² | МАСТЕРОФФ" },
      { name: "description", content: "Производство и монтаж пластиковых окон в Усть-Куте. Окна в квартиру, дом, на балкон и лоджию. Собственное производство, гарантия 5 лет. Бесплатный замер — звоните!" },
      { name: "keywords", content: "пластиковые окна Усть-Кут, окна ПВХ Усть-Кут, установка окон Усть-Кут, остекление балкона Усть-Кут, производство окон Усть-Кут, замена окон Усть-Кут" },
      { property: "og:title", content: "Пластиковые окна в Усть-Куте — производство и монтаж | МАСТЕРОФФ" },
      { property: "og:description", content: "Производство и установка пластиковых окон в Усть-Куте. Гарантия 5 лет, фиксированная смета, бесплатный замер." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff38.ru/plastikovye-okna" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Пластиковые окна в Усть-Куте",
          "description": "Производство и монтаж пластиковых окон в Усть-Куте: окна в квартиру, дом, балконы и лоджии, витражное остекление.",
          "url": "https://masteroff38.ru/plastikovye-okna",
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
          "priceRange": "от 8 500 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "56",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по производству и монтажу окон",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Окна в квартиру" },
                "price": "9500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "9500", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Остекление балконов" },
                "price": "7000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Витражное остекление" },
                "price": "12000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "12000", "priceCurrency": "RUB", "unitText": "м²" }
              }
            ]
          }
        }),
    },
    ],
  }),
  component: PlastikovyeOkna,
});
