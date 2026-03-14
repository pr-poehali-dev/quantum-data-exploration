import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "PackageOpen",
    title: "Погрузка и разгрузка",
    desc: "Мебель, бытовая техника, стройматериалы, коробки. Работаем аккуратно и быстро.",
  },
  {
    icon: "Truck",
    title: "Помощь при переезде",
    desc: "Вынесем, загрузим, разгрузим и занесём на этаж. Работаем без лифта тоже.",
  },
  {
    icon: "Trash2",
    title: "Вынос мусора и хлама",
    desc: "Старая мебель, строительный мусор, накопившийся хлам — вывезем всё.",
  },
  {
    icon: "Warehouse",
    title: "Разгрузка фур и газелей",
    desc: "Быстрая разгрузка транспорта на складе, в магазине или на стройке.",
  },
  {
    icon: "ArrowUpFromLine",
    title: "Подъём на этаж",
    desc: "Занесём стройматериалы, мебель или оборудование на любой этаж.",
  },
  {
    icon: "ShieldCheck",
    title: "Бережная работа",
    desc: "Хрупкие вещи, антиквариат, зеркала — работаем осторожно и ответственно.",
  },
]

const steps = [
  { title: "Звоните или пишете", desc: "Объясняете задачу — что и куда нужно перенести, адрес и время." },
  { title: "Договариваемся", desc: "Подтверждаем бригаду и стоимость. Без скрытых доплат." },
  { title: "Приезжаем и работаем", desc: "Грузчики прибывают вовремя и выполняют всю физическую работу." },
  { title: "Оплата по факту", desc: "Расчёт после выполнения. Наличные или перевод на карту." },
]

export default function Gruzchiki() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Услуги грузчиков в Усть-Куте | МАСТЕРОФФ — от 500 ₽/час</title>
        <meta
          name="description"
          content="Профессиональные грузчики в Усть-Куте. Погрузка, разгрузка, переезд, подъём на этаж. Выезд в день обращения. От 500 руб/час. Звоните: +7 (908) 646-16-87"
        />
        <meta
          name="keywords"
          content="грузчики усть-кут, услуги грузчиков усть-кут, переезд усть-кут, погрузка разгрузка усть-кут, подъём на этаж усть-кут, вынос мусора усть-кут"
        />
        <meta property="og:title" content="Услуги грузчиков в Усть-Куте | МАСТЕРОФФ" />
        <meta
          property="og:description"
          content="Грузчики в Усть-Куте — погрузка, переезд, разгрузка фур. Выезд в день обращения. От 500 ₽/час."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/gruzchiki" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Услуги грузчиков в Усть-Куте",
            "description": "Профессиональные грузчики в Усть-Куте. Погрузка, разгрузка, переезд, подъём на этаж.",
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
        <section className="relative overflow-hidden pt-28 pb-16 px-6">
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "900px",
              height: "600px",
              background: "radial-gradient(ellipse at center, rgba(249,115,22,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-5">
                <Icon name="MapPin" size={12} />
                Усть-Кут — выезд в день обращения
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                Услуги грузчиков<br className="hidden md:block" /> в Усть-Куте
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-8">
                Надёжные грузчики для переезда, погрузки и разгрузки. Работаем быстро, аккуратно, без опозданий — с вещами обращаемся бережно.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+79086461687"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
                >
                  <Icon name="Phone" size={18} />
                  +7 (908) 646-16-87
                </a>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
                >
                  Оставить заявку
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Badges */}
        <section className="px-6 pb-14">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Clock", label: "Выезд за 1 час" },
              { icon: "Banknote", label: "от 500 ₽/час" },
              { icon: "Users", label: "1–4 грузчика" },
              { icon: "CalendarCheck", label: "7 дней в неделю" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center gap-2"
              >
                <Icon name={item.icon} size={22} className="text-orange-400" />
                <span className="text-white text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Услуги */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">Что мы делаем</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex gap-4"
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
                Нужны грузчики прямо сейчас?
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
