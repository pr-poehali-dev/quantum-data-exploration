import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const services = [
  { icon: "DoorOpen", title: "Распашные шкафы", desc: "Однодверные, двухдверные, четырёхдверные, пеналы, угловые стеллажи — под любой размер.", price: "от 700 ₽" },
  { icon: "Layers", title: "Шкафы-купе", desc: "Стандартные, встроенные, угловые шкафы-купе. Разборка для переезда.", price: "от 2 000 ₽" },
  { icon: "UtensilsCrossed", title: "Кухни", desc: "Установка кухонного гарнитура, монтаж мойки, встроенной техники, вытяжки.", price: "от 3 000 ₽" },
  { icon: "BedDouble", title: "Спальни", desc: "Кровати с подъёмным механизмом, гардеробы, комоды, тумбы, трюмо.", price: "от 400 ₽" },
  { icon: "Table", title: "Столы", desc: "Письменные, угловые, компьютерные столы с тумбами, надстройками, полками.", price: "от 800 ₽" },
  { icon: "Home", title: "Прихожие", desc: "Шкафы, тумбы под обувь, угловые стеллажи, зеркала, подсветка.", price: "от 500 ₽" },
  { icon: "Scissors", title: "Перетяжка мебели", desc: "Перетяжка стульев, кресел, диванов любой сложности. Новый вид за 1 день.", price: "от 500 ₽" },
  { icon: "Sparkles", title: "Химчистка мебели", desc: "Профессиональная чистка диванов и кресел. Вывод пятен, дезинфекция.", price: "от 1 000 ₽" },
]

const advantages = [
  { icon: "Users", title: "Опытные мастера", desc: "Все сборщики имеют опыт работы от 3 лет. Знакомы с мебелью любых брендов: ИКЕА, Хофф, Лазурит и другими." },
  { icon: "ShieldCheck", title: "Гарантия на работу", desc: "Даём письменную гарантию на все виды сборки. Если что-то не так — приедем и исправим бесплатно." },
  { icon: "BadgeDollarSign", title: "Честные цены", desc: "Стоимость по прайсу — без накруток и скрытых доплат. Цену называем сразу, до начала работы." },
  { icon: "Zap", title: "Быстрый выезд", desc: "Мастер приедет в день обращения. Инструменты с собой. Ничего не нужно готовить заранее." },
]

const steps = [
  { num: "01", icon: "MessageSquare", title: "Опишите задачу", desc: "Напишите в Telegram или WhatsApp — что нужно собрать. Фото инструкции или мебели помогает точнее назвать цену." },
  { num: "02", icon: "BadgeCheck", title: "Получите цену", desc: "Назовём стоимость по прайсу сразу — без скрытых доплат и неожиданностей после работы." },
  { num: "03", icon: "Car", title: "Мастер приедет", desc: "Приедем в удобное время со своим инструментом. Ничего не нужно готовить." },
  { num: "04", icon: "Wallet", title: "Платите по факту", desc: "Оплата только после выполнения и вашей проверки. Наличными или переводом на карту." },
]

const reviews = [
  { name: "Наталья В.", text: "Заказала сборку шкафа-купе ИКЕА. Мастер приехал в тот же день, собрал быстро и аккуратно. Отличная работа!", service: "Шкаф-купе", stars: 5 },
  { name: "Андрей С.", text: "Собирали кухню под ключ: установили гарнитур, мойку, врезали розетки. Всё чисто, ровно, без лишних вопросов.", service: "Установка кухни", stars: 5 },
  { name: "Марина Л.", text: "Перетянули диван — он стал как новый! Мастер сам подсказал хороший материал. Очень довольна результатом.", service: "Перетяжка дивана", stars: 5 },
]

const stats = [
  { value: "1 000+", label: "собранных предметов мебели" },
  { value: "В день", label: "выезд мастера" },
  { value: "12+", label: "видов мебели" },
  { value: "0 ₽", label: "за выезд и оценку" },
]

interface PriceItem { label: string; price: string }
interface PriceSection { id: string; title: string; icon: string; items: PriceItem[] }

const priceSections: PriceSection[] = [
  {
    id: "rasphnoj", title: "Сборка распашного шкафа", icon: "DoorOpen",
    items: [
      { label: "Однодверный", price: "700 руб." },
      { label: "Двухдверный", price: "1 000 руб." },
      { label: "Трехдверный", price: "1 500 руб." },
      { label: "Четырехдверный", price: "2 000 руб." },
      { label: "Однодверный угловой стеллаж", price: "800 руб." },
      { label: "Две двери-гармошка", price: "1 500 руб." },
      { label: "Шкаф-пенал", price: "800 руб." },
      { label: "Комбинированный с ящиками", price: "1 800 руб." },
      { label: "Монтаж встроенного распашного шкафа", price: "2 000 руб." },
    ],
  },
  {
    id: "kupe", title: "Сборка шкафа-купе", icon: "Layers",
    items: [
      { label: "Стандартные шкафы-купе 1–3 двери", price: "2 000 руб." },
      { label: "Шкаф-купе Икеа, Хофф с разобранными дверями", price: "2 500 руб." },
      { label: "Монтаж встроенных шкафов-купе", price: "3 000 руб." },
      { label: "Разборка шкафа-купе, подготовка к переезду", price: "1 500 руб." },
    ],
  },
  {
    id: "uglovoj", title: "Сборка углового шкафа", icon: "LayoutTemplate",
    items: [
      { label: "Распашной однодверный угловой шкаф", price: "1 000 руб." },
      { label: "Двухдверный распашной угловой шкаф", price: "1 500 руб." },
      { label: "Встроенный угловой шкаф-купе", price: "2 500 руб." },
      { label: "Многосекционный", price: "4 000 руб." },
      { label: "Внутренняя подсветка", price: "300 руб." },
    ],
  },
  {
    id: "komod", title: "Сборка комода", icon: "Package",
    items: [
      { label: "До 5 ящиков", price: "500 руб." },
      { label: "От 5 ящиков", price: "800 руб." },
      { label: "Пеленальный комод", price: "1 000 руб." },
      { label: "Тумба + два ящика", price: "400 руб." },
      { label: "Комбинированный", price: "1 200 руб." },
      { label: "Угловой", price: "1 200 руб." },
      { label: "Радиусный", price: "1 800 руб." },
    ],
  },
  {
    id: "kuhnya", title: "Установка кухни", icon: "UtensilsCrossed",
    items: [
      { label: "Минимальный заказ на установку кухни", price: "3 000 руб." },
      { label: "Демонтаж старой кухни", price: "1 500 руб." },
      { label: "Замена столешницы", price: "2 000 руб." },
      { label: "Установка накладной розетки", price: "300 руб." },
      { label: "Врезной светильник", price: "150 руб." },
      { label: "Фильтр воды", price: "600 руб." },
      { label: "Вырез в фальш-панели для розетки", price: "150 руб." },
      { label: "Вырез под трубы", price: "150 руб." },
      { label: "Вырез под мойку", price: "700 руб." },
      { label: "Отверстие под ручку", price: "50 руб." },
      { label: "Встраиваемый холодильник", price: "1 500 руб." },
      { label: "Установка мойки с подключением", price: "800 руб." },
      { label: "Установка посудомоечной машины", price: "1 500 руб." },
      { label: "Установка встроенной СВЧ печи", price: "1 000 руб." },
      { label: "Вытяжка с подключением к вентиляции", price: "600 руб." },
      { label: "Установка встраиваемой стиральной машины", price: "1 000 руб." },
      { label: "Сборка кухни + навеска верхних шкафов", price: "1 100 р. м/п" },
    ],
  },
  {
    id: "modulnaya", title: "Сборка модульной мебели", icon: "Grid3x3",
    items: [
      { label: "Сборка стенки 3–5 секций", price: "2 500 руб." },
      { label: "Сервант для посуды", price: "1 800 руб." },
      { label: "Буфет", price: "1 000 руб." },
      { label: "Барная секция", price: "1 000 руб." },
      { label: "Гардероб 2-х дверный", price: "1 000 руб." },
      { label: "Установка подсветки", price: "500 руб." },
      { label: "Сборка горки 3 модуля", price: "2 000 руб." },
      { label: "Тумба под телевизор", price: "800 руб." },
      { label: "Навеска модуля", price: "500 руб." },
      { label: "Стяжка модуля", price: "50 руб." },
      { label: "Сборка ящика", price: "50 руб." },
      { label: "Вывод проводки с вырезом", price: "300 руб." },
    ],
  },
  {
    id: "stol", title: "Сборка стола", icon: "Table",
    items: [
      { label: "Стол с надстройкой", price: "800 руб." },
      { label: "Стол с тумбой и надстройкой", price: "1 200 руб." },
      { label: "Стол письменный", price: "800 руб." },
      { label: "Стол угловой", price: "800 руб." },
      { label: "Стол комбинированный", price: "2 000 руб." },
      { label: "Стол письменный для школьника", price: "1 000 руб." },
      { label: "Стол с двумя тумбами", price: "1 500 руб." },
      { label: "Навеска полки над столом", price: "500 руб." },
      { label: "Вырез для проводов", price: "300 руб." },
    ],
  },
  {
    id: "spalnya", title: "Сборка спальни", icon: "BedDouble",
    items: [
      { label: "Кровать с подъёмным механизмом", price: "2 000 руб." },
      { label: "Двуспальная кровать", price: "1 200 руб." },
      { label: "Кровать с выкатными ящиками", price: "1 500 руб." },
      { label: "Сборка основания кровати", price: "500 руб." },
      { label: "Сборка ортопедической решётки", price: "1 000 руб." },
      { label: "Гардероб 3-х дверный", price: "2 000 руб." },
      { label: "Платяной шкаф 4-х дверный", price: "2 500 руб." },
      { label: "Установка внутреннего наполнения по проекту", price: "500 руб." },
      { label: "Прикроватная тумба с двумя ящиками", price: "400 руб." },
      { label: "Комод с ящиками", price: "800 руб." },
      { label: "Туалетный столик", price: "800 руб." },
      { label: "Трюмо с зеркалом", price: "800 руб." },
    ],
  },
  {
    id: "prihozhaya", title: "Сборка прихожей", icon: "Home",
    items: [
      { label: "Шкаф, тумба, зеркало", price: "2 000 руб." },
      { label: "Тумба под обувь", price: "600 руб." },
      { label: "Стеллаж угловой", price: "500 руб." },
      { label: "Установка подсветки", price: "500 руб." },
    ],
  },
  {
    id: "remont", title: "Ремонт мебели", icon: "Wrench",
    items: [
      { label: "Ремонт каркаса", price: "от 1 000 руб." },
      { label: "Ремонт пружинного блока", price: "от 1 500 руб." },
      { label: "Замена наполнителя (ППУ)", price: "от 2 000 руб." },
      { label: "Ремонт корпусной мебели и замена фурнитуры", price: "от 1 000 руб." },
    ],
  },
  {
    id: "peretyazhka", title: "Перетяжка мебели", icon: "Scissors",
    items: [
      { label: "Перетяжка стульев", price: "от 500 руб." },
      { label: "Перетяжка кресел", price: "от 2 000 руб." },
      { label: "Перетяжка дивана (2-ка)", price: "от 4 000 руб." },
      { label: "Перетяжка дивана (3-ка)", price: "от 5 000 руб." },
    ],
  },
  {
    id: "himchistka", title: "Химчистка мягкой мебели", icon: "Sparkles",
    items: [
      { label: "Кресло", price: "от 1 000 руб." },
      { label: "Диван (2-ка)", price: "от 2 500 руб." },
      { label: "Диван (3-ка)", price: "от 3 500 руб." },
    ],
  },
]

function HighlightWord({ children }: { children: string }) {
  return (
    <span className="relative inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>
      {children}
    </span>
  )
}

const allWorks = [
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/29329eca-8a80-4dc5-bcc0-2c5f65b97c2d.png",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/2a95c4de-e46a-4dbb-858e-e9bc070a4c66.png",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/2744f248-505e-4749-8c21-7b7e6e34cdd4.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/68ff25b5-3703-4e0b-a358-d1505c11e119.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/67beef40-b5b8-4a2f-a923-790739827e9d.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/643afe1d-2d4f-44ba-a9b2-ad26766ef330.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/0a83affa-22f9-4a55-93e7-1bab5ecfc9ca.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/cfdaafd8-a6f1-45e2-a0bc-a06f3cc84032.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/9f935c95-d664-43a2-aef2-f71dbb8552ed.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7e3d4cb4-90be-43d6-a07c-cded4ebe2c2d.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/e6a9c1f9-24cc-42c7-9657-532bd21c7c28.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/3aaf7f6b-0af2-45d6-b5e0-fb5d07a8f8cb.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/8cab30db-2774-4554-9f22-2d283bc74029.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/40d9f95f-567f-4db5-a762-2220a7341578.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f0ece068-6867-46a2-85e0-0263b6f98aa3.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/5130534a-8c83-48ad-bd7e-6d2f281d62dd.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7f76e43b-4482-4d54-ba52-9cc1adde1d75.jpg",
]

const STEP = 8

function WorksSection() {
  const [shown, setShown] = useState(STEP)
  const visible = allWorks.slice(0, shown)

  return (
    <section className="px-4 md:px-10 pb-20" style={{ backgroundColor: "#0d0d10" }}>
      <div className="max-w-6xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Примеры <HighlightWord>наших работ</HighlightWord>
          </h2>
          <p className="text-zinc-400 mt-4 text-sm max-w-xl mx-auto">Реальные фото выполненных заказов наших мастеров</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % STEP) * 0.04 }}
              className="rounded-2xl overflow-hidden aspect-square bg-zinc-800"
            >
              <img src={src} alt={`Пример работы ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
        {shown < allWorks.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShown(v => Math.min(v + STEP, allWorks.length))}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-zinc-700 text-white font-semibold hover:border-zinc-500 transition-colors"
            >
              <Icon name="ChevronDown" size={18} />
              Загрузить ещё ({allWorks.length - shown} фото)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function AccordionSection({ section }: { section: PriceSection }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5C51820" }}>
            <Icon name={section.icon} size={20} style={{ color: "#F5C518" }} />
          </div>
          <span className="text-white font-semibold text-left">{section.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500 hidden sm:block">{section.items.length} позиций</span>
          <Icon name="ChevronDown" size={20} className={`text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 px-6 py-4">
              {section.items.map((item, index) => (
                <div key={index} className={`flex items-center justify-between py-3 ${index < section.items.length - 1 ? "border-b border-zinc-800/60" : ""}`}>
                  <span className="text-sm text-zinc-300 pr-4">{item.label}</span>
                  <span className="text-sm font-bold whitespace-nowrap" style={{ color: "#F5C518" }}>{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SborkaMebeli() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Сборка мебели в Усть-Куте | МАСТЕРОФФ — от 400 руб.</title>
        <meta name="description" content="Профессиональная сборка мебели в Усть-Куте. Шкафы, кухни, кровати, комоды, прихожие. Выезд в день обращения. Прайс-лист онлайн. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="сборка мебели усть-кут, сборщик мебели усть-кут, сборка шкафа купе усть-кут, установка кухни усть-кут, сборка кровати усть-кут, перетяжка мебели усть-кут, химчистка мебели усть-кут" />
        <meta property="og:title" content="Сборка мебели в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Сборка любой мебели в Усть-Куте. Шкафы-купе, кухни, спальни, прихожие. Цены от 400 руб. Выезд в день обращения." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/sborka-mebeli" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Сборка мебели в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" }
        })}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
          >
            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Сборка мебели<br />в Усть-Куте
                </h1>
                <ul className="space-y-3 mb-8">
                  {[
                    "Соберём любую мебель — шкафы, кровати, кухни, столы",
                    "Шкафы-купе ИКЕА, Хофф, Лазурит и других брендов",
                    "Установка кухонного гарнитура под ключ",
                    "Перетяжка и ремонт мягкой мебели",
                    "Мастер приедет в день обращения со своим инструментом",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300 text-base">
                      <span className="text-orange-500 text-xl font-bold leading-none">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-sm mb-3">Напишите нам в мессенджер для бесплатной консультации:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-sky-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Telegram</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />в сети
                      </div>
                    </div>
                  </a>
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-green-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">WhatsApp</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />в сети
                      </div>
                    </div>
                  </a>
                  <a href="tel:+79500990931"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                      <Icon name="Phone" size={14} className="text-black" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Позвонить</div>
                      <div className="text-xs text-zinc-400">+7 (950) 099-09-31</div>
                    </div>
                  </a>
                  <a href="https://max.ru/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #4F8EF7 0%, #9B59F5 100%)" }}>
                      <Icon name="MessageCircle" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">MAX</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />в сети
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-end justify-center relative">
                <img
                  src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ab56fcb6-9ba8-4ea1-84a8-67bcac486383.png"
                  alt="Мастер по сборке мебели"
                  className="absolute pointer-events-none"
                  style={{ right: "20px", bottom: 0, top: 0, height: "100%", width: "auto", zIndex: 5, objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Физ и юр лица */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-amber-400" />
                </div>
                <h2 className="text-white text-xl font-bold">Физическим лицам</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">Помогаем жителям Усть-Кута с любой мебелью: от простой тумбочки до полноценной кухни или спального гарнитура. Мастер приедет в день обращения и соберёт всё аккуратно.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Разовые вызовы и срочный выезд", "Оплата наличными или картой", "Выезд в день обращения", "Без предоплаты"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon name="Check" size={15} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-amber-400" />
                </div>
                <h2 className="text-white text-xl font-bold">Юридическим лицам</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">Работаем с организациями и ИП: меблировка офисов, магазинов, гостиниц. Заключаем договор, предоставляем закрывающие документы. Возможно абонентское обслуживание.</p>
              <ul className="flex flex-col gap-2 mt-1">
                {["Официальный договор", "Полный пакет документов", "Работа с НДС", "Абонентское обслуживание"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon name="Check" size={15} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <section className="px-4 md:px-10 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl p-6 text-center border border-zinc-800"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="text-3xl font-extrabold mb-1" style={{ color: "#F5C518" }}>{s.value}</div>
                  <div className="text-zinc-400 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Наши <HighlightWord>услуги</HighlightWord>
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm">
                Собираем, устанавливаем и реставрируем любую мебель — корпусную, мягкую, встроенную
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-2xl p-8 flex flex-col items-center text-center gap-4 cursor-pointer"
                  style={{ backgroundColor: "#1a1a1a", transition: "box-shadow 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,197,24,0.15)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <Icon name={s.icon} size={40} style={{ color: "#F5C518" }} />
                  <h3 className="font-bold text-base leading-snug" style={{ color: "#F5C518" }}>{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-auto">
                    <span className="font-bold text-sm text-white">{s.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Почему выбирают нас */}
        <section className="px-4 md:px-10 pb-20" style={{ backgroundColor: "#0d0d10" }}>
          <div className="max-w-6xl mx-auto py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Почему выбирают <HighlightWord>нас?</HighlightWord>
              </h2>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto text-sm">
              Опытные мастера, честные цены и гарантия на все работы. Собираем мебель любых брендов быстро и аккуратно.
            </motion.p>
            <div className="flex flex-col md:flex-row" style={{ borderRadius: "20px", overflow: "hidden" }}>
              {advantages.map((a, i) => {
                const isEdge = i === 0 || i === advantages.length - 1
                return (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -6, scale: 1.03, zIndex: 10 }}
                    className="flex flex-col items-center text-center cursor-pointer relative"
                    style={{
                      backgroundColor: "#1a1a1a",
                      padding: isEdge ? "32px 20px" : "48px 24px",
                      flex: isEdge ? "0 0 20%" : "1",
                      borderRight: i < advantages.length - 1 ? "1px solid #2a2a2a" : "none",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,197,24,0.18)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: "#F5C51820" }}>
                      <Icon name={a.icon} size={24} style={{ color: "#F5C518" }} />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2">{a.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{a.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Примеры работ */}
        <WorksSection />

        {/* Прайс-лист */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                <HighlightWord>Прайс-лист</HighlightWord> на сборку
              </h2>
              <p className="text-zinc-400 mt-4 text-sm">Нажмите на раздел, чтобы раскрыть цены</p>
            </motion.div>
            <div className="flex flex-col gap-3">
              {priceSections.map((section) => (
                <AccordionSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </section>

        {/* Как мы работаем */}
        <section className="px-4 md:px-10 pb-20" style={{ backgroundColor: "#0d0d10" }}>
          <div className="max-w-6xl mx-auto py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Как мы <HighlightWord>работаем</HighlightWord>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-800"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black" style={{ color: "#F5C518" }}>{step.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                      <Icon name={step.icon} size={20} className="text-zinc-300" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-base">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Отзывы <HighlightWord>клиентов</HighlightWord>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl p-6 border border-zinc-800 flex flex-col gap-4"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, idx) => (
                      <Icon key={idx} name="Star" size={16} style={{ color: "#F5C518" }} />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">"{r.text}"</p>
                  <div className="mt-auto pt-2 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">{r.name}</span>
                    <span className="text-zinc-500 text-xs">{r.service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-zinc-800 p-8 md:p-12 text-center"
              style={{ backgroundColor: "#111113" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Нужна точная стоимость?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm">
                Позвоните или напишите — мастер приедет, оценит объём работ и назовёт итоговую цену. Без скрытых доплат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+79500990931"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#F5C518", color: "#09090B" }}
                >
                  <Icon name="Phone" size={18} />
                  +7 (950) 099-09-31
                </a>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold border border-zinc-700 text-white hover:border-zinc-500 transition-colors"
                >
                  <Icon name="ClipboardList" size={18} />
                  Оставить заявку
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <FloatingCallButton />
        <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </>
  )
}