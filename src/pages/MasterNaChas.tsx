import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Wrench",
    title: "Мелкий ремонт",
    desc: "Повесим полки, картины, зеркала, карнизы. Закрутим, прикрутим, починим.",
  },
  {
    icon: "Droplets",
    title: "Сантехника",
    desc: "Заменим смеситель, устраним течь, подключим стиральную машину или посудомойку.",
  },
  {
    icon: "Zap",
    title: "Электрика",
    desc: "Заменим розетку, выключатель, люстру, установим светильники и обогреватели.",
  },
  {
    icon: "DoorOpen",
    title: "Двери и замки",
    desc: "Отрегулируем, установим или заменим дверь, врежем замок, поставим петли.",
  },
  {
    icon: "Hammer",
    title: "Сборка мебели",
    desc: "Соберём любую мебель по инструкции — кровать, шкаф, кухню, стеллаж.",
  },
  {
    icon: "PaintRoller",
    title: "Мелкий ремонт квартиры",
    desc: "Поклейка обоев, покраска, шпаклёвка, укладка плитки и плинтусов.",
  },
]

const steps = [
  { title: "Звоните или пишете", desc: "Объясняете задачу — что нужно сделать, адрес и удобное время." },
  { title: "Договариваемся", desc: "Подтверждаем мастера и стоимость работ. Без скрытых доплат." },
  { title: "Мастер приезжает", desc: "Приедем в назначенное время с инструментом и всё сделаем." },
  { title: "Оплата по факту", desc: "Расчёт после выполнения. Наличные или перевод на карту." },
]

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
        <meta
          property="og:description"
          content="Мастер на час в Усть-Куте — мелкий ремонт, сантехника, электрика. Выезд в день обращения. От 500 ₽/час."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/master-na-chas" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Мастер на час в Усть-Куте",
            "description": "Мастер на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "МАСТЕРОФФ",
              "telephone": "+79086461687",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Усть-Кут",
                "addressRegion": "Иркутская область",
                "addressCountry": "RU"
              }
            },
            "areaServed": { "@type": "City", "name": "Усть-Кут" },
            "offers": { "@type": "Offer", "priceCurrency": "RUB", "price": "500", "unitText": "час" }
          }
        `}</script>
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
            {/* Фото — поверх блока справа */}
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d10a119d-8182-45c5-84eb-26f31e594144.jpg"
              alt="Мастер на час"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "20px", bottom: 0, top: 0, height: "100%", width: "auto", zIndex: 5, objectFit: "cover" }}
            />

            <div className="grid md:grid-cols-[1fr_420px]">
              {/* Левая колонка */}
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Мастер на час<br />в Усть-Куте
                </h1>

                {/* Список с оранжевыми стрелками */}
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

                {/* Мессенджеры */}
                <p className="text-zinc-400 text-sm mb-3">
                  Напишите нам в мессенджер для бесплатной консультации:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
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

        {/* Услуги */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-10 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-white mb-8">Что мы делаем</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <Icon name={s.icon} size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{s.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Как работаем */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10">
              <h2 className="text-2xl font-semibold text-white mb-8">Как это работает</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {steps.map((item, i) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">{item.title}</div>
                      <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Нужен мастер прямо сейчас?
              </h2>
              <p className="text-zinc-400 mb-8 text-base">
                Звоните — приедем в течение часа. Работаем каждый день.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+79086461687"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  <Icon name="Phone" size={20} />
                  Позвонить
                </a>
                <a
                  href="https://wa.me/79086461687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
