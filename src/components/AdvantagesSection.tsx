import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "Clock",
    title: "Выезд в день обращения",
    description: "Приедем в удобное для вас время. Работаем с 8:00 до 22:00 без выходных.",
  },
  {
    icon: "Shield",
    title: "Гарантия на работы",
    description: "Даём письменную гарантию до 12 месяцев на все виды выполненных работ.",
  },
  {
    icon: "Wallet",
    title: "Честные цены",
    description: "Называем точную стоимость после осмотра. Никаких скрытых платежей и доплат.",
  },
  {
    icon: "Wrench",
    title: "Свой инструмент",
    description: "Работаем профессиональным инструментом. Вам не нужно ничего покупать или искать.",
  },
  {
    icon: "Users",
    title: "Опытные мастера",
    description: "В команде специалисты с опытом от 5 лет. Решаем задачи любой сложности.",
  },
  {
    icon: "MessageCircle",
    title: "Всегда на связи",
    description: "Отвечаем в Telegram и по телефону. Консультируем бесплатно.",
  },
]

export function AdvantagesSection() {
  return (
    <div className="relative z-20 py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white mb-4"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Почему выбирают нас
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Надёжный партнёр для решения любых бытовых задач в Усть-Куте
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={24} className="text-zinc-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-2xl px-8 py-6">
              <p className="text-zinc-300 text-lg mb-2">
                <span className="text-white font-medium">Более 500 довольных клиентов</span> в Усть-Куте
              </p>
              <p className="text-zinc-500 text-sm">Средняя оценка 4.9 из 5.0</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}