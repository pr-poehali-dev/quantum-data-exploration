import { createFileRoute } from "@tanstack/react-router";
import Zabory from "@/pages/Zabory";

export const Route = createFileRoute("/zabory")({
  head: () => ({
    meta: [
      { title: "Строительство заборов в Усть-Куте — все виды ограждений | МАСТЕРОФФ" },
      { name: "description", content: "Строительство заборов в Усть-Куте: профлист, евроштакетник, дерево, сетка-рабица, кирпич, поликарбонат, 2D/3D-секции. Замер бесплатно. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "забор Усть-Кут, строительство заборов Усть-Кут, забор из профлиста, евроштакетник, сетка рабица, забор из дерева, установка забора" },
      { property: "og:title", content: "Строительство заборов в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Все виды заборов под ключ в Усть-Куте. Замер бесплатно. Быстрый выезд." },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/zabory" },
    ],
  }),
  component: Zabory,
});
