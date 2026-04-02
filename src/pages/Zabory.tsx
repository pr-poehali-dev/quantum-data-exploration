import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const fenceTypes = [
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/fc18cd29-d503-49d0-9996-6ea66c5e4ac3.jpg", title: "Забор из дерева", price: "от 800 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/23061f60-4b80-4b49-a1b5-d1fd936bb5d2.jpg", title: "Забор из евроштакетника", price: "от 1 200 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/e654d5a2-221b-404f-942f-d8789e2db474.jpg", title: "Забор из профлиста", price: "от 1 000 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/675f47f3-700b-478e-948c-3678e2554072.jpg", title: "Заборы 2D и 3D", price: "от 600 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/1352ae9f-d945-421d-991b-7deeef97623d.jpg", title: "Забор из сетки-рабицы", price: "от 350 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/5e369530-b4e2-4381-bd30-96126fec0b3b.jpg", title: "Забор-жалюзи", price: "от 2 000 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/5d660024-28ba-47b0-a378-cc5ae6706348.jpg", title: "Забор из кирпича", price: "от 4 000 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/228c946f-7f58-4198-9903-fb8ae6a4ec48.jpg", title: "Забор из профтрубы", price: "от 1 500 ₽/м²" },
  { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/bafbd5f6-4949-4759-b3ea-f9130acaa486.jpg", title: "Забор из поликарбоната", price: "от 1 100 ₽/м²" },
]

const stats = [
  {
    num: "15+",
    title: "Более 15 лет строим заборы",
    subtitle: "в Усть-Куте и Иркутской области.",
    desc: "Работаем с частными домами, дачами, промышленными объектами. Знаем все нюансы грунта и климата региона.",
  },
  {
    num: "5 000+",
    title: "5 000+ установленных заборов",
    subtitle: "по всей Иркутской области.",
    desc: "Наши бригады работают быстро и аккуратно. Убираем за собой мусор — сдаём объект в чистоте.",
  },
  {
    num: "9",
    title: "9 видов заборов в ассортименте",
    subtitle: "Профлист, евроштакетник, дерево, кирпич и другие.",
    desc: "Подберём материал под ваш бюджет и стиль участка. Помогаем с выбором и не навязываем лишнего.",
  },
]

const reasons = [
  { num: "01", icon: "Ruler", title: "Замер бесплатно", desc: "Выезжаем на объект, замеряем периметр и составляем смету — без оплаты за визит." },
  { num: "02", icon: "ShieldCheck", title: "Гарантия на работу", desc: "Даём гарантию на монтаж. Если что-то не так — приедем и исправим бесплатно." },
  { num: "03", icon: "BadgeDollarSign", title: "Честные цены", desc: "Смета до начала работ — никаких доплат в процессе. Цена фиксируется на старте." },
  { num: "04", icon: "Zap", title: "Быстрый выезд", desc: "Начинаем работу в день договорённости. Сроки соблюдаем — дорожим репутацией." },
  { num: "05", icon: "Hammer", title: "Своя бригада", desc: "Работаем без посредников — только штатные мастера с опытом от 5 лет." },
  { num: "06", icon: "Truck", title: "Доставка материалов", desc: "Привозим все материалы сами. Вам не нужно ничего искать и договариваться." },
]

const workStages = [
  {
    title: "Заявка и замер",
    items: ["Что входит:", "Звонок или заявка на сайте", "Выезд мастера на объект", "Замер периметра и сложности рельефа", "Консультация по материалам"],
    dark: false,
  },
  {
    title: "Смета и договор",
    items: ["Что входит:", "Подробная смета с ценами на материалы и работы", "Фиксированная стоимость без доплат", "Подписание договора", "Согласование сроков"],
    dark: true,
  },
  {
    title: "Монтаж забора",
    items: ["Что входит:", "Бурение ям под столбы", "Установка и бетонирование столбов", "Монтаж лаг и секций", "Установка калитки и ворот (при необходимости)"],
    dark: true,
  },
  {
    title: "Сдача и оплата",
    items: ["Что входит:", "Осмотр и приёмка объекта", "Уборка строительного мусора", "Передача гарантийных документов", "Оплата только после приёмки"],
    dark: false,
  },
]

const reviews = [
  { name: "Александр Т.", text: "Заказал забор из профлиста 40 метров. Сделали быстро и аккуратно. Столбы вкопаны ровно, швы чистые. Очень доволен!", service: "Профлист", stars: 5 },
  { name: "Ольга В.", text: "Ставили евроштакетник на даче. Приехали на следующий день после звонка. Материал качественный, мастера опытные.", service: "Евроштакетник", stars: 5 },
  { name: "Виктор П.", text: "Сетка-рабица на 60 метров. Сделали за один день. Цена оказалась ниже, чем предлагали другие. Рекомендую!", service: "Сетка-рабица", stars: 5 },
]

const faq = [
  { q: "Сколько стоит замер?", a: "Замер и выезд на объект — бесплатно. Мы оцениваем фронт работ, делаем замеры и сразу называем цену." },
  { q: "Как быстро начнёте работу?", a: "Как правило, выезжаем в день обращения или на следующий день. Начало монтажа — по договорённости, чаще всего в течение 1–3 дней после замера." },
  { q: "Какой забор лучше выбрать?", a: "Зависит от задачи. Профлист и евроштакетник — популярны и долговечны. Дерево — дешевле, но требует ухода. Кирпич — капитально, но дороже. Поможем выбрать на замере." },
  { q: "Вы работаете зимой?", a: "Да, работаем круглый год. Столбы бетонируем с учётом промерзания грунта. Зимой монтаж идёт немного дольше, но качество не страдает." },
  { q: "Что входит в гарантию?", a: "Гарантия распространяется на качество монтажа: ровность столбов, надёжность крепежа, герметичность швов. Если что-то пойдёт не так — бесплатно исправим." },
]

interface PriceItem { label: string; price: string }
interface PriceSection { id: string; title: string; icon: string; items: PriceItem[] }

const priceSections: PriceSection[] = [
  {
    id: "derevo", title: "Забор из дерева", icon: "TreePine",
    items: [
      { label: "Штакетник деревянный (м²)", price: "от 800 руб." },
      { label: "Доска горизонтальная (м²)", price: "от 1 000 руб." },
      { label: "Столб деревянный (шт.)", price: "от 300 руб." },
      { label: "Столб металлический в бетон (шт.)", price: "от 500 руб." },
      { label: "Покраска (м²)", price: "от 150 руб." },
    ],
  },
  {
    id: "evroshtaketnik", title: "Забор из евроштакетника", icon: "Fence",
    items: [
      { label: "Монтаж евроштакетника (м²)", price: "от 1 200 руб." },
      { label: "Установка столба в бетон (шт.)", price: "от 600 руб." },
      { label: "Монтаж лаги (п.м)", price: "от 200 руб." },
      { label: "Калитка с петлями и замком", price: "от 3 000 руб." },
      { label: "Ворота откатные (монтаж)", price: "от 8 000 руб." },
    ],
  },
  {
    id: "proflist", title: "Забор из профлиста", icon: "RectangleHorizontal",
    items: [
      { label: "Монтаж профлиста (м²)", price: "от 1 000 руб." },
      { label: "Установка столба в бетон (шт.)", price: "от 600 руб." },
      { label: "Монтаж лаги (п.м)", price: "от 200 руб." },
      { label: "Планка П-образная (п.м)", price: "от 100 руб." },
      { label: "Калитка из профлиста (монтаж)", price: "от 4 000 руб." },
    ],
  },
  {
    id: "2d3d", title: "Заборы 2D и 3D", icon: "Grid3x3",
    items: [
      { label: "Монтаж 2D-секции (шт.)", price: "от 400 руб." },
      { label: "Монтаж 3D-секции (шт.)", price: "от 600 руб." },
      { label: "Установка столба (шт.)", price: "от 400 руб." },
      { label: "Монтаж калитки (шт.)", price: "от 2 500 руб." },
    ],
  },
  {
    id: "setka", title: "Забор из сетки-рабицы", icon: "Network",
    items: [
      { label: "Натяжная сетка-рабица (м²)", price: "от 350 руб." },
      { label: "Секционная рабица (м²)", price: "от 500 руб." },
      { label: "Установка столба (шт.)", price: "от 300 руб." },
      { label: "Натяжение проволоки (п.м)", price: "от 50 руб." },
    ],
  },
  {
    id: "zhalyuzi", title: "Забор-жалюзи", icon: "Layers",
    items: [
      { label: "Монтаж ламелей (м²)", price: "от 2 000 руб." },
      { label: "Установка рамы и столбов (п.м)", price: "от 800 руб." },
      { label: "Калитка жалюзи (монтаж)", price: "от 5 000 руб." },
    ],
  },
  {
    id: "kirpich", title: "Забор из кирпича", icon: "Building2",
    items: [
      { label: "Столб кирпичный (шт.)", price: "от 3 000 руб." },
      { label: "Кладка столба с заполнением (м²)", price: "от 4 000 руб." },
      { label: "Фундамент ленточный (п.м)", price: "от 1 500 руб." },
      { label: "Колпак на столб (шт.)", price: "от 300 руб." },
    ],
  },
  {
    id: "proftruba", title: "Забор из профтрубы", icon: "Minus",
    items: [
      { label: "Монтаж секции из профтрубы (м²)", price: "от 1 500 руб." },
      { label: "Установка столба в бетон (шт.)", price: "от 700 руб." },
      { label: "Сварка (час)", price: "от 800 руб." },
      { label: "Покраска (м²)", price: "от 200 руб." },
      { label: "Калитка из профтрубы (монтаж)", price: "от 5 000 руб." },
    ],
  },
  {
    id: "polikarbonat", title: "Забор из поликарбоната", icon: "Sun",
    items: [
      { label: "Монтаж поликарбоната (м²)", price: "от 1 100 руб." },
      { label: "Установка столба (шт.)", price: "от 500 руб." },
      { label: "Монтаж рамы (п.м)", price: "от 300 руб." },
      { label: "Уплотнитель торцевой (п.м)", price: "от 80 руб." },
    ],
  },
]

export default function Zabory() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Строительство заборов в Усть-Куте — все виды ограждений | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство заборов в Усть-Куте: профлист, евроштакетник, дерево, сетка-рабица, кирпич, поликарбонат, 2D/3D-секции. Замер бесплатно. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="забор Усть-Кут, строительство заборов Усть-Кут, забор из профлиста, евроштакетник, сетка рабица, забор из дерева, установка забора" />
        <meta property="og:title" content="Строительство заборов в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Все виды заборов под ключ в Усть-Куте. Замер бесплатно. Быстрый выезд." />
        <link rel="canonical" href="https://servismasteroff.ru/zabory" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/e654d5a2-221b-404f-942f-d8789e2db474.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 60%, transparent 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl md:text-6xl font-black uppercase leading-tight mb-5 md:mb-6">
              <span style={{ color: "#F5C518" }}>Строительство </span><span className="text-white">заборов</span>
              <br />
              <span className="text-white">в Усть-Куте</span>
            </h1>

            <div
              className="inline-block w-full max-w-sm px-5 md:px-8 py-5 md:py-7 rounded-2xl mb-0 relative"
              style={{ backgroundColor: "rgba(0,0,0,0.65)", border: "1px solid rgba(245,197,24,0.3)" }}
            >
              <p className="text-white font-bold text-xl md:text-2xl mb-1">Под ключ</p>
              <p className="font-black text-3xl md:text-4xl mb-5 md:mb-6" style={{ color: "#F5C518" }}>ЗАМЕР БЕСПЛАТНО</p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="block w-full px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold text-black text-base md:text-lg uppercase tracking-normal md:tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#F5C518" }}
              >
                Получить расчёт
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Бонусы */}
      <div className="relative z-10 px-4 md:px-6 max-w-6xl mx-auto w-full" style={{ marginTop: "-36px", marginBottom: "-36px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 12px 50px rgba(0,0,0,0.5)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ backgroundColor: "#1a1a1a" }}>
            {[
              { icon: "Ruler", text: "Замер бесплатно", sub: "выезд на объект" },
              { icon: "ShieldCheck", text: "Гарантия на работу", sub: "всё по договору" },
              { icon: "BadgeDollarSign", text: "Фиксированная цена", sub: "без доплат" },
            ].map((b, i) => (
              <div
                key={b.text}
                className={`flex flex-row items-center gap-4 px-6 py-5 md:gap-5 md:px-10 md:py-7 ${i < 2 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}`}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl" style={{ backgroundColor: "#F5C518" }}>
                  <Icon name={b.icon as "Home"} size={22} className="text-black" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm md:text-base leading-tight">{b.text}</div>
                  <div className="text-zinc-400 text-sm mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

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
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-3" style={{ color: "#1a3a1a" }}>
              Компания «Мастерофф»
            </h2>
            <p className="text-zinc-500 text-lg">Строим заборы для частных домов, дач и предприятий.</p>
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
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ minHeight: "150px" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80')",
                      filter: "blur(2px) brightness(0.55) saturate(1.4)",
                      transform: "scale(1.08)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(160deg, rgba(20,70,20,0.6) 0%, rgba(50,120,50,0.35) 100%)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at center, rgba(100,200,100,0.18) 0%, transparent 70%)" }}
                  />
                  <span
                    className="relative z-10 font-black text-white"
                    style={{ fontSize: "52px", textShadow: "0 2px 24px rgba(0,0,0,0.5), 0 0 40px rgba(80,180,80,0.3)" }}
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

      {/* Виды заборов */}
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
              Виды заборов
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">Устанавливаем все популярные виды ограждений</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fenceTypes.map((s, i) => (
              <motion.div
                key={s.title}
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
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-bold text-base leading-tight">{s.title}</div>
                  <div className="text-sm font-semibold mt-1" style={{ color: "#F5C518" }}>{s.price}</div>
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
              <span style={{ color: "#4a9a4a" }}>6 причин</span>{" "}
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
                    style={{
                      fontSize: "110px",
                      color: "#4a9a4a",
                      opacity: 0.12,
                      lineHeight: 1,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.num}
                  </span>
                  <div
                    className="relative z-10 flex items-center justify-center rounded-2xl"
                    style={{ width: 58, height: 58, backgroundColor: "#f0f7f0", border: "2px solid #c8e6c8" }}
                  >
                    <Icon name={r.icon as "Home"} size={26} style={{ color: "#3a7a3a" }} />
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
              Полный цикл работ выполняется от 1 до 7 дней, в зависимости от объёма.
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
                <div
                  className="flex-shrink-0 rounded-l-2xl"
                  style={{ width: 7, backgroundColor: "#4a9a4a" }}
                />
                <div
                  className="flex-1 rounded-r-2xl flex overflow-hidden"
                  style={{
                    backgroundColor: stage.dark ? "#1e1e1e" : "#fff",
                    border: `1px solid ${stage.dark ? "#333" : "#cde0cd"}`,
                    borderLeft: "none",
                  }}
                >
                  <div className="flex-1 p-6">
                    <h3
                      className="font-bold text-base leading-tight mb-4"
                      style={{ color: stage.dark ? "#6dbf6d" : "#2d6a2d" }}
                    >
                      {stage.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          {j === 0 && item.endsWith(":") ? (
                            <span className="text-sm leading-relaxed" style={{ color: stage.dark ? "#aaa" : "#666" }}>{item}</span>
                          ) : (
                            <>
                              <span className="mt-0.5 flex-shrink-0">
                                <Icon name="CheckCircle2" size={15} style={{ color: "#4a9a4a" }} />
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

      {/* Баннер: Получить расчёт */}
      <section className="py-10 md:py-16 px-4 md:px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
            style={{ backgroundColor: "#e8e4dc", border: "1px solid #d5d0c5" }}
          >
            <div className="p-6 md:p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 leading-tight">
                Построим забор под ключ по одному из наших готовых проектов или по индивидуальному заказу
              </h2>
              <p className="text-zinc-600 mb-7 leading-relaxed">
                Расчёт делается бесплатно! Менеджер свяжется с вами для уточнения деталей и составит подробный расчёт стоимости.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white text-base uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#3a7a3a" }}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="hidden md:flex items-end justify-center overflow-hidden p-6">
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/23061f60-4b80-4b49-a1b5-d1fd936bb5d2.jpg"
                alt="Забор"
                className="w-full rounded-2xl object-cover"
                style={{ height: "260px" }}
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
              Стоимость установки
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
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#4a9a4a" }}>
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
                            <span className="text-sm font-bold ml-4 shrink-0" style={{ color: "#3a7a3a" }}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm text-center mt-6">* Точная стоимость — после выезда и замера. Замер бесплатно.</p>
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
            <p className="text-zinc-500 text-base md:text-lg">Что говорят те, кто уже заказал забор</p>
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
            <h2 className="text-2xl md:text-4xl font-black uppercase" style={{ color: "#3a7a3a" }}>
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
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
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

      {/* CTA */}
      <section
        className="py-12 md:py-16 px-4 md:px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase">
              Нужен забор?
            </h2>
            <p className="text-zinc-300 mb-6 md:mb-8 text-base md:text-lg">
              Оставьте заявку — выедем на замер бесплатно и рассчитаем стоимость
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
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}