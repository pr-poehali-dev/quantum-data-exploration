import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/2fa02e05-5b6f-4c2b-b817-076b465ada15.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "150+", label: "печей и каминов сложено" },
  { num: "5", label: "лет гарантии" },
  { num: "0", label: "скрытых платежей" },
]

const services = [
  {
    icon: "Flame",
    title: "Кирпичные печи",
    desc: "Классическая отопительно-варочная печь для дома или дачи. Долго держит тепло.",
    price: "от 60 000 ₽",
  },
  {
    icon: "Home",
    title: "Банные печи",
    desc: "Кирпичная печь-каменка для бани и сауны с баком для воды или выносной топкой.",
    price: "от 55 000 ₽",
  },
  {
    icon: "Sparkles",
    title: "Камины",
    desc: "Классические и угловые камины для гостиной — украшение и дополнительный обогрев дома.",
    price: "от 80 000 ₽",
  },
  {
    icon: "Wind",
    title: "Дымоходы",
    desc: "Проектирование и монтаж дымоходов из кирпича и сэндвич-трубы под любую печь.",
    price: "от 15 000 ₽",
  },
  {
    icon: "Wrench",
    title: "Ремонт и чистка",
    desc: "Перекладка отдельных участков, устранение трещин, прочистка дымохода от сажи.",
    price: "от 5 000 ₽",
  },
  {
    icon: "PenTool",
    title: "Проектирование",
    desc: "Подбор конструкции печи под площадь помещения и тип топлива, расчёт мощности.",
    price: "бесплатно",
  },
]

const reasons = [
  {
    num: "01",
    icon: "ClipboardList",
    title: "Прозрачная смета",
    desc: "Фиксируем стоимость материалов и работ до начала кладки. Цена не меняется.",
  },
  {
    num: "02",
    icon: "Hammer",
    title: "Печники с опытом",
    desc: "Кладём печи и камины по классическим порядовкам, проверенным годами.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 5 лет",
    desc: "Даём официальную гарантию на кладку и на работу дымохода.",
  },
  {
    num: "04",
    icon: "Calendar",
    title: "Соблюдение сроков",
    desc: "Сроки фиксируются в договоре. Печь среднего размера кладём за 5-7 дней.",
  },
  {
    num: "05",
    icon: "ShieldCheck",
    title: "Пожарная безопасность",
    desc: "Соблюдаем нормы отступки от стен и разделки перекрытий — печь безопасна для дома.",
  },
  {
    num: "06",
    icon: "Truck",
    title: "Материалы включены",
    desc: "Закупаем и доставляем кирпич, глину, фурнитуру сами — по оптовым ценам.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Выезд и замер",
    desc: "Выезжаем на объект, оцениваем помещение, обсуждаем тип печи или камина и место установки.",
    dark: false,
  },
  {
    num: "2",
    title: "Проект и смета",
    desc: "Подбираем конструкцию и порядовку, рассчитываем расход материалов, готовим смету.",
    dark: true,
  },
  {
    num: "3",
    title: "Заливка фундамента",
    desc: "При необходимости заливаем отдельный фундамент под печь — она тяжелее, чем кажется.",
    dark: false,
  },
  {
    num: "4",
    title: "Кладка печи",
    desc: "Кладём корпус по порядовке, устанавливаем дверцы, колосники, задвижки, варочную поверхность.",
    dark: true,
  },
  {
    num: "5",
    title: "Монтаж дымохода",
    desc: "Собираем дымоход с соблюдением разделки и отступов, проверяем тягу.",
    dark: false,
  },
  {
    num: "6",
    title: "Просушка и сдача",
    desc: "Протапливаем печь по графику просушки, сдаём готовую работу с гарантией.",
    dark: true,
  },
]

const faq = [
  {
    q: "Сколько стоит сложить печь в Усть-Куте?",
    a: "Отопительно-варочная печь — от 60 000 ₽, банная печь-каменка — от 55 000 ₽, камин — от 80 000 ₽. Точная стоимость зависит от размера, кирпича и сложности конструкции — рассчитаем после выезда.",
  },
  {
    q: "Сколько времени занимает кладка печи?",
    a: "Печь среднего размера кладём за 5-7 рабочих дней, включая устройство фундамента при необходимости. Камин — от 7 до 10 дней в зависимости от сложности.",
  },
  {
    q: "Нужен ли отдельный фундамент под печь?",
    a: "Для тяжёлых кирпичных печей и каминов — да, нужен отдельный фундамент, не связанный с фундаментом дома. Лёгкие печи-каменки можно ставить на усиленный пол.",
  },
  {
    q: "Из какого кирпича кладёте печи?",
    a: "Используем полнотелый керамический печной кирпич, для топливника — шамотный огнеупорный кирпич, который выдерживает высокие температуры.",
  },
  {
    q: "Даёте ли вы гарантию на печь?",
    a: "Да, предоставляем официальную гарантию 5 лет на кладку печи и работу дымохода. Все недочёты устраняем за свой счёт.",
  },
]

export default function PechiKaminy() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Печи и камины в Усть-Куте под ключ — цены от 55 000 ₽ | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство печей и каминов в Усть-Куте: кирпичные печи, банные печи-каменки, камины, дымоходы. Гарантия 5 лет. Бесплатный выезд — звоните!" />
        <meta name="keywords" content="печи Усть-Кут, камины Усть-Кут, кирпичная печь Усть-Кут, банная печь Усть-Кут, кладка печи Усть-Кут, дымоход Усть-Кут, печник Усть-Кут" />
        <meta property="og:title" content="Печи и камины в Усть-Куте под ключ | МАСТЕРОФФ" />
        <meta property="og:description" content="Кирпичные печи, банные каменки, камины и дымоходы в Усть-Куте. Гарантия 5 лет, фиксированная смета." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/pechi-kaminy" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Печи и камины в Усть-Куте",
          "description": "Строительство печей и каминов в Усть-Куте: кирпичные печи, банные печи-каменки, камины, дымоходы.",
          "url": "https://masteroff38.ru/pechi-kaminy",
          "image": HERO_IMG,
          "telephone": "+7-950-099-09-31",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Кирова, 77, офис 29",
            "addressLocality": "Усть-Кут",
            "addressRegion": "Иркутская область",
            "addressCountry": "RU"
          },
          "areaServed": {
            "@type": "City",
            "name": "Усть-Кут"
          },
          "priceRange": "от 55 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "34",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по строительству печей и каминов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Кирпичная печь" },
                "price": "60000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Банная печь" },
                "price": "55000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Камин" },
                "price": "80000",
                "priceCurrency": "RUB"
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
          alt="Печи и камины в Усть-Куте"
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
              Печи и камины<br />
              <span className="text-yellow-400">под ключ</span> <span className="whitespace-nowrap">в Усть-Куте</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Кирпичные печи, банные каменки, камины и дымоходы. Кладём вручную по проверенным порядовкам с гарантией.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Что мы строим и ремонтируем</h2>
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
                Оставьте заявку — приедем, оценим помещение и пришлём смету на печь или камин. Без обязательств.
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

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Печи и камины" />
      <Footer />
    </div>
  )
}