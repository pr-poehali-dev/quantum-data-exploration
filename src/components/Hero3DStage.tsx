import { useState, useEffect } from "react"
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
  const [yOffset, setYOffset] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.0,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 grid md:grid-cols-[1fr_380px] min-h-[480px]">
                {/* Левая колонка */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-5 w-fit">
                    <Icon name="MapPin" size={12} />
                    Усть-Кут — выезд в день обращения
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                    Разнорабочие<br />в Усть-Куте
                  </h1>

                  {/* Список */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Ремонт и отделка квартир и офисов",
                      "Сборка и разборка мебели любой сложности",
                      "Мелкий ремонт: электрика, сантехника, двери",
                      "Вынесем мусор и строительные отходы",
                      "Поднимем на этаж стройматериалы и оборудование",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                          <Icon name="ChevronRight" size={12} className="text-orange-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-zinc-400 text-sm mb-3">
                    Оставьте заявку или позвоните — перезвоним за 2 минуты
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <a
                      href="tel:+79086461687"
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
                    >
                      <Icon name="Phone" size={18} />
                      +7 (908) 646-16-87
                    </a>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
                    >
                      Оставить заявку
                    </button>
                  </div>

                  {/* Мессенджеры */}
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/79086461687"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2 text-zinc-300 text-xs hover:border-zinc-500 transition-colors"
                    >
                      <Icon name="MessageCircle" size={16} className="text-green-400" />
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/masteroff_uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2 text-zinc-300 text-xs hover:border-zinc-500 transition-colors"
                    >
                      <Icon name="Send" size={16} className="text-sky-400" />
                      Telegram
                    </a>
                  </div>
                </div>

                {/* Правая колонка — фото */}
                <div className="relative hidden md:flex items-end justify-center overflow-hidden">
                  {/* Оранжевый круг-фон */}
                  <div
                    style={{
                      position: "absolute",
                      width: "320px",
                      height: "320px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0.05) 70%)",
                      bottom: "-40px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  {/* Плашка с ценой */}
                  <div
                    className="absolute bottom-8 left-4 bg-orange-500 text-white font-bold text-lg px-5 py-3 rounded-xl z-20 shadow-lg"
                    style={{ boxShadow: "0 4px 24px rgba(249,115,22,0.4)" }}
                  >
                    от 1 000 руб./час
                  </div>
                  {/* Фото */}
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/7fb41e15-0c91-4c78-a878-7275718c4bf2.jpg"
                    alt="Разнорабочий в Усть-Куте"
                    className="relative z-10 h-full max-h-[480px] w-full object-cover object-top"
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