import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const advantages = [
  { icon: "Clock", title: "Выезд в день обращения", description: "Приедем в удобное для вас время. Работаем с 8:00 до 22:00 без выходных." },
  { icon: "Shield", title: "Гарантия на работы", description: "Даём письменную гарантию до 12 месяцев на все виды выполненных работ." },
  { icon: "Wallet", title: "Честные цены", description: "Называем точную стоимость после осмотра. Никаких скрытых платежей и доплат." },
  { icon: "Wrench", title: "Свой инструмент", description: "Работаем профессиональным инструментом. Вам не нужно ничего покупать или искать." },
  { icon: "Users", title: "Опытные мастера", description: "В команде специалисты с опытом от 5 лет. Решаем задачи любой сложности." },
  { icon: "MessageCircle", title: "Всегда на связи", description: "Отвечаем в Telegram и по телефону. Консультируем бесплатно." },
]

export function AdvantagesSection() {
  return (
    <div className="relative z-20 py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Почему выбирают{" "}
              <span className="relative inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>нас?</span>
            </h2>
            <p className="text-zinc-400 text-base mt-4 max-w-2xl mx-auto">
              Надёжный партнёр для решения любых бытовых задач в Усть-Куте
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02, zIndex: 10 }}
                className="flex flex-col items-center text-center p-8 cursor-pointer"
                style={{ backgroundColor: "#1a1a1a", borderRadius: "16px" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,197,24,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <Icon name={item.icon} size={40} className="mb-5" style={{ color: "#F5C518" }} />
                <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "#F5C518" }}>{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <div className="inline-block rounded-2xl px-8 py-5" style={{ backgroundColor: "#1a1a1a" }}>
              <p className="text-zinc-300 text-base mb-1">
                <span className="font-bold" style={{ color: "#F5C518" }}>Более 500 довольных клиентов</span> в Усть-Куте
              </p>
              <p className="text-zinc-500 text-sm">Средняя оценка 4.9 из 5.0</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
