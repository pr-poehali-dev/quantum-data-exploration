import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function PricingSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-4">
            Простая и понятная стоимость
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Оплата почасовая — вы платите только за реальное время работы
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
            <Icon name="Clock" size={32} className="text-orange-500" />
          </div>
          
          <div className="mb-6">
            <div className="text-6xl font-bold text-white mb-2">500 ₽</div>
            <div className="text-2xl text-zinc-400">за час работы</div>
          </div>

          <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3 mb-8">
            <Icon name="Info" size={18} className="text-orange-500" />
            <span className="text-zinc-300">Минимальный заказ — 4 часа</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">2 000 ₽</div>
              <div className="text-zinc-400">4 часа работы</div>
              <div className="text-sm text-zinc-500 mt-1">(минимум)</div>
            </div>
            
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">3 500 ₽</div>
              <div className="text-zinc-400">7 часов работы</div>
              <div className="text-sm text-zinc-500 mt-1">(рабочий день)</div>
            </div>
            
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">4 000 ₽</div>
              <div className="text-zinc-400">8 часов работы</div>
              <div className="text-sm text-zinc-500 mt-1">(полный день)</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Check" size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Что входит в стоимость</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Выезд на объект
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Профессиональный инструмент
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Опыт и качество работы
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Консультация по материалам
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="ShoppingCart" size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Материалы</h3>
                <p className="text-zinc-400 mb-3">Оплачиваются отдельно по факту использования</p>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Расходники и крепёж
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Строительные материалы
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Поможем с выбором и закупкой
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}