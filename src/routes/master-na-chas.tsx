import { createFileRoute } from "@tanstack/react-router";
import MasterNaChas from "@/pages/MasterNaChas";

export const Route = createFileRoute("/master-na-chas")({
  head: () => ({
    meta: [
      { title: "Мастер на час в Усть-Куте | МАСТЕРОФФ — от 500 ₽/час" },
      { name: "description", content: "Мастер на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели, двери и замки. Выезд в день обращения. От 500 руб/час. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "мастер на час усть-кут, мелкий ремонт усть-кут, сантехник усть-кут, электрик усть-кут, сборка мебели усть-кут, муж на час усть-кут" },
      { property: "og:title", content: "Мастер на час в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Мастер на час в Усть-Куте — мелкий ремонт, сантехника, электрика. Выезд в день обращения. От 500 ₽/час." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/master-na-chas" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Мастер на час в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "29", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Наталья В." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызвала мастера для замены розеток и установки люстры. Пришёл вовремя, сделал аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Владимир С." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Мастер починил кран и заменил смеситель. Быстро, качественно, без лишних трат." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Марина Л." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Повесили карнизы и полки. Всё ровно, мусор убрали за собой. Очень довольна!" }
          ]
        }),
    },
    ],
  }),
  component: MasterNaChas,
});
