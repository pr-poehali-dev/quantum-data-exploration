import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/d83922ab-5446-437f-a07d-c41b636b371c.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "300+", label: "фундаментов залито" },
  { num: "5", label: "лет гарантии" },
  { num: "0", label: "скрытых платежей" },
]

const services = [
  {
    icon: "Layers",
    title: "Ленточный фундамент",
    desc: "Классика для домов из бруса, бревна и каркаса. Подходит для большинства грунтов.",
    price: "от 4 500 ₽/м.п.",
  },
  {
    icon: "Anchor",
    title: "Свайно-винтовой фундамент",
    desc: "Быстрый монтаж, подходит для сложных и заболоченных участков. Строительство сразу после установки.",
    price: "от 3 200 ₽/шт.",
  },
  {
    icon: "Square",
    title: "Монолитная плита",
    desc: "Максимально надёжное основание для тяжёлых домов — кирпичных и газобетонных.",
    price: "от 7 500 ₽/м²",
  },
  {
    icon: "Blocks",
    title: "Столбчатый фундамент",
    desc: "Бюджетное решение для лёгких построек — бань, хозблоков, беседок.",
    price: "от 2 000 ₽/шт.",
  },
  {
    icon: "Shovel",
    title: "Земляные работы",
    desc: "Разработка котлована, вывоз грунта, подготовка площадки под фундамент.",
    price: "от 350 ₽/м³",
  },
  {
    icon: "Droplets",
    title: "Гидроизоляция и утепление",
    desc: "Защита фундамента от влаги и промерзания — увеличиваем срок службы основания.",
    price: "от 800 ₽/м²",
  },
]

const reasons = [
  {
    num: "01",
    icon: "ClipboardList",
    title: "Прозрачная смета",
    desc: "Фиксируем стоимость до начала работ. Цена не меняется в процессе.",
  },
  {
    num: "02",
    icon: "TestTube",
    title: "Анализ грунта",
    desc: "Определяем тип грунта и уровень грунтовых вод перед выбором фундамента.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 5 лет",
    desc: "Даём официальную гарантию на все виды фундаментных работ.",
  },
  {
    num: "04",
    icon: "Calendar",
    title: "Соблюдение сроков",
    desc: "Сроки фиксируются в договоре. Штраф за каждый день просрочки.",
  },
  {
    num: "05",
    icon: "ShieldCheck",
    title: "Договор и чеки",
    desc: "Официальное оформление, все расходы на материалы подтверждены чеками.",
  },
  {
    num: "06",
    icon: "Truck",
    title: "Доставка материалов",
    desc: "Закупаем и доставляем бетон, арматуру, сваи сами — по оптовым ценам.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Выезд и анализ грунта",
    desc: "Выезжаем на участок, определяем тип грунта и уровень грунтовых вод, подбираем оптимальный тип фундамента.",
    dark: false,
  },
  {
    num: "2",
    title: "Проект и смета",
    desc: "Рассчитываем нагрузку, готовим смету с фиксированной стоимостью материалов и работ.",
    dark: true,
  },
  {
    num: "3",
    title: "Земляные работы",
    desc: "Разрабатываем котлован или траншею, подготавливаем песчаную подушку и опалубку.",
    dark: false,
  },
  {
    num: "4",
    title: "Заливка и армирование",
    desc: "Вяжем арматурный каркас, заливаем бетон нужной марки, соблюдаем технологию застывания.",
    dark: true,
  },
  {
    num: "5",
    title: "Гидроизоляция и сдача",
    desc: "Выполняем гидроизоляцию и утепление, принимаете работу и подписываем акт.",
    dark: false,
  },
]

const faq = [
  {
    q: "Как выбрать тип фундамента?",
    a: "Тип фундамента зависит от грунта, уровня грунтовых вод и веса будущего дома. Ленточный подходит для каркасных и брусовых домов, монолитная плита — для тяжёлых кирпичных домов, свайно-винтовой — для сложных и заболоченных участков. Определяем оптимальный вариант после выезда на участок.",
  },
  {
    q: "Сколько стоит залить фундамент под дом в Усть-Куте?",
    a: "Ленточный фундамент — от 4 500 ₽/м.п., свайно-винтовой — от 3 200 ₽/сваю, монолитная плита — от 7 500 ₽/м². Точную стоимость рассчитываем после замера участка и анализа грунта.",
  },
  {
    q: "Сколько времени занимает заливка фундамента?",
    a: "Ленточный фундамент — 2–3 недели с учётом застывания бетона. Свайно-винтовой монтируется за 1–3 дня. Монолитная плита — от 3 до 4 недель.",
  },
  {
    q: "Можно ли заливать фундамент зимой?",
    a: "Свайно-винтовой фундамент можно устанавливать круглый год. Заливку бетона в сильные морозы не рекомендуем — используем присадки или переносим на тёплый сезон, обсудим при встрече.",
  },
  {
    q: "Даёте ли вы гарантию на фундамент?",
    a: "Да, предоставляем официальную гарантию 5 лет на все виды фундаментных работ. Все недочёты устраняем за свой счёт.",
  },
]

export default function Fundamenty() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Фундаменты в Усть-Куте под ключ — цены от 2 000 ₽ | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство фундаментов в Усть-Куте: ленточный, свайно-винтовой, монолитная плита, столбчатый. Анализ грунта, гарантия 5 лет. Бесплатный выезд — звоните!" />
        <meta name="keywords" content="фундамент Усть-Кут, ленточный фундамент Усть-Кут, свайно-винтовой фундамент Усть-Кут, монолитная плита Усть-Кут, залить фундамент Усть-Кут, строительство фундамента Усть-Кут" />
        <meta property="og:title" content="Фундаменты в Усть-Куте под ключ | МАСТЕРОФФ" />
        <meta property="og:description" content="Ленточный, свайно-винтовой, монолитный фундамент в Усть-Куте. Анализ грунта, гарантия 5 лет, фиксированная смета." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/fundamenty" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Фундаменты в Усть-Куте",
          "description": "Строительство фундаментов в Усть-Куте: ленточный, свайно-винтовой, монолитная плита, столбчатый фундамент.",
          "url": "https://masteroff38.ru/fundamenty",
          "image": HERO_IMG,
          "telephone": "+7-950-099-09-31",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Усть-Кут",
            "addressRegion": "Иркутская область",
            "addressCountry": "RU"
          },
          "areaServed": {
            "@type": "City",
            "name": "Усть-Кут"
          },
          "priceRange": "от 2 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "48",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по строительству фундаментов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Ленточный фундамент" },
                "price": "4500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "4500", "priceCurrency": "RUB", "unitText": "м.п." }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Свайно-винтовой фундамент" },
                "price": "3200",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "3200", "priceCurrency": "RUB", "unitText": "шт." }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Монолитная плита" },
                "price": "7500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7500", "priceCurrency": "RUB", "unitText": "м²" }
              }
            ]
          }
        })}</script>
      </Helmet>
      <Navbar />
      <FloatingCallButton />

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "80svh" }}>
        <img
          src={HERO_IMG}
          alt="Фундаменты в Усть-Куте"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#09090B]" />
        <div className="relative z-10 flex flex-col justify-center h-full px-4 pt-24 pb-20 max-w-5xl mx-auto" style={{ minHeight: "80svh" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded mb-5 tracking-widest uppercase">
              Усть-Кут
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Фундаменты<br />
              <span className="text-yellow-400">под ключ</span> в Усть-Куте
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Ленточный, свайно-винтовой, монолитная плита. Анализируем грунт и подбираем надёжное основание для вашего дома.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Получить смету
              </button>
              <a
                href="tel:+79500990931"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Позвонить
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-6 px-4 rounded-2xl"
              style={{ backgroundColor: "#18181B" }}
            >
              <div className="text-4xl font-black text-yellow-400 mb-1">{s.num}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Какие фундаменты мы строим</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 flex flex-col gap-3 border border-white/5 hover:border-yellow-400/30 transition-all"
                style={{ backgroundColor: "#18181B" }}
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-1">
                  <Icon name={s.icon} size={24} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-400 text-sm flex-1">{s.desc}</p>
                <div className="text-yellow-400 font-bold text-base mt-auto">{s.price}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Преимущества</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Почему выбирают нас</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 border border-white/5"
                style={{ backgroundColor: "#09090B" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 font-black text-2xl leading-none mt-1">{r.num}</span>
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-3">
                      <Icon name={r.icon} size={20} className="text-yellow-400" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{r.title}</h3>
                    <p className="text-gray-400 text-sm">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Процесс</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Как мы работаем</h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {workStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 rounded-2xl p-6 border border-white/5"
                style={{ backgroundColor: stage.dark ? "#111113" : "#18181B" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-lg">
                  {stage.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{stage.title}</h3>
                  <p className="text-gray-400 text-sm">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
          >
            <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Бесплатный выезд<br />и смета за 24 часа
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — приедем на участок, оценим грунт и пришлём смету. Без обязательств.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all"
              >
                Оставить заявку
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Частые вопросы</h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/5 overflow-hidden"
                style={{ backgroundColor: "#18181B" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-semibold text-base">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-yellow-400 flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Фундаменты" />
      <Footer />
    </div>
  )
}
