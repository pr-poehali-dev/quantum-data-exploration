import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#09090B" }} id="contacts">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
              <span className="text-zinc-400 text-sm">Мастера онлайн — выезд сегодня</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Нужна помощь по дому?{" "}
              <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>Звоните!</span>
            </h2>
            <p className="text-zinc-400 text-sm">Ответим за 2 минуты. Работаем 8:00 — 22:00 без выходных.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
            <a
              href="tel:+79086461687"
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#F5C518" }}
            >
              <Icon name="Phone" size={18} className="text-black" />
              +7 (908) 646-16-87
            </a>
            <a
              href="https://t.me/masteroff_uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white border border-zinc-700 hover:border-yellow-500/50 transition-colors"
              style={{ backgroundColor: "#111113" }}
            >
              <Icon name="Send" size={18} style={{ color: "#F5C518" }} />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
