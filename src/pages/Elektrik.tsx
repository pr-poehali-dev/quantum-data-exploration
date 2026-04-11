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
import Icon from "@/components/ui/icon"
import { useState } from "react"
import { FloatingCallButton } from "@/components/FloatingCallButton"

export default function Elektrik() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Услуги электрика в Усть-Куте | МАСТЕРОФФ — вызов электрика на дом</title>
        <meta
          name="description"
          content="Профессиональный электрик в Усть-Куте. Монтаж проводки, замена розеток и выключателей, подключение бытовой техники, установка щитков. Выезд в день обращения. Звоните: +7 (950) 099-09-31"
        />
        <meta
          name="keywords"
          content="электрик усть-кут, вызов электрика усть-кут, монтаж проводки усть-кут, замена розеток усть-кут, электромонтаж усть-кут, подключение электрики усть-кут"
        />
        <meta property="og:title" content="Услуги электрика в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Электрик в Усть-Куте — монтаж проводки, розетки, щитки, подключение техники. Выезд в день обращения." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://servismasteroff.ru/elektrik" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Услуги электрика в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "24", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Игорь С." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызывал электрика для замены проводки в квартире. Приехали быстро, сделали аккуратно, убрали за собой." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Наталья К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Помогли подключить варочную панель и духовку. Всё работает отлично, цена честная." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Виктор М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Установили новый электрощиток в частном доме. Работа выполнена профессионально, рекомендую!" }
          ]
        })}</script>
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
              src="https://cdn.poehali.dev/files/d2969d14-44e2-4a27-90dc-2ca7f3180bd2.png"
              alt="Электрик"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "-60px", bottom: 0, top: 0, height: "100%", width: "auto", zIndex: 5 }}
            />
            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Электрик<br />в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Монтаж и замена электропроводки",
                    "Установка розеток, выключателей, люстр",
                    "Подключение бытовой и кухонной техники",
                    "Сборка и замена электрощитков",
                    "Устранение неисправностей и коротких замыканий",
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

        {/* Плашка минимальная стоимость */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-8">
          <div className="w-full max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl px-6 py-4">
              <Icon name="Zap" size={20} className="text-yellow-400 shrink-0" />
              <span className="text-zinc-300 text-sm">Минимальная стоимость вызова электрика —</span>
              <span className="text-yellow-400 font-black text-lg">от 2 500 ₽</span>
            </div>
          </div>
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
              <p className="text-zinc-400 text-sm leading-relaxed">Помогаем жителям Усть-Кута с любыми электрическими работами дома или на даче. Приедем в удобное время, всё сделаем аккуратно и с гарантией.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Квартиры, дома, дачи", "Оплата наличными или картой", "Выезд в день обращения", "Без предоплаты"].map(item => (
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
              <p className="text-zinc-400 text-sm leading-relaxed">Заключаем договор с организациями и ИП. Выполняем электромонтаж на объектах коммерческой недвижимости, складах и производственных помещениях.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Официальный договор", "Полный пакет документов", "Работа с НДС", "Офисы, магазины, склады"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon name="Check" size={15} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Виды работ */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl">
            <h2 className="text-white text-2xl font-bold mb-6">Что мы делаем</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: "Zap", title: "Монтаж проводки", desc: "Прокладка кабеля в квартирах, домах и офисах по ПУЭ" },
                { icon: "PlugZap", title: "Розетки и выключатели", desc: "Замена, перенос, установка новых точек" },
                { icon: "Lightbulb", title: "Освещение", desc: "Люстры, споты, светодиодные ленты, умный свет" },
                { icon: "ShieldCheck", title: "Электрощитки", desc: "Сборка, замена, подключение автоматов и УЗО" },
                { icon: "WashingMachine", title: "Подключение техники", desc: "Варочные панели, духовки, стиральные машины" },
                { icon: "AlertTriangle", title: "Устранение неисправностей", desc: "Поиск и ремонт короткого замыкания, нет тока" },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Icon name={item.icon} size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-zinc-500 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AdvantagesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <FloatingCallButton />
    </>
  )
}