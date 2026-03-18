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
              className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-[1fr_420px]">
                {/* Левая колонка */}
                <div className="p-8 md:p-12 flex flex-col justify-start">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-7">
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
                      <li key={item} className="flex items-center gap-3 text-zinc-800 text-base">
                        <span className="text-orange-500 text-xl font-bold leading-none">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Форма */}
                  <p className="text-zinc-800 font-semibold text-base mb-3">
                    Оставьте заявку на бесплатную консультацию<br />или позвоните нам
                  </p>
                  <div className="flex gap-0 mb-2 rounded-lg overflow-hidden border border-zinc-300 max-w-md">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7(900) 000-00-00"
                      className="flex-1 px-4 py-3 text-zinc-900 text-base outline-none bg-white placeholder-zinc-400"
                    />
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="bg-orange-400 hover:bg-orange-500 transition-colors text-white font-semibold px-5 py-3 text-sm whitespace-nowrap"
                    >
                      Оставить заявку
                    </button>
                  </div>
                  <p className="text-zinc-400 text-xs mb-6">
                    Нажимая на кнопку, вы даёте согласие на обработку персональных данных
                  </p>

                  {/* Мессенджеры */}
                  <p className="text-zinc-700 text-sm mb-3">
                    Напишите нам в мессенджер для бесплатной консультации:
                  </p>
                  <div className="grid grid-cols-2 gap-3 max-w-md">
                    <a
                      href="https://t.me/masteroff_uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-zinc-200 rounded-xl px-4 py-3 hover:border-sky-400 transition-colors bg-white"
                    >
                      <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="Send" size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-zinc-900 text-sm font-medium">Telegram</div>
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
                      className="flex items-center gap-3 border border-zinc-200 rounded-xl px-4 py-3 hover:border-green-400 transition-colors bg-white"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="MessageCircle" size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-zinc-900 text-sm font-medium">WhatsApp</div>
                        <div className="flex items-center gap-1 text-xs text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                          в сети
                        </div>
                      </div>
                    </a>
                    <a
                      href="tel:+79086461687"
                      className="flex items-center gap-3 border border-zinc-200 rounded-xl px-4 py-3 hover:border-orange-400 transition-colors bg-white"
                    >
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-zinc-900 text-sm font-medium">Позвонить</div>
                        <div className="text-xs text-zinc-400">+7 (908) 646-16-87</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Правая колонка — фото */}
                <div className="relative hidden md:flex items-end justify-center bg-zinc-50 overflow-hidden min-h-[560px]">
                  {/* Жёлтый круг */}
                  <div
                    style={{
                      position: "absolute",
                      width: "360px",
                      height: "360px",
                      borderRadius: "50%",
                      backgroundColor: "#FFD600",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  {/* Синяя плашка цены */}
                  <div
                    className="absolute bottom-8 left-0 right-0 mx-6 z-20 text-white font-extrabold text-2xl text-center py-4 rounded-2xl"
                    style={{ backgroundColor: "#1565C0" }}
                  >
                    от 1 000 руб./час
                  </div>
                  {/* Фото */}
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/7fb41e15-0c91-4c78-a878-7275718c4bf2.jpg"
                    alt="Разнорабочий в Усть-Куте"
                    className="relative z-10 w-full max-h-[520px] object-cover object-top"
                  />
                </div>
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