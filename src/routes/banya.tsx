import { createFileRoute } from "@tanstack/react-router";
import Banya from "@/pages/Banya";

export const Route = createFileRoute("/banya")({
  head: () => ({
    meta: [
      { title: "Строительство бань в Усть-Куте под ключ | МАСТЕРОФФ" },
      { name: "description", content: "Строительство бань в Усть-Куте: брус, бревно, каркас, газобетон, кирпич, баня-бочка. Под ключ. Выезд и замер бесплатно. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "строительство бани Усть-Кут, баня под ключ Усть-Кут, баня из бруса Усть-Кут, каркасная баня Усть-Кут, баня-бочка Усть-Кут, построить баню Усть-Кут" },
      { property: "og:title", content: "Строительство бань в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Строительство бань под ключ в Усть-Куте. Выезд бесплатно. Гарантия на работу." },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/banya" },
    ],
  }),
  component: Banya,
});
