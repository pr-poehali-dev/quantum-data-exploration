import { createFileRoute } from "@tanstack/react-router";
import Klining from "@/pages/Klining";

export const Route = createFileRoute("/klining")({
  head: () => ({
    meta: [
      { title: "Клининг в Усть-Куте | Уборка квартир, домов, офисов — МАСТЕРОФФ" },
      { name: "description", content: "Профессиональный клининг в Усть-Куте. Генеральная уборка, уборка после ремонта, химчистка мебели. Выезд в день обращения. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "клининг усть-кут, уборка квартир усть-кут, генеральная уборка усть-кут, химчистка мебели усть-кут, уборка после ремонта усть-кут" },
    ],
    links: [
      { rel: "canonical", href: "https://servismasteroff.ru/klining" },
    ],
  }),
  component: Klining,
});
