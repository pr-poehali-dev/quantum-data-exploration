import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Елена Соколова",
    service: "Ремонт квартиры",
    rating: 5,
    text: "Делали косметический ремонт в двухкомнатной квартире. Ребята работали быстро и аккуратно, убирали за собой каждый день. Цена не менялась, всё как договорились. Очень довольны результатом!",
    date: "2 недели назад",
  },
  {
    name: "Сергей Михайлов",
    service: "Сборка кухни",
    rating: 5,
    text: "Собрали угловую кухню за один день. Всё ровно, фасады открываются идеально. Мастер вежливый, всё объяснил по установке и уходу. Рекомендую!",
    date: "1 месяц назад",
  },
  {
    name: "Анна Петрова",
    service: "Электрика",
    rating: 5,
    text: "Нужно было срочно заменить проводку в комнате. Приехали в тот же день, сделали всё быстро и качественно. Теперь не боюсь короткого замыкания. Спасибо!",
    date: "3 недели назад",
  },
  {
    name: "Дмитрий Воронин",
    service: "Сантехника",
    rating: 5,
    text: "Установили новый унитаз и смеситель в ванной. Работа заняла пару часов, цена адекватная. Всё работает отлично, никаких протечек. Буду обращаться ещё.",
    date: "2 месяца назад",
  },
  {
    name: "Ольга Иванова",
    service: "Поклейка обоев",
    rating: 5,
    text: "Переклеивали обои в зале. Мастер посоветовал хороший клей, помог рассчитать количество рулонов. Получилось очень красиво, стыков почти не видно!",
    date: "1 месяц назад",
  },
  {
    name: "Максим Кузнецов",
    service: "Мелкий ремонт",
    rating: 5,
    text: "Нужно было повесить полки, карниз и собрать стол. Всё сделали за час. Удобно, что свой инструмент — не пришлось ничего искать. Цена честная.",
    date: "3 недели назад",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm text-zinc-400">Отзывы клиентов</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1] mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Реальные отзывы жителей Усть-Кута о нашей работе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-zinc-500 text-sm">{testimonial.service}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-4">{testimonial.text}</p>

              <div className="flex items-center justify-between text-zinc-600 text-sm">
                <span>{testimonial.date}</span>
                <Icon name="CheckCircle" size={16} className="text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-6">Хотите оставить свой отзыв?</p>
          <button className="px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors">
            Написать отзыв
          </button>
        </motion.div>
      </div>
    </section>
  )
}