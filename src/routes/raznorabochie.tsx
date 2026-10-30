import { createFileRoute } from "@tanstack/react-router";
import Raznorabochie from "@/pages/Raznorabochie";

export const Route = createFileRoute("/raznorabochie")({
  head: () => ({
    meta: [
      { title: "Разнорабочие в Усть-Куте | МАСТЕРОФФ" },
      { name: "description", content: "Разнорабочие в Усть-Куте. Вывоз мусора, сборка мебели, уборка, помощь при переезде. Выезд в день обращения. Звоните: +7 (950) 099-09-31" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Разнорабочие в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "33", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Сергей К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызвал разнорабочих для вывоза строительного мусора. Приехали быстро, работали чётко." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Ольга М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Помогли при переезде — упаковали вещи, подняли мебель на этаж. Всё аккуратно и без повреждений." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Игорь Н." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Отличные ребята, сделали всё за несколько часов. Цена честная, рекомендую." }
          ]
        }),
    },
    ],
  }),
  component: Raznorabochie,
});
