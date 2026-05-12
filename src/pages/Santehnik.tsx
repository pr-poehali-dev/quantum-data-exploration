import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import { AdvantagesSection } from "@/components/AdvantagesSection"
import { WhyUsSection } from "@/components/WhyUsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import Icon from "@/components/ui/icon"
import { useState } from "react"
import { FloatingCallButton } from "@/components/FloatingCallButton"

export default function Santehnik() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Сантехник в Усть-Куте | МАСТЕРОФФ — вызов сантехника на дом</title>
        <meta
          name="description"
          content="Сантехник в Усть-Куте. Ремонт и замена труб, установка смесителей, унитазов, ванн, устранение протечек. Выезд в день обращения. Звоните: +7 (950) 099-09-31"
        />
        <meta
          name="keywords"
          content="сантехник усть-кут, вызов сантехника усть-кут, ремонт труб усть-кут, замена смесителя усть-кут, устранение протечки усть-кут, установка унитаза усть-кут"
        />
        <meta property="og:title" content="Сантехник в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Сантехник в Усть-Куте — ремонт труб, замена смесителей, устранение протечек. Выезд в день обращения." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://servismasteroff.ru/santehnik" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Сантехник в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "34", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Ирина М." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Вызвала сантехника — прорвало трубу под раковиной. Приехал через час, всё починил аккуратно." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Сергей К." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Заменили смеситель и унитаз. Работа выполнена качественно, цена адекватная." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Людмила Н." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Установили стиральную машину и подключили к водопроводу. Всё работает отлично, рекомендую!" }
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
            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Сантехник<br />в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Устраним протечку и прорыв труб",
                    "Заменим смесители, краны, унитазы, ванны",
                    "Подключим стиральную и посудомоечную машину",
                    "Монтаж и замена водопровода и канализации",
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
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
              <p className="text-zinc-400 text-sm leading-relaxed">Помогаем жителям Усть-Кута с любыми сантехническими задачами. Устраним аварию, установим новое оборудование или проведём плановое обслуживание.</p>
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
              <p className="text-zinc-400 text-sm leading-relaxed">Заключаем договор с организациями и ИП. Предоставляем закрывающие документы. Обслуживаем офисы, магазины, склады и производственные объекты.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Официальный договор", "Полный пакет документов", "Работа с НДС", "Обслуживание коммерческих объектов"].map(item => (
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
                { icon: "Droplets", title: "Устранение протечек", desc: "Быстрый выезд при аварии, устранение прорыва труб и соединений" },
                { icon: "Wrench", title: "Замена смесителей", desc: "Установка и замена смесителей на кухне, в ванной и душе" },
                { icon: "CircleDot", title: "Унитазы и ванны", desc: "Монтаж, замена, регулировка сливных бачков и арматуры" },
                { icon: "Pipette", title: "Трубы и водопровод", desc: "Прокладка, замена и ремонт труб водоснабжения и канализации" },
                { icon: "WashingMachine", title: "Подключение техники", desc: "Стиральные и посудомоечные машины, бойлеры, водонагреватели" },
                { icon: "Gauge", title: "Счётчики воды", desc: "Установка и замена счётчиков горячей и холодной воды" },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Icon name={item.icon} size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-zinc-500 text-sm">{item.desc}</div>
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