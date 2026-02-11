import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function WhyUsSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-6"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Как мы работаем
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Простой процесс от заявки до завершения работ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Заявка</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Позвоните, напишите в WhatsApp или Telegram. Расскажите о задаче — мы примем заявку и уточним
                  детали.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Выезд мастера</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Мастер приедет в удобное время, оценит объём работ и назовёт точную стоимость. Осмотр бесплатный.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Выполнение работ</h3>
                <p className="text-zinc-400 leading-relaxed">
                  После согласования цены приступаем к работе. Используем профессиональный инструмент и качественные
                  материалы.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Приёмка и оплата</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Проверяете результат, подписываете акт выполненных работ. Оплата после — наличными или переводом.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Icon name="Phone" size={28} className="text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white">Звоните сейчас</h3>
                  <p className="text-zinc-400">Работаем 8:00 - 22:00</p>
                </div>
              </div>

              <a
                href="tel:+79991234567"
                className="block w-full py-4 bg-white text-zinc-900 text-center font-medium rounded-xl hover:bg-zinc-100 transition-colors text-lg mb-4"
              >
                +7 (999) 123-45-67
              </a>

              <div className="flex gap-3">
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-zinc-700 text-white text-center font-medium rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-zinc-700 text-white text-center font-medium rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>

              <p className="text-zinc-500 text-sm text-center mt-6">
                Ответим в течение 5 минут
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
