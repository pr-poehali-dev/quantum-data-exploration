import { createFileRoute } from "@tanstack/react-router";
import OtdelkaBani from "@/pages/OtdelkaBani";

export const Route = createFileRoute("/otdelka-bani")({
  head: () => ({
    meta: [
      { title: "Отделка бань и саун в Усть-Куте под ключ | Бригада мастеров" },
      { name: "description", content: "Внутренняя отделка бань и саун в Усть-Куте под ключ. Более 20 лет опыта, 8000+ проектов. Идеальная баня за 7 дней. Звоните!" },
    ],
  }),
  component: OtdelkaBani,
});
