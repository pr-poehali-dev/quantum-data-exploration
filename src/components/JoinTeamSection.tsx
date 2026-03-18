import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function JoinTeamSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
                  <Icon name="Users" size={20} style={{ color: "#F5C518" }} />
                </div>
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#F5C518" }}>
                  Вакансия
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Хочешь к нам{" "}
                <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>в команду?</span>
              </h2>
              <p className="text-zinc-400 text-base max-w-lg">
                Мы ищем ответственных мастеров на руки. Стабильная загрузка, достойная оплата, дружный коллектив.
              </p>
            </div>

            <a
              href="https://t.me/masteroff_uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-black text-base hover:opacity-90 transition-opacity shrink-0"
              style={{ backgroundColor: "#F5C518" }}
            >
              <Icon name="Send" size={18} className="text-black" />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinTeamSection
