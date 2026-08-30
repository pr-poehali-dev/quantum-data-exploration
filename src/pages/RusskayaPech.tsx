import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/23fd7dd5-64a6-46df-93fd-85d9c16f8309.jpg"

const worksPhotos = [
  {
    src: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/23fd7dd5-64a6-46df-93fd-85d9c16f8309.jpg",
    title: "Русская печь с лежанкой",
    desc: "Классическая печь с тёплой лежанкой для деревенского дома",
  },
  {
    src: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/92698e99-f502-4d1e-a98e-a8917c3dbcee.jpg",
    title: "Кладка печи мастером",
    desc: "Ручная кладка на глиняный раствор по традиционной порядовке",
  },
  {
    src: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/65c9a2d0-726e-4773-81e7-5727d066a411.jpg",
    title: "Печь с изразцами",
    desc: "Русская печь с декоративной облицовкой для кухни в доме",
  },
]

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "120+", label: "русских печей сложено" },
  { num: "5", label: "лет гарантии" },
  { num: "0", label: "скрытых платежей" },
]

const services = [
  {
    icon: "Flame",
    title: "Классическая русская печь",
    desc: "Традиционная печь с горнилом, шестком и лежанкой для дома или дачи.",
    price: "от 75 000 ₽",
  },
  {
    icon: "BedDouble",
    title: "Печь с лежанкой",
    desc: "Увеличенная конструкция с тёплой лежанкой для отдыха и сна зимой.",
    price: "от 90 000 ₽",
  },
  {
    icon: "Utensils",
    title: "Печь с варочной плитой",
    desc: "Русская печь, совмещённая с варочной поверхностью для готовки.",
    price: "от 85 000 ₽",
  },
  {
    icon: "Sparkles",
    title: "Отделка изразцами",
    desc: "Облицовка печи изразцами или декоративным кирпичом на выбор.",
    price: "от 25 000 ₽",
  },
  {
    icon: "Wind",
    title: "Дымоходы",
    desc: "Проектирование и монтаж дымохода под русскую печь с хорошей тягой.",
    price: "от 15 000 ₽",
  },
  {
    icon: "Wrench",
    title: "Ремонт и перекладка",
    desc: "Перекладка отдельных участков, устранение трещин, прочистка дымохода.",
    price: "от 5 000 ₽",
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
    title: "Мастера-печники",
    desc: "Кладём русские печи по традиционным порядовкам, проверенным поколениями.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 5 лет",
    desc: "Даём официальную гарантию на кладку печи и работу дымохода.",
  },
  {
    num: "04",
    icon: "Calendar",
    title: "Соблюдение сроков",
    desc: "Сроки фиксируются в договоре. Печь среднего размера кладём за 7-10 дней.",
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
    desc: "Выезжаем на объект, оцениваем помещение, обсуждаем размер и вид печи.",
    dark: false,
  },
  {
    num: "2",
    title: "Проект и смета",
    desc: "Подбираем порядовку, рассчитываем расход материалов, готовим смету.",
    dark: true,
  },
  {
    num: "3",
    title: "Заливка фундамента",
    desc: "Заливаем отдельный фундамент под печь — русская печь тяжелее, чем кажется.",
    dark: false,
  },
  {
    num: "4",
    title: "Кладка печи",
    desc: "Кладём корпус по порядовке, формируем горнило, шесток, лежанку.",
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
    q: "Сколько стоит сложить русскую печь в Усть-Куте?",
    a: "Классическая русская печь — от 75 000 ₽, с лежанкой — от 90 000 ₽. Точная стоимость зависит от размера, кирпича и отделки — рассчитаем после выезда.",
  },
  {
    q: "Сколько времени занимает кладка русской печи?",
    a: "Русская печь среднего размера кладётся за 7-10 рабочих дней, включая устройство фундамента. Срок фиксируем в договоре.",
  },
  {
    q: "Нужен ли отдельный фундамент под русскую печь?",
    a: "Да, русская печь — тяжёлая конструкция, ей нужен отдельный фундамент, не связанный с фундаментом дома.",
  },
  {
    q: "Чем русская печь отличается от обычной отопительной?",
    a: "У русской печи есть горнило для приготовления пищи и хлеба, широкий шесток и лежанка для отдыха. Она больше по размеру и держит тепло намного дольше.",
  },
  {
    q: "Из какого кирпича кладёте русские печи?",
    a: "Используем полнотелый керамический печной кирпич, для горнила — шамотный огнеупорный кирпич, выдерживающий высокие температуры.",
  },
  {
    q: "Даёте ли вы гарантию на печь?",
    a: "Да, предоставляем официальную гарантию 5 лет на кладку печи и работу дымохода. Все недочёты устраняем за свой счёт.",
  },
]

export default function RusskayaPech() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [worksLightbox, setWorksLightbox] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Кладка русской печи в Усть-Куте под ключ — цены от 75 000 ₽ | МАСТЕРОФФ</title>
        <meta name="description" content="Кладка русской печи в Усть-Куте: с лежанкой, варочной плитой, изразцами. Печники с опытом, гарантия 5 лет. Бесплатный выезд — звоните!" />
        <meta name="keywords" content="русская печь Усть-Кут, кладка русской печи Усть-Кут, печь с лежанкой Усть-Кут, печник Усть-Кут, кирпичная печь Усть-Кут" />
        <meta property="og:title" content="Кладка русской печи в Усть-Куте под ключ | МАСТЕРОФФ" />
        <meta property="og:description" content="Русские печи с лежанкой, варочной плитой и изразцами в Усть-Куте. Гарантия 5 лет, фиксированная смета." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/russkaya-pech" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Кладка русской печи в Усть-Куте",
          "description": "Кладка русских печей в Усть-Куте: с лежанкой, варочной плитой, изразцами, дымоходами.",
          "url": "https://masteroff38.ru/russkaya-pech",
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
          "priceRange": "от 75 000 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "41",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по кладке русских печей",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Классическая русская печь" },
                "price": "75000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Русская печь с лежанкой" },
                "price": "90000",
                "priceCurrency": "RUB"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Печь с варочной плитой" },
                "price": "85000",
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
          alt="Кладка русской печи в Усть-Куте"
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
            <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-5">
              Кладка русской печи<br />
              <span className="text-yellow-400">под ключ</span>{" "}
              <span className="whitespace-nowrap">в Усть-Куте</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              С лежанкой, варочной плитой и изразцами. Кладём вручную по традиционным порядовкам с гарантией 5 лет.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Какие печи мы кладём</h2>
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

      {/* WORKS GALLERY */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Портфолио</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Наши работы</h2>
            <p className="text-gray-400 mt-2">Нажмите на фото, чтобы рассмотреть подробнее</p>
          </motion.div>

          {worksLightbox !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
              onClick={() => setWorksLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10 w-12 h-12 flex items-center justify-center bg-black/40 rounded-full"
                onClick={() => setWorksLightbox(null)}
              >✕</button>
              <button
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10 w-12 h-12 flex items-center justify-center bg-black/40 rounded-xl"
                onClick={(e) => { e.stopPropagation(); setWorksLightbox(i => i !== null ? (i - 1 + worksPhotos.length) % worksPhotos.length : null) }}
              >‹</button>
              <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <img
                  src={worksPhotos[worksLightbox].src}
                  alt={worksPhotos[worksLightbox].title}
                  className="max-h-[75vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
                />
                <div className="text-center px-4">
                  <div className="text-white font-semibold text-base">{worksPhotos[worksLightbox].title}</div>
                  <div className="text-gray-400 text-sm mt-1 max-w-md">{worksPhotos[worksLightbox].desc}</div>
                </div>
              </div>
              <button
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10 w-12 h-12 flex items-center justify-center bg-black/40 rounded-xl"
                onClick={(e) => { e.stopPropagation(); setWorksLightbox(i => i !== null ? (i + 1) % worksPhotos.length : null) }}
              >›</button>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-1.5 rounded-full">
                {worksLightbox + 1} / {worksPhotos.length}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {worksPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "220px" }}
                onClick={() => setWorksLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white font-semibold text-sm leading-tight">{photo.title}</div>
                  <div className="text-gray-300 text-xs mt-0.5 leading-snug hidden md:block">{photo.desc}</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="ZoomIn" size={20} className="text-white" />
                  </div>
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
            <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Бесплатный выезд и смета за 24 часа
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — приедем, оценим помещение и пришлём смету на русскую печь. Без обязательств.
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

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Русская печь" />
      <Footer />
    </div>
  )
}
