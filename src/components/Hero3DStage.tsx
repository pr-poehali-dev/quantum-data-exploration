import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { DashboardMockup } from "./DashboardMockup"
import { Navbar } from "./Navbar"

import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"
import { Footer } from "./Footer"
import { OrderForm } from "./OrderForm"
import { PricingSection } from "./PricingSection"

import { AdvantagesSection } from "./AdvantagesSection"
import { WhyUsSection } from "./WhyUsSection"
import { TestimonialsSection } from "./TestimonialsSection"
import { PromoSection } from "./PromoSection"
import { CookieNotice } from "./CookieNotice"
import { JoinTeamSection } from "./JoinTeamSection"

export function Hero3DStage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [phone, setPhone] = useState("")

  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Main content */}
        <div className="relative z-10 flex flex-col">
          {/* Hero */}
          <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
            >
              {/* Фото — поверх блока справа, выходит за верхний край */}
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f715742e-1e4f-4258-9bc4-f0e25e86dfd5.png"
                alt="Разнорабочий"
                className="hidden md:block absolute pointer-events-none"
                style={{ right: 0, top: "-10%", height: "120%", width: "auto", zIndex: 5 }}
              />

              <div className="grid md:grid-cols-[1fr_420px]">
                {/* Левая колонка */}
                <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                    Разнорабочие<br />в Усть-Куте
                  </h1>

                  {/* Список с оранжевыми стрелками */}
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

                  {/* Форма */}
                  <p className="text-white font-semibold text-base mb-3">
                    Оставьте заявку на бесплатную консультацию<br />или позвоните нам
                  </p>
                  <div className="flex gap-0 mb-2 rounded-lg overflow-hidden border border-zinc-700 max-w-md">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7(900) 000-00-00"
                      className="flex-1 px-4 py-3 text-white text-base outline-none bg-zinc-800 placeholder-zinc-500"
                    />
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-5 py-3 text-sm whitespace-nowrap"
                    >
                      Оставить заявку
                    </button>
                  </div>
                  <p className="text-zinc-500 text-xs mb-6">
                    Нажимая на кнопку, вы даёте согласие на обработку персональных данных
                  </p>

                  {/* Мессенджеры */}
                  <p className="text-zinc-400 text-sm mb-3">
                    Напишите нам в мессенджер для бесплатной консультации:
                  </p>
                  <div className="grid grid-cols-2 gap-3 max-w-md">
                    <a
                      href="https://t.me/masteroff_uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-sky-500 transition-colors bg-zinc-800/60"
                    >
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
                    <a
                      href="https://wa.me/79086461687"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-green-500 transition-colors bg-zinc-800/60"
                    >
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
                    <a
                      href="tel:+79086461687"
                      className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60"
                    >
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Позвонить</div>
                        <div className="text-xs text-zinc-400">+7 (908) 646-16-87</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Правая колонка — пустая зона для фото */}
                <div className="hidden md:block" />

              </div>
            </motion.div>
          </div>

          <div id="services">
            <FeatureCardsSection />
          </div>
          <PromoSection />
          <AdvantagesSection />
          <div id="pricing">
            <PricingSection />
          </div>
          <WhyUsSection />
          <TestimonialsSection />
          <JoinTeamSection />
          <div id="contacts">
            <CTASection />
          </div>
          <Footer />
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <CookieNotice />
    </>
  )
}