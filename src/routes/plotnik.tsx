import { createFileRoute } from "@tanstack/react-router";
import Plotnik from "@/pages/Plotnik";

export const Route = createFileRoute("/plotnik")({
  head: () => ({
    meta: [
      { title: "Плотник на дом — услуги плотника в Усть-Куте | МАСТЕРОФФ" },
      { name: "description", content: "Услуги плотника в Усть-Куте: установка дверей, укладка ламината, обшивка стен, полки на заказ, мелкий столярный ремонт. Выезд в день заявки. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "плотник Усть-Кут, услуги плотника, установка дверей, укладка ламината, столярные работы, плотник на дом" },
      { property: "og:title", content: "Плотник на дом — услуги плотника в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Услуги плотника в Усть-Куте: установка дверей, укладка ламината, обшивка стен, полки на заказ. Выезд в день заявки." },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/plotnik" },
    ],
  }),
  component: Plotnik,
});
