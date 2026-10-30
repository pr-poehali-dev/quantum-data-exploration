import { createFileRoute } from "@tanstack/react-router";
import Santehnik from "@/pages/Santehnik";

export const Route = createFileRoute("/santehnik")({
  head: () => ({
    meta: [
      { title: "Сантехник в Усть-Куте | МАСТЕРОФФ — вызов сантехника на дом" },
      { name: "description", content: "Сантехник в Усть-Куте. Ремонт и замена труб, установка смесителей, унитазов, ванн, устранение протечек. Выезд в день обращения. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "сантехник усть-кут, вызов сантехника усть-кут, ремонт труб усть-кут, замена смесителя усть-кут, устранение протечки усть-кут, установка унитаза усть-кут" },
      { property: "og:title", content: "Сантехник в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Сантехник в Усть-Куте — ремонт труб, замена смесителей, устранение протечек. Выезд в день обращения." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/santehnik" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Сантехник в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "34", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Ирина М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызвала сантехника — прорвало трубу под раковиной. Приехал через час, всё починил аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Сергей К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Заменили смеситель и унитаз. Работа выполнена качественно, цена адекватная." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Людмила Н." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Установили стиральную машину и подключили к водопроводу. Всё работает отлично, рекомендую!" }
          ]
        }),
    },
    ],
  }),
  component: Santehnik,
});
