import { createFileRoute } from "@tanstack/react-router";
import Elektrik from "@/pages/Elektrik";

export const Route = createFileRoute("/elektrik")({
  head: () => ({
    meta: [
      { title: "Услуги электрика в Усть-Куте | МАСТЕРОФФ — вызов электрика на дом" },
      { name: "description", content: "Профессиональный электрик в Усть-Куте. Монтаж проводки, замена розеток и выключателей, подключение бытовой техники, установка щитков. Выезд в день обращения. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "электрик усть-кут, вызов электрика усть-кут, монтаж проводки усть-кут, замена розеток усть-кут, электромонтаж усть-кут, подключение электрики усть-кут" },
      { property: "og:title", content: "Услуги электрика в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Электрик в Усть-Куте — монтаж проводки, розетки, щитки, подключение техники. Выезд в день обращения." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/elektrik" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Услуги электрика в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "24", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Игорь С." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызывал электрика для замены проводки в квартире. Приехали быстро, сделали аккуратно, убрали за собой." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Наталья К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Помогли подключить варочную панель и духовку. Всё работает отлично, цена честная." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Виктор М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Установили новый электрощиток в частном доме. Работа выполнена профессионально, рекомендую!" }
          ]
        }),
    },
    ],
  }),
  component: Elektrik,
});
