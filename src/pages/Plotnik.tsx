import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const services = [
  { icon: "DoorOpen", title: "Установка дверей", desc: "Межкомнатные и входные двери под ключ. Подгонка по размеру, установка коробки, наличников, замков.", price: "от 1 500 ₽" },
  { icon: "Layers", title: "Монтаж напольных покрытий", desc: "Укладка ламината, паркетной доски, линолеума. Выравнивание основания, плинтусы.", price: "от 200 ₽/м²" },
  { icon: "LayoutTemplate", title: "Обшивка стен и потолков", desc: "Вагонка, МДФ-панели, рейки, деревянные декоративные покрытия — любые материалы.", price: "от 300 ₽/м²" },
  { icon: "Hammer", title: "Изготовление деревянных конструкций", desc: "Перегородки, антресоли, ниши, подиумы, декоративные балки под заказ.", price: "от 2 000 ₽" },
  { icon: "Frame", title: "Монтаж деревянной лестницы", desc: "Сборка, установка и подключение готовых лестниц. Балясины, поручни, ступени.", price: "от 5 000 ₽" },
  { icon: "Scissors", title: "Замена наличников и плинтусов", desc: "Демонтаж старых, установка новых. Стыковка в углах, герметизация, прокраска.", price: "от 80 ₽/п.м" },
  { icon: "Package", title: "Изготовление полок и стеллажей", desc: "Деревянные полки на заказ по вашим размерам. Крепление к стенам любого типа.", price: "от 500 ₽" },
  { icon: "Wrench", title: "Мелкий столярный ремонт", desc: "Рассохшиеся двери, скрипящий пол, сломанные петли, задиры на мебели — исправим быстро.", price: "от 300 ₽" },
]

const advantages = [
  { icon: "Hammer", title: "Свой инструмент", desc: "Профессиональный столярный инструмент с собой. Не нужно ничего готовить и покупать." },
  { icon: "ShieldCheck", title: "Гарантия на работу", desc: "Даём гарантию на все виды столярных работ. Если что-то не так — приедем и исправим бесплатно." },
  { icon: "BadgeDollarSign", title: "Честные цены", desc: "Стоимость по прайсу — без накруток. Цену называем сразу, до начала работы." },
  { icon: "Zap", title: "Выезд в день заявки", desc: "Плотник приедет сегодня. Работаем по всему городу без выходных с 8:00 до 22:00." },
]

const steps = [
  { num: "01", icon: "MessageSquare", title: "Опишите задачу", desc: "Позвоните или напишите в Telegram — расскажите что нужно сделать. Фото помогает точнее назвать цену." },
  { num: "02", icon: "BadgeCheck", title: "Получите цену", desc: "Назовём стоимость по прайсу сразу — без скрытых доплат и неожиданностей." },
  { num: "03", icon: "Car", title: "Мастер приедет", desc: "Плотник приедет в удобное время со своим инструментом. Ничего не нужно готовить." },
  { num: "04", icon: "Wallet", title: "Платите по факту", desc: "Оплата только после выполнения и вашей проверки. Наличными или переводом." },
]

const reviews = [
  { name: "Игорь М.", text: "Установили межкомнатные двери в три комнаты. Работа аккуратная, всё ровно. Приехали на следующий день после звонка.", service: "Установка дверей", stars: 5 },
  { name: "Светлана Р.", text: "Заказала укладку ламината в спальне. Мастер сделал быстро и чисто. Плинтусы под цвет, швы ровные. Очень довольна!", service: "Укладка ламината", stars: 5 },
  { name: "Дмитрий К.", text: "Делал полки в кладовой под заказ. Точно в размер, хорошо закреплены. Посоветовал хорошее дерево по бюджету.", service: "Полки на заказ", stars: 5 },
]

const stats = [
  { value: "500+", label: "выполненных столярных работ" },
  { value: "В день", label: "выезд мастера" },
  { value: "8+", label: "видов работ" },
  { value: "0 ₽", label: "за выезд и оценку" },
]

interface PriceItem { label: string; price: string }
interface PriceSection { id: string; title: string; icon: string; items: PriceItem[] }

const priceSections: PriceSection[] = [
  {
    id: "dveri", title: "Установка дверей", icon: "DoorOpen",
    items: [
      { label: "Установка межкомнатной двери", price: "1 500 руб." },
      { label: "Установка входной двери", price: "2 500 руб." },
      { label: "Замена дверного полотна", price: "800 руб." },
      { label: "Установка наличников (комплект)", price: "600 руб." },
      { label: "Установка замка", price: "400 руб." },
      { label: "Установка петель (3 шт.)", price: "500 руб." },
      { label: "Подрезка двери по высоте", price: "300 руб." },
      { label: "Уплотнитель по периметру", price: "300 руб." },
    ],
  },
  {
    id: "pol", title: "Укладка напольных покрытий", icon: "Layers",
    items: [
      { label: "Укладка ламината (м²)", price: "от 200 руб." },
      { label: "Укладка паркетной доски (м²)", price: "от 300 руб." },
      { label: "Укладка линолеума (м²)", price: "от 150 руб." },
      { label: "Демонтаж старого покрытия (м²)", price: "100 руб." },
      { label: "Установка порожка", price: "200 руб." },
      { label: "Установка плинтуса (п.м)", price: "80 руб." },
    ],
  },
  {
    id: "obshivka", title: "Обшивка стен и потолков", icon: "LayoutTemplate",
    items: [
      { label: "Вагонка (м²)", price: "от 300 руб." },
      { label: "МДФ-панели (м²)", price: "от 350 руб." },
      { label: "Рейки декоративные (м²)", price: "от 400 руб." },
      { label: "Демонтаж старой обшивки (м²)", price: "150 руб." },
      { label: "Монтаж деревянной рейки (п.м)", price: "100 руб." },
    ],
  },
  {
    id: "polki", title: "Полки и стеллажи", icon: "Package",
    items: [
      { label: "Навеска одной полки", price: "500 руб." },
      { label: "Полка на заказ (под размер)", price: "от 800 руб." },
      { label: "Стеллаж 3–5 полок", price: "от 2 000 руб." },
      { label: "Антресоль", price: "от 3 000 руб." },
      { label: "Подиум деревянный", price: "от 5 000 руб." },
    ],
  },
  {
    id: "remont", title: "Мелкий столярный ремонт", icon: "Wrench",
    items: [
      { label: "Ремонт скрипящего пола", price: "от 300 руб." },
      { label: "Регулировка двери", price: "300 руб." },
      { label: "Замена петли", price: "200 руб." },
      { label: "Ремонт дверной коробки", price: "500 руб." },
      { label: "Герметизация щелей в полу", price: "от 200 руб." },
    ],
  },
]

export default function Plotnik() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Плотник на дом — услуги плотника в Усть-Куте | МАСТЕРОФФ</title>
        <meta name="description" content="Услуги плотника в Усть-Куте: установка дверей, укладка ламината, обшивка стен, полки на заказ, мелкий столярный ремонт. Выезд в день заявки. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="плотник Усть-Кут, услуги плотника, установка дверей, укладка ламината, столярные работы, плотник на дом" />
        <meta property="og:title" content="Плотник на дом — услуги плотника в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Услуги плотника в Усть-Куте: установка дверей, укладка ламината, обшивка стен, полки на заказ. Выезд в день заявки." />
        <link rel="canonical" href="https://servismasteroff.ru/plotnik" />
      </Helmet>

      <Navbar />

      <main className="pt-20" style={{ backgroundColor: "#09090B", color: "#fff" }}>

        {/* Hero */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                  <span className="text-zinc-400 text-sm">Мастера онлайн — выезд сегодня</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Плотник{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>
                    на дом
                  </span>{" "}
                  в Усть-Куте
                </h1>
                <p className="text-zinc-400 text-lg mb-8">
                  Установка дверей, укладка ламината, обшивка стен, полки на заказ и любой столярный ремонт. Опытный мастер с инструментом — приедет в день заявки.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="tel:+79500990931"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base whitespace-nowrap"
                    style={{ backgroundColor: "#F5C518", color: "#09090B" }}
                  >
                    <Icon name="Phone" size={18} />
                    +7 (950) 099-09-31
                  </a>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-white border border-zinc-700 hover:border-yellow-500/50 transition-colors whitespace-nowrap"
                    style={{ backgroundColor: "#111113" }}
                  >
                    <Icon name="ClipboardList" size={18} style={{ color: "#F5C518" }} />
                    Оставить заявку
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl p-4" style={{ backgroundColor: "#1a1a1a" }}>
                      <div className="text-xl font-extrabold" style={{ color: "#F5C518" }}>{s.value}</div>
                      <div className="text-zinc-400 text-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="rounded-2xl overflow-hidden border border-zinc-800 p-6" style={{ backgroundColor: "#1a1a1a" }}>
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-zinc-800">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                      <Icon name="Hammer" size={22} className="text-black" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Плотник МАСТЕРОФФ</div>
                      <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        Принимает заявки
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm mb-5">Добрый день! 👋 Расскажите, что нужно сделать — назову цену и приеду в удобное время.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0f0f11" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Виды столярных работ</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">Полный спектр плотницких и столярных услуг на дому</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Стоимость услуг</h2>
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
            <p className="text-zinc-500 text-sm text-center mt-6">* Окончательная стоимость — после осмотра. Выезд для оценки бесплатно.</p>
          </div>
        </section>

        {/* Как работаем */}
        <section className="py-16 px-6" style={{ backgroundColor: "#09090B" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Как мы работаем</h2>
              <p className="text-zinc-400">Просто и прозрачно — от звонка до результата</p>
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
        <section className="py-16 px-6" style={{ backgroundColor: "#09090B" }}>
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
                  <span className="text-zinc-400 text-sm">Мастер онлайн — выезд сегодня</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Нужен плотник?{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>Звоните!</span>
                </h2>
                <p className="text-zinc-400 text-sm">Ответим за 2 минуты. Работаем 8:00 — 22:00 без выходных.</p>
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

      </main>

      <Footer />
      <FloatingCallButton />

      {isFormOpen && (
        <OrderForm onClose={() => setIsFormOpen(false)} defaultService="Плотник" />
      )}
    </>
  )
}
