import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl relative rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Mobile background image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:hidden absolute inset-0 -mx-6 -mt-16 -mb-16 rounded-3xl overflow-hidden"
              >
                <img 
                  src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/4b05c49e-96f3-4ed6-8ea5-b6da088e62ec.jpg"
                  alt="Команда профессиональных разнорабочих МАСТЕРОФФ"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/60 via-[#09090B]/80 to-[#09090B]"></div>
              </motion.div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Text */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-3"
                  >
                    <span className="text-xs md:text-sm text-zinc-500 tracking-wider uppercase">
                      Сервис МАСТЕРОФФ
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] text-balance"
                  >
                    Разнорабочие в Усть-Куте — быстро и качественно
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-base text-zinc-400"
                  >
                    Помощь по дому и офису: ремонт, сборка мебели, электрика, сантехника.
                    <br className="hidden md:block" />
                    Работаем по всему Усть-Куту — выезд в день обращения.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="px-5 py-2.5 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-sm w-full sm:w-auto"
                    >
                      Заказать услугу
                    </button>
                    <a
                      href="tel:+79086461687"
                      className="text-zinc-300 font-medium hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                      <span className="text-zinc-500">Звоните:</span> +7 (908) 646-16-87
                      <span aria-hidden="true">→</span>
                    </a>
                  </motion.div>
                </div>

                {/* 3D image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden md:flex flex-shrink-0 w-64 h-64 items-center justify-center"
                >
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/51167be5-fc97-4f69-8a17-9b9b4d7c7777.jpg"
                    alt="Инструменты мастера"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div id="services">
            <PromoSection />
          </div>
          <FeatureCardsSection />
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