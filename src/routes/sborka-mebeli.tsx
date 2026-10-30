import { createFileRoute } from "@tanstack/react-router";
import SborkaMebeli from "@/pages/SborkaMebeli";

export const Route = createFileRoute("/sborka-mebeli")({
  head: () => ({
    meta: [
      { title: "Сборка мебели в Усть-Куте | МАСТЕРОФФ — от 400 руб." },
      { name: "description", content: "Профессиональная сборка мебели в Усть-Куте. Шкафы, кухни, кровати, комоды, прихожие. Выезд в день обращения. Прайс-лист онлайн. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "сборка мебели усть-кут, сборщик мебели усть-кут, сборка шкафа купе усть-кут, установка кухни усть-кут, сборка кровати усть-кут, перетяжка мебели усть-кут, химчистка мебели усть-кут" },
      { property: "og:title", content: "Сборка мебели в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Сборка любой мебели в Усть-Куте. Шкафы-купе, кухни, спальни, прихожие. Цены от 400 руб. Выезд в день обращения." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/sborka-mebeli" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Сборка мебели в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Ирина М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Заказала сборку шкафа-купе ИКЕА. Мастер приехал в тот же день, собрал быстро и аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Роман Т." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Собирали кухонный гарнитур. Всё сделано ровно, без царапин. Остался очень доволен." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Юлия Д." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Разобрали старую мебель и собрали новую спальню. Работали аккуратно, мусор убрали. Рекомендую!" }
          ]
        }),
    },
    ],
  }),
  component: SborkaMebeli,
});
