import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingCallButton } from "@/components/FloatingCallButton"
import Icon from "@/components/ui/icon"

interface PriceItem {
  label: string
  price: string
}

interface PriceSection {
  id: string
  title: string
  icon: string
  items: PriceItem[]
}

const priceSections: PriceSection[] = [
  {
    id: "rasphnoj",
    title: "Сборка распашного шкафа",
    icon: "DoorOpen",
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
    id: "kupe",
    title: "Сборка шкафа-купе",
    icon: "Layers",
    items: [
      { label: "Стандартные шкафы-купе 1–3 двери", price: "2 000 руб." },
      { label: "Шкаф-купе Икеа, Хофф с разобранными дверями", price: "2 500 руб." },
      { label: "Монтаж встроенных шкафов-купе", price: "3 000 руб." },
      { label: "Разборка шкафа-купе, подготовка к переезду", price: "1 500 руб." },
    ],
  },
  {
    id: "uglovoj",
    title: "Сборка углового шкафа",
    icon: "LayoutTemplate",
    items: [
      { label: "Распашной однодверный угловой шкаф", price: "1 000 руб." },
      { label: "Двухдверный распашной угловой шкаф", price: "1 500 руб." },
      { label: "Встроенный угловой шкаф-купе", price: "2 500 руб." },
      { label: "Многосекционный", price: "4 000 руб." },
      { label: "Внутренняя подсветка", price: "300 руб." },
    ],
  },
  {
    id: "komod",
    title: "Сборка комода",
    icon: "Package",
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
    id: "kuhnya",
    title: "Установка кухни",
    icon: "UtensilsCrossed",
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
    id: "modulnaya",
    title: "Сборка модульной мебели",
    icon: "Grid3x3",
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
    id: "stol",
    title: "Сборка стола",
    icon: "Table",
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
    id: "spalnya",
    title: "Сборка спальни",
    icon: "BedDouble",
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
    id: "prihozhaya",
    title: "Сборка прихожей",
    icon: "Home",
    items: [
      { label: "Шкаф, тумба, зеркало", price: "2 000 руб." },
      { label: "Тумба под обувь", price: "600 руб." },
      { label: "Стеллаж угловой", price: "500 руб." },
      { label: "Установка подсветки", price: "500 руб." },
    ],
  },
  {
    id: "remont",
    title: "Ремонт мебели",
    icon: "Wrench",
    items: [
      { label: "Ремонт каркаса", price: "от 1 000 руб." },
      { label: "Ремонт пружинного блока", price: "от 1 500 руб." },
      { label: "Замена наполнителя (ППУ)", price: "от 2 000 руб." },
      { label: "Ремонт корпусной мебели и замена фурнитуры", price: "от 1 000 руб." },
    ],
  },
  {
    id: "peretyazhka",
    title: "Перетяжка мебели",
    icon: "Scissors",
    items: [
      { label: "Перетяжка стульев", price: "от 500 руб." },
      { label: "Перетяжка кресел", price: "от 2 000 руб." },
      { label: "Перетяжка дивана (2-ка)", price: "от 4 000 руб." },
      { label: "Перетяжка дивана (3-ка)", price: "от 5 000 руб." },
    ],
  },
  {
    id: "himchistka",
    title: "Химчистка мягкой мебели",
    icon: "Sparkles",
    items: [
      { label: "Кресло", price: "от 1 000 руб." },
      { label: "Диван (2-ка)", price: "от 2 500 руб." },
      { label: "Диван (3-ка)", price: "от 3 500 руб." },
    ],
  },
]

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
          <Icon
            name="ChevronDown"
            size={20}
            className={`text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
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
            <div className="border-t border-zinc-800">
              <div className="px-6 py-4">
                <div className="grid gap-0">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-3 ${
                        index < section.items.length - 1 ? "border-b border-zinc-800/60" : ""
                      }`}
                    >
                      <span className="text-sm text-zinc-300 pr-4">{item.label}</span>
                      <span
                        className="text-sm font-bold whitespace-nowrap"
                        style={{ color: "#F5C518" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SborkaMebeli() {
  return (
    <>
      <Helmet>
        <title>Сборка мебели в Усть-Куте | МАСТЕРОФФ — от 400 руб.</title>
        <meta
          name="description"
          content="Профессиональная сборка мебели в Усть-Куте. Шкафы, кухни, кровати, комоды, прихожие. Выезд в день обращения. Прайс-лист онлайн. Звоните: +7 (950) 099-09-31"
        />
        <meta
          name="keywords"
          content="сборка мебели усть-кут, сборщик мебели усть-кут, сборка шкафа усть-кут, установка кухни усть-кут, сборка кровати усть-кут, перетяжка мебели усть-кут, химчистка мебели усть-кут"
        />
        <meta property="og:title" content="Сборка мебели в Усть-Куте | МАСТЕРОФФ" />
        <meta
          property="og:description"
          content="Сборка любой мебели в Усть-Куте. Шкафы-купе, кухни, спальни, прихожие. Цены от 400 руб. Выезд в день обращения."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/sborka-mebeli" />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-12">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
                style={{ borderColor: "#F5C51840", color: "#F5C518", backgroundColor: "#F5C51810" }}
              >
                <Icon name="Hammer" size={14} />
                Профессиональная сборка мебели
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Сборка мебели<br />
                <span style={{ color: "#F5C518" }}>в Усть-Куте</span>
              </h1>

              <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
                Соберём любую мебель быстро и аккуратно. Шкафы, кухни, кровати, прихожие, офисная мебель — выезд в день обращения.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+79500990931"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#F5C518", color: "#09090B" }}
                >
                  <Icon name="Phone" size={18} />
                  Позвонить сейчас
                </a>
                <a
                  href="https://wa.me/79500990931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold border border-zinc-700 text-white hover:border-zinc-500 transition-colors"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {[
                { value: "от 400 ₽", label: "Минимальная цена" },
                { value: "В день", label: "Выезд мастера" },
                { value: "12+", label: "Видов мебели" },
                { value: "Гарантия", label: "На все работы" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-800 p-5 text-center"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Prайс-лист */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-20">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: "#F5C518" }}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Прайс-лист</h2>
                <span className="text-sm text-zinc-500 ml-2">— нажмите на раздел, чтобы раскрыть цены</span>
              </div>

              <div className="flex flex-col gap-3">
                {priceSections.map((section) => (
                  <AccordionSection key={section.id} section={section} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-20">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-zinc-800 p-8 md:p-12 text-center"
              style={{ backgroundColor: "#111113" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Нужна точная стоимость?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Позвоните нам — мастер приедет, оценит объём работ и назовёт итоговую цену. Без скрытых доплат.
              </p>
              <a
                href="tel:+79500990931"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F5C518", color: "#09090B" }}
              >
                <Icon name="Phone" size={18} />
                +7 (950) 099-09-31
              </a>
            </motion.div>
          </div>
        </div>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  )
}