import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const pricingData = [
  {
    service: "Ремонт и отделка",
    items: [
      { name: "Поклейка обоев", price: "от 250 ₽/м²" },
      { name: "Покраска стен", price: "от 300 ₽/м²" },
      { name: "Укладка ламината", price: "от 350 ₽/м²" },
      { name: "Установка плинтуса", price: "от 150 ₽/м.п." },
    ],
  },
  {
    service: "Электрика",
    items: [
      { name: "Установка розетки/выключателя", price: "от 500 ₽" },
      { name: "Замена автомата в щитке", price: "от 800 ₽" },
      { name: "Монтаж люстры", price: "от 700 ₽" },
      { name: "Прокладка кабеля", price: "от 200 ₽/м.п." },
    ],
  },
  {
    service: "Сантехника",
    items: [
      { name: "Установка смесителя", price: "от 1200 ₽" },
      { name: "Замена сифона", price: "от 600 ₽" },
      { name: "Установка унитаза", price: "от 2000 ₽" },
      { name: "Замена труб", price: "от 500 ₽/м.п." },
    ],
  },
  {
    service: "Сборка мебели",
    items: [
      { name: "Сборка шкафа", price: "от 1500 ₽" },
      { name: "Сборка кухни", price: "от 3000 ₽" },
      { name: "Сборка стола/стула", price: "от 500 ₽" },
      { name: "Навеска полок", price: "от 300 ₽/шт" },
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-4">
            Прозрачные цены
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Честная оплата за работу. Точную стоимость рассчитаем после осмотра объекта.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Icon name="Wrench" size={20} className="text-zinc-400" />
                </div>
                <h3 className="text-xl font-medium text-white">{category.service}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-zinc-400">{item.name}</span>
                    <span className="text-white font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-zinc-500 text-sm">
            * Цены указаны ориентировочно. Итоговая стоимость зависит от объёма и сложности работ.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
