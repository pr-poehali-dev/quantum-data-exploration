import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  { num: 1, icon: "MessageSquare", title: "Заявка", desc: "Позвоните или напишите в Telegram. Расскажите о задаче — мы примем заявку и уточним детали." },
  { num: 2, icon: "Car", title: "Выезд мастера", desc: "Мастер приедет в удобное время, оценит объём работ и назовёт точную стоимость. Осмотр бесплатный." },
  { num: 3, icon: "Hammer", title: "Выполнение работ", desc: "После согласования цены приступаем к работе. Используем профессиональный инструмент и качественные материалы." },
  { num: 4, icon: "Wallet", title: "Приёмка и оплата", desc: "Проверяете результат. Оплата после — наличными или переводом на карту." },
]

export function WhyUsSection() {
  return (
    <section className="relative py-16 md:py-24 px-6" style={{ backgroundColor: "#0d0d10" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Как мы{" "}
            <span className="relative inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>работаем</span>
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-xl mx-auto">
            Простой процесс от заявки до завершения работ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Шаги */}
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 items-start p-6 rounded-2xl"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-black font-bold text-base" style={{ backgroundColor: "#F5C518" }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#F5C518" }}>{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-3xl p-10" style={{ backgroundColor: "#1a1a1a" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.15)" }}>
                  <Icon name="Phone" size={26} style={{ color: "#F5C518" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Звоните сейчас</h3>
                  <p className="text-zinc-400 text-sm">Работаем 8:00 — 22:00</p>
                </div>
              </div>

              <a
                href="tel:+79500990931"
                className="block w-full py-4 text-center font-bold rounded-xl text-black text-lg mb-4 hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: "#F5C518" }}
              >
                +7 (950) 099-09-31
              </a>

              <div className="flex gap-3">
                <a
                  href="https://t.me/masteroff_uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-white text-center font-medium rounded-xl flex items-center justify-center gap-2 border border-zinc-700 hover:border-yellow-500/50 transition-colors text-sm"
                  style={{ backgroundColor: "#111113" }}
                >
                  <Icon name="Send" size={16} style={{ color: "#F5C518" }} />
                  Telegram
                </a>
                <a
                  href="https://wa.me/79500990931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-white text-center font-medium rounded-xl flex items-center justify-center gap-2 border border-zinc-700 hover:border-yellow-500/50 transition-colors text-sm"
                  style={{ backgroundColor: "#111113" }}
                >
                  <Icon name="MessageCircle" size={16} style={{ color: "#F5C518" }} />
                  WhatsApp
                </a>
              </div>

              <p className="text-zinc-500 text-sm text-center mt-5">
                Ответим в течение 5 минут
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}