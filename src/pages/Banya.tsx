import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const banyaTypes = [
  { title: "Баня из бруса", price: "от 350 000 ₽", icon: "TreePine" },
  { title: "Баня из бревна", price: "от 420 000 ₽", icon: "Logs" },
  { title: "Каркасная баня", price: "от 220 000 ₽", icon: "Frame" },
  { title: "Баня из газобетона", price: "от 280 000 ₽", icon: "Building2" },
  { title: "Баня из кирпича", price: "от 500 000 ₽", icon: "Layers" },
  { title: "Баня-бочка", price: "от 80 000 ₽", icon: "Circle" },
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
        style={{ minHeight: 480, background: "linear-gradient(135deg, #09090B 0%, #18120a 60%, #09090B 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(234,100,8,0.13) 0%, transparent 70%)" }} />
        <div className="relative z-10 flex flex-col justify-center flex-1 max-w-6xl mx-auto w-full px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ backgroundColor: "rgba(234,100,8,0.15)", color: "#E86408" }}>
              Строительство бань
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Бани под ключ<br />
              <span style={{ color: "#E86408" }}>в Усть-Куте</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-8">
              Строим бани из бруса, бревна, каркаса и других материалов. Выезд и замер — бесплатно.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-base text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#E86408" }}
              >
                Получить смету
              </button>
              <a
                href="tel:+79500990931"
                className="px-8 py-4 rounded-xl font-bold text-base border border-zinc-700 text-white hover:border-zinc-500 transition-colors"
              >
                +7 (950) 099-09-31
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ВИДЫ БАНЬ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Виды бань</h2>
            <p className="text-zinc-400 text-base">Выбирайте материал под бюджет и участок — поможем с выбором бесплатно</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {banyaTypes.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-5 border border-zinc-800 flex flex-col gap-3 cursor-pointer hover:border-orange-700 transition-colors"
                style={{ backgroundColor: "#111113" }}
                onClick={() => setIsFormOpen(true)}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(234,100,8,0.12)" }}>
                  <Icon name={b.icon} size={20} style={{ color: "#E86408" }} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{b.title}</div>
                  <div className="text-orange-500 font-extrabold text-base">{b.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* СТАТИСТИКА */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0f" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-5xl font-black mb-2" style={{ color: "#E86408" }}>{s.num}</div>
              <div className="text-white font-bold text-lg mb-1">{s.title}</div>
              <div className="text-zinc-400 text-sm mb-2">{s.subtitle}</div>
              <div className="text-zinc-500 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ПОЧЕМУ МЫ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Почему выбирают нас</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6 border border-zinc-800"
                style={{ backgroundColor: "#111113" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold" style={{ color: "#E86408" }}>{r.num}</span>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(234,100,8,0.12)" }}>
                    <Icon name={r.icon} size={16} style={{ color: "#E86408" }} />
                  </div>
                  <span className="text-white font-bold text-sm">{r.title}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0f" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Как мы работаем</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {workStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 border border-zinc-800"
                style={{ backgroundColor: stage.dark ? "#0a0a0c" : "#111113" }}
              >
                <div className="text-3xl font-black mb-3" style={{ color: "#E86408" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="text-white font-bold text-base mb-3">{stage.title}</div>
                <ul className="flex flex-col gap-1.5">
                  {stage.items.map((item, j) => (
                    <li key={j} className={`text-sm ${j === 0 ? "text-zinc-500 font-medium" : "text-zinc-400"}`}>
                      {j !== 0 && <span style={{ color: "#E86408" }}>— </span>}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРАЙС */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Цены на строительство бань</h2>
            <p className="text-zinc-400 text-base">Нажмите на раздел, чтобы увидеть подробный прайс</p>
          </motion.div>
          <div className="flex flex-col gap-3">
            {priceSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-800 overflow-hidden"
                style={{ backgroundColor: "#111113" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(234,100,8,0.12)" }}>
                      <Icon name={section.icon} size={16} style={{ color: "#E86408" }} />
                    </div>
                    <span className="text-white font-bold">{section.title}</span>
                  </div>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`text-zinc-500 transition-transform duration-200 ${openSection === section.id ? "rotate-180" : ""}`}
                  />
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
                      <div className="px-6 pb-5 border-t border-zinc-800">
                        <table className="w-full mt-4">
                          <tbody>
                            {section.items.map((item, j) => (
                              <tr key={j} className={j % 2 === 0 ? "bg-zinc-900/40" : ""}>
                                <td className="py-2.5 px-3 text-zinc-300 text-sm rounded-l-lg">{item.label}</td>
                                <td className="py-2.5 px-3 text-right font-bold text-sm rounded-r-lg" style={{ color: "#E86408" }}>{item.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          onClick={() => setIsFormOpen(true)}
                          className="mt-4 w-full py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90"
                          style={{ backgroundColor: "#E86408" }}
                        >
                          Получить точную смету
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0f" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Отзывы клиентов</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-zinc-800"
                style={{ backgroundColor: "#111113" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: "#E86408" }} />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm">{r.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(234,100,8,0.12)", color: "#E86408" }}>{r.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Частые вопросы</h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-800 overflow-hidden"
                style={{ backgroundColor: "#111113" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-bold text-sm pr-4">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`text-zinc-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-4">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Готовы построить баню?</h2>
            <p className="text-zinc-400 text-base mb-8">Оставьте заявку — бесплатно приедем, замерим и рассчитаем стоимость</p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-4 rounded-xl font-bold text-base text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#E86408" }}
            >
              Получить бесплатный расчёт
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />

      <OrderForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceTitle="Строительство бани"
      />
    </div>
  )
}