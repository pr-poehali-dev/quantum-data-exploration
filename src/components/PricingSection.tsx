import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const prices = [
  { amount: "2 000 ₽", hours: "4 часа работы", note: "минимум" },
  { amount: "3 500 ₽", hours: "7 часов работы", note: "рабочий день" },
  { amount: "4 000 ₽", hours: "8 часов работы", note: "полный день" },
]

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#0d0d10" }} id="pricing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Простая и понятная{" "}
            <span className="inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>стоимость</span>
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-xl mx-auto">
            Оплата почасовая — вы платите только за реальное время работы
          </p>
        </motion.div>

        {/* Главная цена */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl p-10 text-center mb-4"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
            <Icon name="Clock" size={30} style={{ color: "#F5C518" }} />
          </div>
          <div className="text-6xl font-extrabold text-white mb-2">500 ₽</div>
          <div className="text-xl text-zinc-400 mb-6">за час работы</div>

          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border border-zinc-700" style={{ backgroundColor: "#111113" }}>
            <Icon name="Info" size={16} style={{ color: "#F5C518" }} />
            <span className="text-zinc-300 text-sm">Минимальный заказ — 4 часа</span>
          </div>

          {/* Тарифы */}
          <div className="flex flex-col md:flex-row" style={{ borderRadius: "16px", overflow: "hidden" }}>
            {prices.map((p, i) => (
              <motion.div
                key={p.hours}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -5, scale: 1.03, zIndex: 10 }}
                className="flex-1 flex flex-col items-center justify-center p-7 cursor-pointer"
                style={{
                  backgroundColor: "#111113",
                  borderRight: i < prices.length - 1 ? "1px solid #2a2a2a" : "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,197,24,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="text-3xl font-extrabold mb-1" style={{ color: "#F5C518" }}>{p.amount}</div>
                <div className="text-zinc-300 text-sm mb-1">{p.hours}</div>
                <div className="text-zinc-600 text-xs">({p.note})</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Что входит */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#1a1a1a" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                <Icon name="Check" size={20} style={{ color: "#F5C518" }} />
              </div>
              <h3 className="font-bold text-white">Что входит в стоимость</h3>
            </div>
            <ul className="space-y-3">
              {["Выезд на объект", "Профессиональный инструмент", "Опыт и качество работы", "Консультация по материалам"].map(item => (
                <li key={item} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F5C518" }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-7" style={{ backgroundColor: "#1a1a1a" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                <Icon name="ShoppingCart" size={20} style={{ color: "#F5C518" }} />
              </div>
              <h3 className="font-bold text-white">Материалы</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">Оплачиваются отдельно по факту использования</p>
            <ul className="space-y-3">
              {["Расходники и крепёж", "Строительные материалы", "Поможем с выбором и закупкой"].map(item => (
                <li key={item} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F5C518" }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
