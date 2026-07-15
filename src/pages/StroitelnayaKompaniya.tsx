import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/591d0384-8961-4b94-9549-07fe2a65847c.jpg"
const LOG_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/75589bf6-5e4a-4f65-ada7-2cd555ea13f5.jpg"
const ROOF_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/a1c5a52b-6feb-4c47-9ed2-e216ac7ef97a.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "500+", label: "объектов сдано" },
  { num: "20+", label: "мастеров в штате" },
  { num: "5", label: "лет гарантии" },
]

const services = [
  {
    icon: "Home",
    title: "Строительство домов и бань",
    desc: "Каркасные, брусовые, кирпичные дома и бани под ключ — от фундамента до отделки.",
    href: "#",
  },
  {
    icon: "Layers",
    title: "Отделка квартир",
    desc: "Косметический и капитальный ремонт квартир любой сложности.",
    href: "/otdelka-kvartir",
  },
  {
    icon: "Fence",
    title: "Заборы и ограждения",
    desc: "Заборы из дерева, профлиста, кирпича, поликарбоната и других материалов.",
    href: "/zabory",
  },
  {
    icon: "Zap",
    title: "Электрика и сантехника",
    desc: "Монтаж и ремонт проводки, розеток, труб, сантехприборов с гарантией.",
    href: "/elektrik",
  },
  {
    icon: "Hammer",
    title: "Мастер и муж на час",
    desc: "Мелкий бытовой ремонт, сборка мебели, плотницкие работы.",
    href: "/master-na-chas",
  },
  {
    icon: "Sparkles",
    title: "Клининг",
    desc: "Уборка квартир, офисов и помещений после ремонта.",
    href: "/klining",
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
    icon: "UserCheck",
    title: "Своя бригада",
    desc: "Работаем без субподряда — только штатные мастера с опытом от 5 лет.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия до 5 лет",
    desc: "Даём официальную гарантию на все виды работ. Устраняем недочёты за свой счёт.",
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
    desc: "Закупаем и доставляем материалы сами — по оптовым ценам, без переплат.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Заявка и выезд",
    desc: "Принимаем заявку, выезжаем на объект, оцениваем условия и обсуждаем задачу. Бесплатно и без обязательств.",
    dark: false,
  },
  {
    num: "2",
    title: "Смета и договор",
    desc: "Составляем детальную смету с фиксированной стоимостью, подписываем договор с указанием сроков.",
    dark: true,
  },
  {
    num: "3",
    title: "Закупка материалов",
    desc: "Закупаем и доставляем материалы по оптовым ценам — вам не нужно ничего искать самостоятельно.",
    dark: false,
  },
  {
    num: "4",
    title: "Выполнение работ",
    desc: "Работаем поэтапно силами штатной бригады. Еженедельные фотоотчёты о ходе работ.",
    dark: true,
  },
  {
    num: "5",
    title: "Сдача объекта",
    desc: "Принимаете работу вместе с прорабом, подписываем акт. Оплата только после приёмки.",
    dark: false,
  },
]

const faq = [
  {
    q: "Какие услуги оказывает компания МАСТЕРОФФ?",
    a: "Мы занимаемся полным циклом строительных и бытовых услуг в Усть-Куте: строительство домов и бань, отделка квартир, заборы, электрика, сантехника, мелкий ремонт и клининг.",
  },
  {
    q: "В каком регионе вы работаете?",
    a: "Работаем в Усть-Куте и по всей Иркутской области. Выезжаем на объекты в пределах региона.",
  },
  {
    q: "Даёте ли вы гарантию на работы?",
    a: "Да, на все виды работ предоставляется официальная гарантия — от 3 до 5 лет в зависимости от типа услуги. Гарантия прописывается в договоре.",
  },
  {
    q: "Работаете ли вы по договору?",
    a: "Да, все работы оформляются официальным договором с фиксацией сроков и стоимости. Расходы на материалы подтверждаем чеками.",
  },
  {
    q: "Как быстро вы приступаете к работе?",
    a: "После выезда и согласования сметы — как правило, в течение 1–2 недель. Точные сроки зависят от объёма и сезона.",
  },
]

export default function StroitelnayaKompaniya() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>О компании — строительная компания МАСТЕРОФФ в Усть-Куте</title>
        <meta name="description" content="МАСТЕРОФФ — строительная компания в Усть-Куте. Строительство домов и бань, отделка квартир, заборы, электрика, сантехника. Более 10 лет на рынке, гарантия до 5 лет." />
        <meta name="keywords" content="строительная компания Усть-Кут, о компании МАСТЕРОФФ, строительство Усть-Кут, ремонт Усть-Кут" />
        <meta property="og:title" content="О компании МАСТЕРОФФ — строительная компания в Усть-Куте" />
        <meta property="og:description" content="Полный цикл строительных и бытовых услуг в Усть-Куте: дома, бани, отделка, заборы, электрика, сантехника. Более 10 лет опыта." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff38.ru/stroitelnaya-kompaniya" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "МАСТЕРОФФ — строительная компания в Усть-Куте",
          "description": "Строительная компания в Усть-Куте. Строительство домов и бань, отделка квартир, заборы, электрика, сантехника, клининг.",
          "url": "https://masteroff38.ru/stroitelnaya-kompaniya",
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
          "openingHours": "Mo-Su 08:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "62",
            "bestRating": "5"
          }
        })}</script>
      </Helmet>
      <Navbar />
      <FloatingCallButton />

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "80svh" }}>
        <img
          src={HERO_IMG}
          alt="Строительная компания МАСТЕРОФФ в Усть-Куте"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
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
              Строительная компания<br />
              <span className="text-yellow-400">МАСТЕРОФФ</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Полный цикл строительных и бытовых услуг в Усть-Куте: от фундамента до сдачи объекта под ключ. Более 10 лет на рынке.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Оставить заявку
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

      {/* ABOUT TEXT */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">О нас</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-5">Строим и ремонтируем в Усть-Куте более 10 лет</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              МАСТЕРОФФ — команда мастеров и строителей, работающая в Усть-Куте и Иркутской области. Мы начинали с мелкого бытового ремонта, а сегодня выполняем полный цикл строительных работ: от закладки фундамента до сдачи готового объекта под ключ.
            </p>
            <p className="text-gray-400 leading-relaxed">
              В штате компании — более 20 мастеров разного профиля: строители, электрики, сантехники, отделочники. Мы не привлекаем субподрядчиков и отвечаем за качество каждого этапа работ лично.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/83d3f932-e03f-4194-80ad-de8f282c546b.jpg" alt="Построенный дом МАСТЕРОФФ" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Чем мы занимаемся</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
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
              </motion.a>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4">
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
                style={{ backgroundColor: "#18181B" }}
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
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
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
            <img src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/9cf5c326-530f-4834-a949-ceb36ce8defe.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Свяжитесь с нами<br />и обсудим ваш проект
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — расскажем, как решим вашу задачу, и рассчитаем стоимость. Без обязательств.
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

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Заявка с сайта" />
      <Footer />
    </div>
  )
}