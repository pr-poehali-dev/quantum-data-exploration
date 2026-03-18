import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import { AdvantagesSection } from "@/components/AdvantagesSection"
import { PricingSection } from "@/components/PricingSection"
import { WhyUsSection } from "@/components/WhyUsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import { PromoSection } from "@/components/PromoSection"
import Icon from "@/components/ui/icon"

export default function MasterNaChas() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Мастер на час в Усть-Куте | МАСТЕРОФФ — от 500 ₽/час</title>
        <meta
          name="description"
          content="Мастер на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели, двери и замки. Выезд в день обращения. От 500 руб/час. Звоните: +7 (908) 646-16-87"
        />
        <meta
          name="keywords"
          content="мастер на час усть-кут, мелкий ремонт усть-кут, сантехник усть-кут, электрик усть-кут, сборка мебели усть-кут, муж на час усть-кут"
        />
        <meta property="og:title" content="Мастер на час в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Мастер на час в Усть-Куте — мелкий ремонт, сантехника, электрика. Выезд в день обращения. От 500 ₽/час." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/master-na-chas" />
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
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/72c5344d-457d-4867-91bc-87a986493536.png"
              alt="Мастер на час"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "20px", bottom: 0, top: 0, height: "100%", width: "auto", zIndex: 5 }}
            />

            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Мастер на час<br />в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Повесим, прикрутим, починим — любые мелкие задачи",
                    "Сантехника, электрика, двери и замки",
                    "Соберём мебель по инструкции",
                    "Мелкий ремонт квартиры под ключ",
                    "Приедем в день обращения с инструментом",
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
                  <a href="https://wa.me/79086461687" target="_blank" rel="noopener noreferrer"
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
                  <a href="tel:+79086461687"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60">
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
              <div className="hidden md:block" />
            </div>
          </motion.div>
        </div>

        <PromoSection />
        <AdvantagesSection />
        <PricingSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}