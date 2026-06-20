import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const banyaTypes = [
  { title: "Баня из бруса", price: "от 350 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/57e21683-60e3-4650-b41e-3bcb86d2b793.jpg" },
  { title: "Баня из бревна", price: "от 420 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ecd9f7fb-f790-4aff-944d-0b2d1ee78823.jpg" },
  { title: "Каркасная баня", price: "от 220 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/337278f3-6861-4de4-ac26-ee2e373b0246.jpg" },
  { title: "Баня из газобетона", price: "от 280 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/c8c98287-b8f2-461c-bda5-2b8ee49b0069.jpg" },
  { title: "Баня из кирпича", price: "от 500 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d40c82ff-7853-42c2-aa84-286330a2d069.jpg" },
  { title: "Баня-бочка", price: "от 80 000 ₽", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/c3c79fbd-aab9-4805-8957-ce2ed646afa0.jpg" },
]

const stats = [
  {
    num: "10+",
    title: "Более 10 лет строим бани",
    subtitle: "в Усть-Куте и Иркутской области.",
    desc: "Знаем все особенности сибирского климата — строим так, чтобы баня служила десятилетиями без проблем.",
  },
  {
    num: "300+",
    title: "300+ построенных бань",
    subtitle: "по всей Иркутской области.",
    desc: "Работаем с частными домами, дачами и загородными участками. Сдаём объект в срок и убираем за собой.",
  },
  {
    num: "6",
    title: "6 видов бань на выбор",
    subtitle: "Брус, бревно, каркас, газобетон, кирпич, бочка.",
    desc: "Подберём материал под ваш бюджет и участок. Поможем с проектом и не навяжем лишнего.",
  },
]

const reasons = [
  { num: "01", icon: "Ruler", title: "Выезд и замер бесплатно", desc: "Приедем на участок, оценим условия и составим смету — без оплаты за визит." },
  { num: "02", icon: "ShieldCheck", title: "Гарантия на работу", desc: "Даём гарантию на строительство. Если что-то не так — приедем и исправим бесплатно." },
  { num: "03", icon: "BadgeDollarSign", title: "Фиксированная цена", desc: "Смета до начала работ — никаких доплат в процессе. Цена фиксируется на старте." },
  { num: "04", icon: "Zap", title: "Быстрый старт", desc: "Начинаем строительство в согласованные сроки. Не затягиваем и дорожим репутацией." },
  { num: "05", icon: "Hammer", title: "Своя бригада", desc: "Работаем без посредников — только штатные мастера с опытом от 5 лет." },
  { num: "06", icon: "Truck", title: "Доставка материалов", desc: "Привозим все материалы сами. Вам не нужно ничего искать и договариваться." },
]

const workStages = [
  {
    title: "Заявка и выезд",
    items: ["Что входит:", "Звонок или заявка на сайте", "Выезд на участок", "Оценка условий строительства", "Консультация по материалам и проекту"],
    dark: false,
  },
  {
    title: "Проект и смета",
    items: ["Что входит:", "Разработка или подбор проекта", "Подробная смета с материалами и работами", "Фиксированная стоимость", "Подписание договора"],
    dark: true,
  },
  {
    title: "Строительство",
    items: ["Что входит:", "Фундамент под баню", "Возведение стен и кровли", "Установка дверей и окон", "Утепление и гидроизоляция"],
    dark: true,
  },
  {
    title: "Сдача объекта",
    items: ["Что входит:", "Отделка парилки и предбанника", "Установка печи (при необходимости)", "Уборка строительного мусора", "Оплата только после приёмки"],
    dark: false,
  },
]

const reviews = [
  { name: "Дмитрий К.", text: "Заказали баню из бруса 6×4. Бригада работала чётко, всё сделали в срок. Качество отличное — парилка держит жар как надо!", service: "Баня из бруса", stars: 5 },
  { name: "Светлана Н.", text: "Строили каркасную баню на даче. Приехали быстро, смета совпала с итоговой суммой. Очень довольна результатом.", service: "Каркасная баня", stars: 5 },
  { name: "Игорь М.", text: "Взяли баню-бочку — поставили за 2 дня. Отличная вещь! Мастера аккуратные, всё объяснили по эксплуатации.", service: "Баня-бочка", stars: 5 },
]

const faq = [
  { q: "Сколько стоит выезд на участок?", a: "Выезд и консультация — бесплатно. Мы оцениваем условия, делаем замеры и сразу называем стоимость." },
  { q: "Как быстро начнёте строительство?", a: "После подписания договора и внесения аванса — как правило, в течение 1–2 недель. Точные сроки согласуем индивидуально." },
  { q: "Какой материал лучше выбрать?", a: "Зависит от бюджета и предпочтений. Брус и бревно — классика, долговечны и хорошо держат тепло. Каркас — быстрее и дешевле. Газобетон — бюджетный вариант. Поможем выбрать на встрече." },
  { q: "Вы работаете зимой?", a: "Да, ведём строительство круглый год. Некоторые виды работ (фундамент) лучше делать в тёплое время — обсудим при встрече." },
  { q: "Что входит в гарантию?", a: "Гарантия на качество строительства: фундамент, стены, кровля, утепление. Если выявятся дефекты по нашей вине — устраним бесплатно." },
]

interface PriceItem { label: string; price: string }
interface PriceSection { id: string; title: string; icon: string; items: PriceItem[] }

const priceSections: PriceSection[] = [
  {
    id: "brus", title: "Баня из бруса", icon: "TreePine",
    items: [
      { label: "Фундамент столбчатый (шт.)", price: "от 1 500 руб." },
      { label: "Фундамент ленточный (п.м)", price: "от 4 000 руб." },
      { label: "Сруб из профилированного бруса (м²)", price: "от 8 000 руб." },
      { label: "Кровля двускатная (м²)", price: "от 2 500 руб." },
      { label: "Окосячка + двери/окна (компл.)", price: "от 15 000 руб." },
    ],
  },
  {
    id: "brevno", title: "Баня из бревна", icon: "Logs",
    items: [
      { label: "Сруб из оцилиндрованного бревна (м²)", price: "от 10 000 руб." },
      { label: "Фундамент (п.м)", price: "от 5 000 руб." },
      { label: "Кровля (м²)", price: "от 2 500 руб." },
      { label: "Конопатка швов (п.м)", price: "от 200 руб." },
    ],
  },
  {
    id: "karkas", title: "Каркасная баня", icon: "Frame",
    items: [
      { label: "Каркас (м²)", price: "от 5 000 руб." },
      { label: "Утепление (м²)", price: "от 1 500 руб." },
      { label: "Обшивка снаружи (м²)", price: "от 1 200 руб." },
      { label: "Кровля (м²)", price: "от 2 000 руб." },
      { label: "Внутренняя отделка парилки (м²)", price: "от 2 500 руб." },
    ],
  },
  {
    id: "gazobeton", title: "Баня из газобетона", icon: "Building2",
    items: [
      { label: "Фундамент ленточный (п.м)", price: "от 5 000 руб." },
      { label: "Кладка газобетона (м²)", price: "от 3 500 руб." },
      { label: "Штукатурка внутри (м²)", price: "от 600 руб." },
      { label: "Кровля (м²)", price: "от 2 000 руб." },
    ],
  },
  {
    id: "kirpich", title: "Баня из кирпича", icon: "Layers",
    items: [
      { label: "Фундамент (п.м)", price: "от 6 000 руб." },
      { label: "Кладка кирпича (м²)", price: "от 5 000 руб." },
      { label: "Кровля (м²)", price: "от 2 500 руб." },
      { label: "Внутренняя отделка (м²)", price: "от 3 000 руб." },
    ],
  },
  {
    id: "bochka", title: "Баня-бочка", icon: "Circle",
    items: [
      { label: "Установка бани-бочки (шт.)", price: "от 10 000 руб." },
      { label: "Подготовка основания (шт.)", price: "от 5 000 руб." },
      { label: "Подключение печи (шт.)", price: "от 3 000 руб." },
    ],
  },
]

const ACCENT = "#5a3a1a"
const ACCENT_LIGHT = "#c8956a"
const BG_HERO = "linear-gradient(180deg, #d4c4a8 0%, #e8ddc8 40%, #f5f0e8 100%)"

export default function Banya() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Строительство бань в Усть-Куте под ключ | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство бань в Усть-Куте: брус, бревно, каркас, газобетон, кирпич, баня-бочка. Под ключ. Выезд и замер бесплатно. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="строительство бани Усть-Кут, баня под ключ Усть-Кут, баня из бруса Усть-Кут, каркасная баня Усть-Кут, баня-бочка Усть-Кут, построить баню Усть-Кут" />
        <meta property="og:title" content="Строительство бань в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Строительство бань под ключ в Усть-Куте. Выезд бесплатно. Гарантия на работу." />
        <link rel="canonical" href="https://servismasteroff.ru/banya" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: "90vh", background: BG_HERO }}
      >
        {/* Фон — фото на весь блок */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 1 }}>
          <img
            src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/8f54a791-5a76-4ea3-b3e3-b1d36c18fe49.jpg"
            alt="Баня под ключ"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 2, background: "linear-gradient(to right, rgba(232,221,200,0.97) 0%, rgba(232,221,200,0.88) 30%, rgba(232,221,200,0.4) 55%, transparent 75%)" }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-10 w-full pt-4 pb-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1
              className="text-4xl md:text-6xl leading-tight mb-4 text-zinc-900"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Строительство<br />бань под ключ<br />в Усть-Куте
            </h1>
            <p className="text-sm md:text-base font-bold tracking-widest text-zinc-500 uppercase mb-6">
              Брус &nbsp;|&nbsp; Бревно &nbsp;|&nbsp; Каркас &nbsp;|&nbsp; Бочка
            </p>

            <motion.div
              className="inline-block rounded-2xl px-6 py-4 max-w-xs"
              style={{ backgroundColor: "#F5C518" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-black font-black text-lg uppercase tracking-wide mb-0.5">🔥 Акция!</p>
              <p className="text-black font-bold text-sm uppercase tracking-wide mb-1">До конца месяца</p>
              <p className="text-black text-sm leading-snug">Закажите строительство бани сейчас и получите скидку до <span className="font-black text-base">-15%</span></p>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full" style={{ background: "rgba(232,221,200,0.9)", backdropFilter: "blur(8px)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-3">
            {["БАНИ", "БОЧКИ", "ЗАМЕР БЕСПЛАТНО"].map((label, i) => (
              <button
                key={label}
                onClick={() => setIsFormOpen(true)}
                className={`py-5 md:py-7 text-sm md:text-base font-bold tracking-widest text-zinc-800 uppercase transition-all hover:bg-white/80 ${i < 2 ? "border-r border-zinc-300" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="px-4 md:px-6 pt-24 pb-12 md:pb-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-3" style={{ color: "#3a1a08" }}>
              Компания «Мастерофф»
            </h2>
            <p className="text-zinc-500 text-lg">Строим бани для частных домов, дач и загородных участков.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-zinc-100"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "150px" }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80')",
                      filter: "blur(2px) brightness(0.55) saturate(1.2)",
                      transform: "scale(1.08)",
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(90,40,10,0.6) 0%, rgba(160,90,30,0.35) 100%)" }} />
                  <span
                    className="relative z-10 font-black text-white"
                    style={{ fontSize: "52px", textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
                  >
                    {s.num}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-bold text-base text-zinc-900 mb-1">{s.title}</p>
                  <p className="text-zinc-500 text-sm mb-3">{s.subtitle}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Виды бань */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-3">
              Виды бань
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">Строим все популярные виды бань под ключ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {banyaTypes.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.06 }}
                className="relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: "20px", height: "260px" }}
                onClick={() => setIsFormOpen(true)}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    maskImage: "linear-gradient(#000 45%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(#000 45%, transparent 100%)",
                  }}
                >
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-bold text-base leading-tight">{b.title}</div>
                  <div className="text-sm font-semibold mt-1" style={{ color: "#F5C518" }}>{b.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 причин */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-3">
              <span style={{ color: ACCENT_LIGHT }}>6 причин</span>{" "}
              <span className="text-zinc-900">выбрать «Мастерофф»</span>
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">Полный цикл от замера до сдачи объекта</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-12">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative flex items-center justify-center mb-4 md:mb-6" style={{ width: 120, height: 110 }}>
                  <span
                    className="absolute font-black select-none leading-none"
                    style={{ fontSize: "110px", color: ACCENT_LIGHT, opacity: 0.12, lineHeight: 1, top: "50%", left: "50%", transform: "translate(-50%, -50%)", whiteSpace: "nowrap" }}
                  >
                    {r.num}
                  </span>
                  <div
                    className="relative z-10 flex items-center justify-center rounded-2xl"
                    style={{ width: 58, height: 58, backgroundColor: "#f7f0e8", border: "2px solid #e0c8a8" }}
                  >
                    <Icon name={r.icon as "Home"} size={26} style={{ color: ACCENT }} />
                  </div>
                </div>
                <h3 className="font-bold text-sm md:text-base text-zinc-900 mb-1 md:mb-2 leading-snug">{r.title}</h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы работ */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-3">
              Берём полную ответственность от начала до конца
            </h2>
            <p className="text-zinc-600 text-base md:text-lg">
              Полный цикл работ выполняется от 2 до 8 недель, в зависимости от объёма.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex"
              >
                <div className="flex-shrink-0 rounded-l-2xl" style={{ width: 7, backgroundColor: ACCENT_LIGHT }} />
                <div
                  className="flex-1 rounded-r-2xl flex overflow-hidden"
                  style={{ backgroundColor: stage.dark ? "#1e1e1e" : "#fff", border: `1px solid ${stage.dark ? "#333" : "#e0c8a8"}`, borderLeft: "none" }}
                >
                  <div className="flex-1 p-6">
                    <h3 className="font-bold text-base leading-tight mb-4" style={{ color: stage.dark ? ACCENT_LIGHT : ACCENT }}>
                      {stage.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          {j === 0 && item.endsWith(":") ? (
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT_LIGHT }}>{item}</span>
                          ) : (
                            <>
                              <span className="mt-0.5 flex-shrink-0">
                                <Icon name="CheckCircle2" size={15} style={{ color: ACCENT_LIGHT }} />
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: stage.dark ? "#d4d4d4" : "#444" }}>{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер CTA */}
      <section className="py-10 md:py-16 px-4 md:px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
            style={{ backgroundColor: "#ffffff", border: "1px solid #d5c8b5" }}
          >
            <div className="p-6 md:p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 leading-tight">
                Построим баню под ключ по готовому проекту или по индивидуальному заказу
              </h2>
              <p className="text-zinc-600 mb-7 leading-relaxed">
                Расчёт делается бесплатно! Менеджер свяжется с вами для уточнения деталей и составит подробный расчёт стоимости.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white text-base uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: ACCENT }}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="hidden md:flex items-end justify-center overflow-hidden bg-amber-50" style={{ minHeight: 320 }}>
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/a7698751-e9bf-41b3-9ba2-1c17ab2305ba.png"
                alt="Баня"
                className="object-cover w-full h-full"
                style={{ maxHeight: "360px" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Прайс */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-3">
              Стоимость строительства
            </h2>
            <p className="text-zinc-600 text-base md:text-lg">Цены актуальные — без скрытых доплат</p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {priceSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#e8e4dc", border: "1px solid #d5d0c5" }}
              >
                <button
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                      <Icon name={section.icon as "Home"} size={16} className="text-white" />
                    </div>
                    <span className="font-semibold text-zinc-900 text-sm md:text-base">{section.title}</span>
                  </div>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{ border: "1.5px solid #aaa", transform: openSection === section.id ? "rotate(45deg)" : "none" }}
                  >
                    <Icon name="Plus" size={16} className="text-zinc-600" />
                  </span>
                </button>
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-5 border-t border-zinc-300 pt-4 flex flex-col gap-2">
                        {section.items.map((item) => (
                          <div key={item.label} className="flex items-center justify-between py-2 border-b border-zinc-300/50 last:border-0">
                            <span className="text-zinc-700 text-sm">{item.label}</span>
                            <span className="text-sm font-bold ml-4 shrink-0" style={{ color: ACCENT }}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm text-center mt-6">* Точная стоимость — после выезда и осмотра участка. Выезд бесплатно.</p>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-3">
              Отзывы клиентов
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">Что говорят те, кто уже построил баню</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-zinc-100"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} style={{ color: "#F5C518" }} />
                  ))}
                </div>
                <p className="text-zinc-700 text-sm mb-5 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-900 font-bold text-sm">{r.name}</span>
                  <span className="text-xs text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">{r.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 px-4 md:px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-2">
              Вопросы, на которые
            </h2>
            <h2 className="text-2xl md:text-4xl font-black uppercase" style={{ color: ACCENT_LIGHT }}>
              у нас уже есть ответ
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#e8e4dc", border: "1px solid #d5d0c5" }}
              >
                <button
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-zinc-900 text-sm md:text-base pr-4">{item.q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ border: "1.5px solid #aaa" }}
                  >
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} className="text-zinc-600" />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-300 pt-4">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA финальный */}
      <section
        className="py-12 md:py-16 px-4 md:px-6 text-center"
        style={{ background: `linear-gradient(135deg, #3a1a08 0%, #6b3010 100%)` }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase">
              Нужна баня?
            </h2>
            <p className="text-zinc-300 mb-6 md:mb-8 text-base md:text-lg">
              Оставьте заявку — выедем на участок бесплатно и рассчитаем стоимость
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full md:w-auto px-6 md:px-10 py-4 rounded-xl font-black text-black text-base md:text-lg uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#F5C518" }}
            >
              Получить расчёт бесплатно
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} serviceTitle="Строительство бани" />
    </div>
  )
}