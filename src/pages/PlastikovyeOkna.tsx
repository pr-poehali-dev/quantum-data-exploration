import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/1858fa8d-f743-444b-b903-467515c9c11a.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "800+", label: "окон установлено" },
  { num: "5", label: "лет гарантии" },
  { num: "1", label: "день на монтаж" },
]

const services = [
  {
    icon: "PanelTop",
    title: "Окна в квартиру",
    desc: "Одно-, двух- и трёхстворчатые окна с energy-стеклопакетами для квартир и домов.",
    price: "от 9 500 ₽/м²",
  },
  {
    icon: "Building2",
    title: "Окна для офиса",
    desc: "Шумоизоляция и энергосбережение для коммерческих помещений и офисов.",
    price: "от 10 500 ₽/м²",
  },
  {
    icon: "Warehouse",
    title: "Окна на дачу и в дом",
    desc: "Тёплые и холодные конструкции для загородных домов, бань и дач.",
    price: "от 8 500 ₽/м²",
  },
  {
    icon: "DoorOpen",
    title: "Балконы и лоджии",
    desc: "Остекление балконов и лоджий холодное и тёплое, раздвижные системы.",
    price: "от 7 000 ₽/м²",
  },
  {
    icon: "PanelsTopLeft",
    title: "Витражное остекление",
    desc: "Панорамные окна и витражи от пола до потолка для современных интерьеров.",
    price: "от 12 000 ₽/м²",
  },
  {
    icon: "Wrench",
    title: "Ремонт и регулировка",
    desc: "Замена уплотнителей, регулировка фурнитуры, устранение продувания и промерзания.",
    price: "от 1 500 ₽",
  },
]

const reasons = [
  {
    num: "01",
    icon: "ClipboardList",
    title: "Прозрачная смета",
    desc: "Фиксируем стоимость окон и монтажа до заключения договора. Никаких доплат.",
  },
  {
    num: "02",
    icon: "Factory",
    title: "Собственное производство",
    desc: "Изготавливаем окна на своём производстве в Усть-Куте — без переплаты посредникам.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 5 лет",
    desc: "Даём официальную гарантию на профиль, фурнитуру и монтажные работы.",
  },
  {
    num: "04",
    icon: "Calendar",
    title: "Быстрое изготовление",
    desc: "Изготовим окно за 3-5 дней, монтаж занимает от 2 часов до одного дня.",
  },
  {
    num: "05",
    icon: "Thermometer",
    title: "Энергосбережение",
    desc: "Используем энергосберегающие стеклопакеты — тепло остаётся в доме зимой.",
  },
  {
    num: "06",
    icon: "Truck",
    title: "Доставка и вывоз мусора",
    desc: "Привозим окна и увозим старые рамы и мусор после монтажа — бесплатно.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Замер",
    desc: "Выезжаем на объект, делаем точные замеры проёмов, консультируем по профилю и стеклопакету.",
    dark: false,
  },
  {
    num: "2",
    title: "Расчёт и договор",
    desc: "Готовим смету с фиксированной стоимостью, заключаем договор с гарантией.",
    dark: true,
  },
  {
    num: "3",
    title: "Изготовление",
    desc: "Изготавливаем окна на собственном производстве по индивидуальным размерам.",
    dark: false,
  },
  {
    num: "4",
    title: "Демонтаж старых окон",
    desc: "Аккуратно демонтируем старые рамы, защищаем откосы и мебель от пыли.",
    dark: true,
  },
  {
    num: "5",
    title: "Монтаж",
    desc: "Устанавливаем окна по ГОСТу с монтажной пеной, отливами и подоконниками.",
    dark: false,
  },
  {
    num: "6",
    title: "Сдача работы",
    desc: "Настраиваем фурнитуру, убираем мусор, сдаём объект и подписываем акт.",
    dark: true,
  },
]

const faq = [
  {
    q: "Сколько стоит установить пластиковое окно в Усть-Куте?",
    a: "Стоимость окна с монтажом начинается от 8 500 ₽/м² в зависимости от профиля, количества камер и типа стеклопакета. Точную цену рассчитаем после замера.",
  },
  {
    q: "Сколько времени занимает изготовление и установка?",
    a: "Изготовление окна занимает 3-5 рабочих дней, монтаж одного окна — от 2 часов. Полное остекление квартиры делаем за 1 день.",
  },
  {
    q: "Какой профиль лучше выбрать?",
    a: "Для квартир подойдёт 3-камерный профиль, для загородных домов с постоянным проживанием рекомендуем 5-камерный профиль с двухкамерным энергосберегающим стеклопакетом.",
  },
  {
    q: "Демонтируете ли вы старые окна?",
    a: "Да, демонтаж старых рам и вывоз мусора входит в стоимость монтажа. Дополнительно платить не нужно.",
  },
  {
    q: "Даёте ли вы гарантию на окна?",
    a: "Да, предоставляем официальную гарантию 5 лет на профиль, фурнитуру, стеклопакет и монтажные работы.",
  },
]

export default function PlastikovyeOkna() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Пластиковые окна в Усть-Куте — производство и монтаж от 8 500 ₽/м² | МАСТЕРОФФ</title>
        <meta name="description" content="Производство и монтаж пластиковых окон в Усть-Куте. Окна в квартиру, дом, на балкон и лоджию. Собственное производство, гарантия 5 лет. Бесплатный замер — звоните!" />
        <meta name="keywords" content="пластиковые окна Усть-Кут, окна ПВХ Усть-Кут, установка окон Усть-Кут, остекление балкона Усть-Кут, производство окон Усть-Кут, замена окон Усть-Кут" />
        <meta property="og:title" content="Пластиковые окна в Усть-Куте — производство и монтаж | МАСТЕРОФФ" />
        <meta property="og:description" content="Производство и установка пластиковых окон в Усть-Куте. Гарантия 5 лет, фиксированная смета, бесплатный замер." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/plastikovye-okna" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — Пластиковые окна в Усть-Куте",
          "description": "Производство и монтаж пластиковых окон в Усть-Куте: окна в квартиру, дом, балконы и лоджии, витражное остекление.",
          "url": "https://masteroff38.ru/plastikovye-okna",
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
          "priceRange": "от 8 500 ₽",
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "56",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги по производству и монтажу окон",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Окна в квартиру" },
                "price": "9500",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "9500", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Остекление балконов" },
                "price": "7000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7000", "priceCurrency": "RUB", "unitText": "м²" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Витражное остекление" },
                "price": "12000",
                "priceCurrency": "RUB",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "12000", "priceCurrency": "RUB", "unitText": "м²" }
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
          alt="Пластиковые окна в Усть-Куте"
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
              Пластиковые окна<br />
              <span className="text-yellow-400">производство и монтаж</span> в Усть-Куте
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Собственное производство окон ПВХ. Замер, изготовление и установка под ключ с гарантией 5 лет.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Бесплатный замер
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Какие окна мы устанавливаем</h2>
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
                Бесплатный замер и расчёт за 24 часа
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — приедем, произведём замер и пришлём точный расчёт стоимости окон. Без обязательств.
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

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Пластиковые окна" />
      <Footer />
    </div>
  )
}
