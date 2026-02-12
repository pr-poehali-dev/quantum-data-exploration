import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function PromoSection() {
  return (
    <section className="relative py-16 md:py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Accent glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300 mb-6">
              <Icon name="Sparkles" size={16} className="text-indigo-400" />
              Специальное предложение
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Скидка 15% на первый заказ
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Для новых клиентов действует приветственная скидка. Закажите любую услугу и получите выгоду!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+79086461687"
                className="px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center gap-2"
              >
                <Icon name="Phone" size={18} />
                Позвонить сейчас
              </a>
              <a
                href="https://t.me/masteroff_ustkut"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
            </div>

            <p className="text-zinc-500 text-sm mt-6">
              Акция действует до конца месяца
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}