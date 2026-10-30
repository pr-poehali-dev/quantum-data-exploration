import { createFileRoute } from "@tanstack/react-router";
import Vakansii from "@/pages/Vakansii";

export const Route = createFileRoute("/vakansii")({
  head: () => ({
    meta: [
      { title: "Вакансии в Усть-Куте | Подработка и работа — МАСТЕРОФФ" },
      { name: "description", content: "Вакансии в Усть-Куте: разнорабочие, грузчики, мастера на час. Подработка от 300 руб/час, официальное трудоустройство от 45 000 руб/мес. Гибкий график. Звоните: +7 (950) 099-09-31" },
      { name: "keywords", content: "вакансии усть-кут, подработка усть-кут, работа усть-кут, грузчик усть-кут, разнорабочий усть-кут, мастер на час работа" },
      { property: "og:title", content: "Вакансии в Усть-Куте | МАСТЕРОФФ" },
      { property: "og:description", content: "Подработка от 300 руб/час и официальное трудоустройство от 45 000 руб/мес. Разнорабочие, грузчики, мастера." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://masteroff.ru/vakansii" },
    ],
  }),
  component: Vakansii,
});
