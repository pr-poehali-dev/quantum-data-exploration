import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const fenceTypes = [
  { icon: "TreePine", title: "Забор из дерева", desc: "Классический деревянный забор — штакетник, доска, бревно. Экологично, надёжно, легко ремонтируется.", price: "от 800 ₽/м²" },
  { icon: "Fence", title: "Забор из евроштакетника", desc: "Металлический штакетник — популярный выбор. Прочный, красивый, не требует покраски.", price: "от 1 200 ₽/м²" },
  { icon: "RectangleHorizontal", title: "Забор из профлиста", desc: "Надёжный сплошной забор. Хорошая шумозащита и приватность. Быстрый монтаж.", price: "от 1 000 ₽/м²" },
  { icon: "Grid3x3", title: "Заборы 2D и 3D", desc: "Сварные секции из проволоки. 3D-панели прочнее, не прогибаются. Идеальны для дачи.", price: "от 600 ₽/м²" },
  { icon: "Network", title: "Забор из сетки-рабицы", desc: "Бюджетный вариант для быстрого ограждения. Натяжная или секционная установка.", price: "от 350 ₽/м²" },
  { icon: "Layers", title: "Забор-жалюзи", desc: "Алюминиевые или стальные ламели под углом — пропускают воздух, но скрывают участок.", price: "от 2 000 ₽/м²" },
  { icon: "Building2", title: "Забор из кирпича", desc: "Капитальное ограждение с долгим сроком службы. Столбы или сплошная кладка.", price: "от 4 000 ₽/м²" },
  { icon: "Minus", title: "Забор из профтрубы", desc: "Сварной забор из квадратных труб. Прочный, современный дизайн, не ржавеет под грунтом.", price: "от 1 500 ₽/м²" },
  { icon: "Sun", title: "Забор из поликарбоната", desc: "Лёгкий и прозрачный. Пропускает свет, защищает от ветра. Отлично смотрится на даче.", price: "от 1 100 ₽/м²" },
]

const advantages = [
  { icon: "Ruler", title: "Замер бесплатно", desc: "Выезжаем на объект, замеряем периметр и составляем смету — без оплаты за визит." },
  { icon: "ShieldCheck", title: "Гарантия на работу", desc: "Даём гарантию на монтаж. Если что-то не так — приедем и исправим бесплатно." },
  { icon: "BadgeDollarSign", title: "Честные цены", desc: "Смета до начала работ — никаких доплат в процессе. Цена фиксируется на старте." },
  { icon: "Zap", title: "Быстрый выезд", desc: "Начинаем работу в день договорённости. Сроки соблюдаем — дорожим репутацией." },
]

const steps = [
  { num: "01", icon: "MessageSquare", title: "Заявка и замер", desc: "Позвоните или напишите. Выедем на объект, замерим и назовём стоимость." },
  { num: "02", icon: "FileText", title: "Смета и договор", desc: "Фиксируем цену в смете. Никаких сюрпризов — всё честно и прозрачно." },
  { num: "03", icon: "Hammer", title: "Монтаж забора", desc: "Бурим ямы, устанавливаем столбы, монтируем секции. Убираем за собой мусор." },
  { num: "04", icon: "Wallet", title: "Сдача и оплата", desc: "Принимаете работу, проверяете качество — и только потом платите." },
]

const reviews = [
  { name: "Александр Т.", text: "Заказал забор из профлиста 40 метров. Сделали быстро и аккуратно. Столбы вкопаны ровно, швы чистые. Очень доволен!", service: "Профлист", stars: 5 },
  { name: "Ольга В.", text: "Ставили евроштакетник на даче. Приехали на следующий день после звонка. Материал качественный, мастера опытные.", service: "Евроштакетник", stars: 5 },
  { name: "Виктор П.", text: "Сетка-рабица на 60 метров. Сделали за один день. Цена оказалась ниже, чем предлагали другие. Рекомендую!", service: "Сетка-рабица", stars: 5 },
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
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Строительство заборов в Усть-Куте — все виды ограждений | МАСТЕРОФФ</title>
        <meta name="description" content="Строительство заборов в Усть-Куте: профлист, евроштакетник, дерево, сетка-рабица, кирпич, поликарбонат, 2D/3D-секции. Замер бесплатно. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="забор Усть-Кут, строительство заборов Усть-Кут, забор из профлиста, евроштакетник, сетка рабица, забор из дерева, установка забора" />
        <meta property="og:title" content="Строительство заборов в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Все виды заборов под ключ в Усть-Куте. Замер бесплатно. Быстрый выезд." />
        <link rel="canonical" href="https://servismasteroff.ru/zabory" />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
          >
            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Строительство<br />заборов<br />в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Все виды заборов — под ключ",
                    "Замер и выезд на объект бесплатно",
                    "Профлист, евроштакетник, дерево, кирпич",
                    "Сетка-рабица, 2D/3D-панели, поликарбонат",
                    "Установка калиток и ворот",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300 text-base">
                      <span className="text-orange-500 text-xl font-bold leading-none">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-zinc-400 text-sm mb-3">
                  Напишите нам в мессенджер для бесплатной консультации:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-sky-500 transition-colors bg-zinc-800/60 whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Telegram</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-green-500 transition-colors bg-zinc-800/60 whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">WhatsApp</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                  <a href="tel:+79500990931"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60 whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Позвонить</div>
                      <div className="text-xs text-zinc-400">+7 (950) 099-09-31</div>
                    </div>
                  </a>
                  <a href="https://max.ru/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60 whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #4F8EF7 0%, #9B59F5 100%)" }}>
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">MAX</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        в сети
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </motion.div>
        </div>

        {/* Виды заборов */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0f0f11" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Виды заборов</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">Устанавливаем все популярные виды ограждений</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fenceTypes.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl p-5 flex flex-col gap-3 border border-zinc-800 hover:border-yellow-500/30 transition-colors"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                    <Icon name={s.icon as "Home"} size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">{s.title}</div>
                    <div className="text-zinc-400 text-sm">{s.desc}</div>
                  </div>
                  <div className="mt-auto pt-2 border-t border-zinc-800">
                    <span className="text-sm font-bold" style={{ color: "#F5C518" }}>{s.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 px-6" style={{ backgroundColor: "#09090B" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Почему выбирают нас</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl p-5 border border-zinc-800"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#1f1f22" }}>
                    <Icon name={a.icon as "Home"} size={20} style={{ color: "#F5C518" }} />
                  </div>
                  <div className="text-white font-bold mb-2">{a.title}</div>
                  <div className="text-zinc-400 text-sm">{a.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Прайс */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0f0f11" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Стоимость установки</h2>
              <p className="text-zinc-400">Цены актуальные — без скрытых доплат</p>
            </motion.div>
            <div className="space-y-3">
              {priceSections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-zinc-800 overflow-hidden"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <button
                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                        <Icon name={section.icon as "Home"} size={16} className="text-black" />
                      </div>
                      <span className="text-white font-semibold">{section.title}</span>
                    </div>
                    <Icon
                      name="ChevronDown"
                      size={18}
                      className={`text-zinc-400 transition-transform duration-200 ${openSection === section.id ? "rotate-180" : ""}`}
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
                        <div className="px-6 pb-4 border-t border-zinc-800 pt-4 space-y-2">
                          {section.items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-0">
                              <span className="text-zinc-300 text-sm">{item.label}</span>
                              <span className="text-sm font-bold ml-4 shrink-0" style={{ color: "#F5C518" }}>{item.price}</span>
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

        {/* Как работаем */}
        <section className="py-16 px-6" style={{ backgroundColor: "#09090B" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Как мы работаем</h2>
              <p className="text-zinc-400">Просто и прозрачно — от заявки до готового забора</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl p-5 border border-zinc-800 relative"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="text-4xl font-black mb-3 opacity-10 absolute top-4 right-5" style={{ color: "#F5C518" }}>{step.num}</div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#1f1f22" }}>
                    <Icon name={step.icon as "Home"} size={20} style={{ color: "#F5C518" }} />
                  </div>
                  <div className="text-white font-bold mb-2">{step.title}</div>
                  <div className="text-zinc-400 text-sm">{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0f0f11" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Отзывы клиентов</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl p-6 border border-zinc-800"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={14} style={{ color: "#F5C518" }} />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm mb-4">«{r.text}»</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">{r.name}</span>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">{r.service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#09090B" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                  <span className="text-zinc-400 text-sm">Принимаем заявки — выезд сегодня</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Нужен забор?{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>Звоните!</span>
                </h2>
                <p className="text-zinc-400 text-sm">Замер бесплатно. Работаем 8:00 — 22:00 без выходных.</p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
                <a
                  href="tel:+79500990931"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-black hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#F5C518" }}
                >
                  <Icon name="Phone" size={18} className="text-black" />
                  +7 (950) 099-09-31
                </a>
                <a
                  href="https://t.me/masteroff_uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white border border-zinc-700 hover:border-yellow-500/50 transition-colors whitespace-nowrap"
                  style={{ backgroundColor: "#111113" }}
                >
                  <Icon name="Send" size={18} style={{ color: "#F5C518" }} />
                  Написать в Telegram
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingCallButton />

      {isFormOpen && (
        <OrderForm onClose={() => setIsFormOpen(false)} defaultService="Забор" />
      )}
    </>
  )
}
