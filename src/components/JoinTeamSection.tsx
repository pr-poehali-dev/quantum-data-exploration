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
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/60 p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-indigo-400" />
                </div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Вакансия
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight mb-3">
                Хочешь к нам в команду?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-lg">
                Мы ищем ответственных мастеров на&nbsp;руки. Стабильная загрузка, достойная оплата, дружный коллектив.
              </p>
            </div>

            <a
              href="https://t.me/masteroff38"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-sm shrink-0"
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinTeamSection