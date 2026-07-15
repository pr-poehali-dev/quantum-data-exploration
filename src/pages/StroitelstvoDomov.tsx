import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f89a9f63-3010-4c3c-ba73-c6b539da17e9.jpg"
const LOG_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/75589bf6-5e4a-4f65-ada7-2cd555ea13f5.jpg"
const BRICK_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/f83b2edb-4410-408c-90b8-11984bd1e441.jpg"
const FOUNDATION_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/d83922ab-5446-437f-a07d-c41b636b371c.jpg"
const ROOF_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/a1c5a52b-6feb-4c47-9ed2-e216ac7ef97a.jpg"
const HOZBLOK_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/6a1574e2-5da1-4b7b-ba84-76bed581484c.jpg"
const PROJECT1_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d4700c76-71b9-49dd-9772-a8bcef8d1842.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "150+", label: "домов построено" },
  { num: "5", label: "лет гарантии" },
  { num: "0", label: "скрытых платежей" },
]

const services = [
  {
    icon: "Home",
    title: "Каркасные дома",
    desc: "Быстровозводимые тёплые дома по каркасной технологии — оптимальное решение по цене и срокам.",
    price: "от 25 000 ₽/м²",
  },
  {
    icon: "TreePine",
    title: "Дома из бруса и бревна",
    desc: "Экологичные дома из профилированного бруса или оцилиндрованного бревна — тепло и уют на десятилетия.",
    price: "от 32 000 ₽/м²",
  },
  {
    icon: "Building2",
    title: "Кирпичные и газобетонные дома",
    desc: "Капитальные дома из кирпича или газобетона — максимальная прочность и долговечность.",
    price: "от 38 000 ₽/м²",
  },
  {
    icon: "Layers",
    title: "Фундаменты",
    desc: "Ленточный, свайно-винтовой, монолитный фундамент под любой тип дома или пристройки.",
    price: "от 4 500 ₽/м²",
  },
  {
    icon: "TriangleAlert",
    title: "Кровельные работы",
    desc: "Монтаж кровли любой сложности — металлочерепица, профлист, мягкая кровля.",
    price: "от 1 800 ₽/м²",
  },
  {
    icon: "Warehouse",
    title: "Хозблоки и бытовки",
    desc: "Строим сараи, гаражи, бытовки и хозпостройки — быстро и без лишних затрат.",
    price: "от 180 000 ₽",
  },
]

const reasons = [
  {
    num: "01",
    icon: "ClipboardList",
    title: "Прозрачная смета",
    desc: "Фиксируем стоимость до начала строительства. Цена не меняется в процессе работ.",
  },
  {
    num: "02",
    icon: "UserCheck",
    title: "Своя бригада",
    desc: "Работаем без субподряда — только штатные мастера с опытом от 5 лет в строительстве.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 5 лет",
    desc: "Даём официальную гарантию на фундамент, стены и кровлю. Устраняем недочёты за свой счёт.",
  },
  {
    num: "04",
    icon: "Calendar",
    title: "Соблюдение сроков",
    desc: "Сроки строительства фиксируются в договоре. Штраф за каждый день просрочки.",
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
    desc: "Закупаем и доставляем материалы сами — по оптовым ценам, без переплат.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Выезд и консультация",
    desc: "Выезжаем на участок, оцениваем условия строительства, обсуждаем проект и бюджет. Бесплатно и без обязательств.",
    dark: false,
  },
  {
    num: "2",
    title: "Проект и смета",
    desc: "Разрабатываем или подбираем готовый проект дома, составляем детальную смету с фиксированной стоимостью.",
    dark: true,
  },
  {
    num: "3",
    title: "Договор и фундамент",
    desc: "Подписываем договор, вносим аванс, закладываем фундамент согласно проекту и особенностям грунта.",
    dark: false,
  },
  {
    num: "4",
    title: "Строительство",
    desc: "Возводим стены, кровлю, устанавливаем окна и двери. Еженедельные фотоотчёты о ходе работ.",
    dark: true,
  },
  {
    num: "5",
    title: "Сдача объекта",
    desc: "Принимаете дом вместе с прорабом, подписываем акт. Уборка строительного мусора включена.",
    dark: false,
  },
]

const projects = [
  {
    id: 1,
    title: "Каркасный дом 120 м²",
    desc: "Двухэтажный каркасный дом с террасой и панорамными окнами. Утепление минеральной ватой, вентилируемый фасад, металлочерепица.",
    tag: "Каркасный дом",
    area: "120 м²",
    duration: "3 месяца",
    img: PROJECT1_IMG,
  },
  {
    id: 2,
    title: "Дом из бруса 90 м²",
    desc: "Одноэтажный дом из профилированного бруса с мансардой. Ленточный фундамент, окосячка окон и дверей, кровля из металлочерепицы.",
    tag: "Дом из бруса",
    area: "90 м²",
    duration: "2,5 месяца",
    img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/97581c1f-cde1-4782-b01b-501e33994f81.png",
  },
  {
    id: 3,
    title: "Кирпичный коттедж 150 м²",
    desc: "Капитальный кирпичный дом с гаражом. Монолитный фундамент, полнотелый кирпич, утепление, качественная внутренняя отделка под чистовую.",
    tag: "Кирпичный дом",
    area: "150 м²",
    duration: "5 месяцев",
    img: BRICK_IMG,
  },
]

const faq = [
  {
    q: "Сколько стоит построить дом под ключ в Усть-Куте?",
    a: "Стоимость зависит от технологии и площади. Каркасный дом — от 25 000 ₽/м², дом из бруса — от 32 000 ₽/м², кирпичный — от 38 000 ₽/м². Точную стоимость рассчитываем после выезда на участок.",
  },
  {
    q: "Сколько времени занимает строительство дома?",
    a: "Каркасный дом площадью 100–120 м² — 2–3 месяца. Дом из бруса — 2,5–3,5 месяца. Кирпичный дом — от 4 до 6 месяцев в зависимости от сложности проекта.",
  },
  {
    q: "Строите ли вы зимой?",
    a: "Да, ведём строительство круглый год. Каркасные технологии позволяют строить в любой сезон. Заливку фундамента в сильные морозы не рекомендуем — обсудим сроки при встрече.",
  },
  {
    q: "Можно ли построить дом по своему проекту?",
    a: "Да, работаем как с готовыми проектами, так и с индивидуальными. Поможем адаптировать проект под ваш участок и бюджет.",
  },
  {
    q: "Даёте ли вы гарантию на строительство?",
    a: "Да, предоставляем официальную гарантию 5 лет на фундамент, несущие конструкции и кровлю. Все недочёты устраняем за свой счёт.",
  },
  {
    q: "Нужно ли самому закупать материалы?",
    a: "Нет, мы берём это на себя. Закупаем материалы по оптовым ценам и доставляем на участок. Все чеки предоставляем — прозрачность на каждом этапе.",
  },
]

export default function StroitelstvoDomov() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Строительство домов в Усть-Куте под ключ — цены от 25 000 ₽/м² | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство домов и коттеджей в Усть-Куте под ключ. Каркасные, брусовые, кирпичные дома. Фундамент, кровля, хозблоки. Гарантия 5 лет — звоните!" />
        <meta name="keywords" content="строительство домов Усть-Кут, построить дом Усть-Кут, каркасные дома Усть-Кут, дом из бруса Усть-Кут, коттеджи Усть-Кут, строительство коттеджей Усть-Кут, фундамент Усть-Кут, кровельные работы Усть-Кут" />
        <meta property="og:title" content="Строительство домов в Усть-Куте под ключ | МАСТЕРОФФ" />
        <meta property="og:description" content="Строительство домов и коттеджей в Усть-Куте: каркасные, брусовые, кирпичные. Гарантия 5 лет. Бесплатный выезд и смета." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/stroitelstvo-domov" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Строительство домов в Усть-Куте",
          "description": "Строительство домов и коттеджей в Усть-Куте под ключ. Каркасные, брусовые, кирпичные дома, фундамент, кровля.",
          "url": "https://masteroff38.ru/stroitelstvo-domov",
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
          "priceRange": "от 25 000 ₽/м²",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "62",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги строительства домов",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство каркасного дома" },
                "price": "25000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "25000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство дома из бруса" },
                "price": "32000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "32000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Строительство кирпичного дома" },
                "price": "38000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "38000", "priceCurrency": "RUB", "unitText": "м²" }
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
          alt="Строительство домов в Усть-Куте"
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
              Строительство домов<br />
              <span className="text-yellow-400">под ключ</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Строим каркасные, брусовые и кирпичные дома. Фундамент, стены, кровля — полный цикл с гарантией 5 лет.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Что мы строим</h2>
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

      {/* PROJECTS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Примеры работ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Построенные дома</h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {projects.map((project, pi) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group relative"
                  onClick={() => setLightboxIdx(pi)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="ZoomIn" size={36} className="text-white" />
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="inline-flex items-center gap-2 w-fit">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-black" style={{ backgroundColor: "#F5C518" }}>{project.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{project.desc}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-4" style={{ backgroundColor: "#18181B" }}>
                      <div className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Площадь</div>
                      <div className="text-white font-bold text-lg">{project.area}</div>
                    </div>
                    <div className="rounded-xl p-4" style={{ backgroundColor: "#18181B" }}>
                      <div className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Срок</div>
                      <div className="text-white font-bold text-lg">{project.duration}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="mt-2 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #F5C518 0%, #ff9d00 100%)" }}
                  >
                    <Icon name="Phone" size={16} />
                    Хочу такой же дом
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Процесс</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Как мы строим</h2>
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
                style={{ backgroundColor: stage.dark ? "#09090B" : "#18181B" }}
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
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
          >
            <img src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/065aa718-52b1-4437-98fe-efc15fc98c02.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Бесплатный выезд<br />и смета за 24 часа
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — приедем на участок, оценим условия и пришлём смету. Без обязательств.
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
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
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

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={() => setLightboxIdx(null)}>
            <Icon name="X" size={32} />
          </button>
          <img src={projects[lightboxIdx].img} alt="" className="max-w-full max-h-[90vh] rounded-xl object-contain" onClick={e => e.stopPropagation()} />
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + projects.length) % projects.length) }}>
            <Icon name="ChevronLeft" size={40} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % projects.length) }}>
            <Icon name="ChevronRight" size={40} />
          </button>
        </div>
      )}

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Строительство домов" />
      <Footer />
    </div>
  )
}