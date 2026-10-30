import { createFileRoute } from "@tanstack/react-router";
import Gruzchiki from "@/pages/Gruzchiki";

export const Route = createFileRoute("/gruzchiki")({
  head: () => ({
    meta: [
      { title: "Услуги грузчиков в Усть-Куте | МАСТЕРОФФ — от 500 ₽/час" },
      { name: "description", content: "Профессиональные грузчики в Усть-Куте. Погрузка, разгрузка, переезд, подъём на этаж. Выезд в день обращения. От 500 руб/час. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "грузчики усть-кут, услуги грузчиков усть-кут, переезд усть-кут, погрузка разгрузка усть-кут, подъём на этаж усть-кут, вынос мусора усть-кут" },
      { property: "og:title", content: "Услуги грузчиков в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Грузчики в Усть-Куте — погрузка, переезд, разгрузка фур. Выезд в день обращения. От 500 ₽/час." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/gruzchiki" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Услуги грузчиков в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "38", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Дмитрий П." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Заказывал грузчиков для переезда офиса. Приехали вовремя, работали быстро и аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Татьяна В." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Помогли разгрузить фуру со стройматериалами. Всё сделали за пару часов, цена адекватная." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Алексей Р." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Поднимали мебель на 4 этаж без лифта — справились отлично. Рекомендую!" }
          ]
        }),
    },
    ],
  }),
  component: Gruzchiki,
});
