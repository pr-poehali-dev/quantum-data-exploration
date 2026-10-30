import { createFileRoute } from "@tanstack/react-router";
import Contacts from "@/pages/Contacts";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты | МАСТЕРОФФ — Усть-Кут" },
      { name: "description", content: "Контакты МАСТЕРОФФ в Усть-Куте. Телефон: +7 (950) 099-09-31. Telegram, ВКонтакте, Одноклассники. Выезд в день обращения." },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/contacts" },
    ],
    scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "МАСТЕРОФФ",
          "telephone": "+79500990931",
          "email": "masteroff.ustkut@mail.ru",
          "url": "https://servismasteroff.ru",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Кирова, 77, офис 29",
            "addressLocality": "Усть-Кут",
            "addressRegion": "Иркутская область",
            "addressCountry": "RU"
          },
          "sameAs": [
            "https://vk.com/sbm38ustkut",
            "https://ok.ru/masteroffm"
          ]
        }),
    },
    ],
  }),
  component: Contacts,
});
