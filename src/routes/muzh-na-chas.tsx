import { createFileRoute } from "@tanstack/react-router";
import MuzhNaChas from "@/pages/MuzhNaChas";

export const Route = createFileRoute("/muzh-na-chas")({
  head: () => ({
    meta: [
      { title: "Муж на час в Усть-Куте | МАСТЕРОФФ — мелкий ремонт от 300 ₽" },
      { name: "description", content: "Муж на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели. Выезд в день обращения. От 300 руб. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "муж на час усть-кут, мелкий ремонт усть-кут, мастер на дом усть-кут, повесить полку усть-кут, сборка мебели усть-кут" },
      { property: "og:title", content: "Муж на час в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/muzh-na-chas" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Муж на час в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "21", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Елена К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Муж на час помог собрать кухню и повесить зеркала. Всё сделал быстро и аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Андрей Б." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Поменял замок на входной двери. Мастер приехал в тот же день, работой доволен." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Светлана Ж." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Отлично справился с мелким ремонтом — заменил петли на двери и прочистил трубу. Рекомендую!" }
          ]
        }),
    },
    ],
  }),
  component: MuzhNaChas,
});
