import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const testimonials = [
  { name: "Елена Соколова", service: "Ремонт квартиры", rating: 5, text: "Делали косметический ремонт в двухкомнатной квартире. Ребята работали быстро и аккуратно, убирали за собой каждый день. Цена не менялась, всё как договорились. Очень довольны результатом!", date: "2 недели назад" },
  { name: "Сергей Михайлов", service: "Сборка кухни", rating: 5, text: "Собрали угловую кухню за один день. Всё ровно, фасады открываются идеально. Мастер вежливый, всё объяснил по установке и уходу. Рекомендую!", date: "1 месяц назад" },
  { name: "Анна Петрова", service: "Электрика", rating: 5, text: "Нужно было срочно заменить проводку в комнате. Приехали в тот же день, сделали всё быстро и качественно. Теперь не боюсь короткого замыкания. Спасибо!", date: "3 недели назад" },
  { name: "Дмитрий Воронин", service: "Сантехника", rating: 5, text: "Установили новый унитаз и смеситель в ванной. Работа заняла пару часов, цена адекватная. Всё работает отлично, никаких протечек. Буду обращаться ещё.", date: "2 месяца назад" },
  { name: "Ольга Иванова", service: "Поклейка обоев", rating: 5, text: "Переклеивали обои в зале. Мастер посоветовал хороший клей, помог рассчитать количество рулонов. Получилось очень красиво, стыков почти не видно!", date: "1 месяц назад" },
  { name: "Максим Кузнецов", service: "Мелкий ремонт", rating: 5, text: "Нужно было повесить полки, карниз и собрать стол. Всё сделали за час. Удобно, что свой инструмент — не пришлось ничего искать. Цена честная.", date: "3 недели назад" },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Отзывы{" "}
            <span className="relative inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>клиентов</span>
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-xl mx-auto">
            Реальные отзывы жителей Усть-Кута о нашей работе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-2xl p-6 flex flex-col gap-4 cursor-pointer"
              style={{ backgroundColor: "#1a1a1a" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,197,24,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} style={{ color: "#F5C518" }} />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.service} · {t.date}</div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                  <Icon name="CheckCircle" size={14} style={{ color: "#F5C518" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
