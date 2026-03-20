import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import { AdvantagesSection } from "@/components/AdvantagesSection"
import { PricingSection } from "@/components/PricingSection"
import { WhyUsSection } from "@/components/WhyUsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import { FeatureCardsSection } from "@/components/FeatureCardsSection"
import { JoinTeamSection } from "@/components/JoinTeamSection"
import Icon from "@/components/ui/icon"
import { useState } from "react"

function FloatingCallButton() {
  return (
    <a
      href="tel:+79500990931"
      className="fixed bottom-8 right-6 z-50 flex items-center justify-center"
      aria-label="Позвонить"
    >
      <span className="absolute inline-flex rounded-full w-16 h-16 bg-orange-500/30 animate-ping" style={{ animationDuration: "1.4s" }} />
      <span className="absolute inline-flex rounded-full w-20 h-20 bg-orange-500/15 animate-ping" style={{ animationDuration: "1.4s", animationDelay: "0.3s" }} />
      <span className="absolute inline-flex rounded-full w-24 h-24 bg-orange-500/08 animate-ping" style={{ animationDuration: "1.4s", animationDelay: "0.6s" }} />
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40"
      >
        <Icon name="Phone" size={24} className="text-white" />
      </motion.span>
    </a>
  )
}

export default function Raznorabochie() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Разнорабочие в Усть-Куте | МАСТЕРОФФ</title>
        <meta
          name="description"
          content="Разнорабочие в Усть-Куте. Вывоз мусора, сборка мебели, уборка, помощь при переезде. Выезд в день обращения. Звоните: +7 (950) 099-09-31"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
          >
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f715742e-1e4f-4258-9bc4-f0e25e86dfd5.png"
              alt="Разнорабочий"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "20px", bottom: 0, top: "auto", height: "100%", width: "auto", zIndex: 5 }}
            />

            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Разнорабочие<br />в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Вывезем мусор и строительные отходы",
                    "Приведём помещение в порядок",
                    "Соберём и разберём мебель",
                    "Упакуем вещи при переезде",
                    "Поднимем на этаж стройматериалы",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300 text-base">
                      <span className="text-orange-500 text-xl font-bold leading-none">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-zinc-400 text-sm mb-3">
                  Напишите нам в мессенджер для бесплатной консультации:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-sky-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Telegram</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-green-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">WhatsApp</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                  <a href="tel:+79500990931"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Позвонить</div>
                      <div className="text-xs text-zinc-400">+7 (950) 099-09-31</div>
                    </div>
                  </a>
                  <a href="https://max.ru/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #4F8EF7 0%, #9B59F5 100%)" }}>
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">MAX</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </motion.div>
        </div>

        {/* Физические и юридические лица */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-amber-400" />
                </div>
                <h2 className="text-white text-xl font-bold">Физическим лицам</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">Помогаем жителям Усть-Кута с бытовыми задачами: вывоз мусора, уборка, переезд, сборка мебели и любая другая помощь по дому. Приедем в день обращения, работаем без выходных.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Разовые и регулярные заказы", "Оплата наличными или картой", "Выезд от 1 часа", "Без предоплаты"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon name="Check" size={15} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-amber-400" />
                </div>
                <h2 className="text-white text-xl font-bold">Юридическим лицам</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">Заключаем договор с организациями и ИП. Предоставляем закрывающие документы: акты, счета-фактуры, УПД. Работаем с НДС и без. Подходим для строительных компаний, складов, магазинов.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Официальный договор", "Полный пакет документов", "Работа с НДС", "Постоянные бригады"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon name="Check" size={15} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FeatureCardsSection />
        <AdvantagesSection />
        <PricingSection />
        <WhyUsSection />
        <TestimonialsSection />
        <JoinTeamSection />
        <CTASection />
        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <FloatingCallButton />
    </>
  )
}