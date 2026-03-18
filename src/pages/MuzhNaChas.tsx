import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"

const services = [
  { icon: "Wrench", title: "Мелкий ремонт", desc: "Повесим полки, карнизы, картины, зеркала. Всё ровно и надёжно.", price: "от 300 ₽" },
  { icon: "Droplets", title: "Сантехника", desc: "Заменим смеситель, устраним течь, подключим технику.", price: "от 500 ₽" },
  { icon: "Zap", title: "Электрика", desc: "Розетки, выключатели, люстры, светильники под ключ.", price: "от 400 ₽" },
  { icon: "DoorOpen", title: "Двери и замки", desc: "Установим, отрегулируем, врежем замок или петли.", price: "от 600 ₽" },
  { icon: "Hammer", title: "Сборка мебели", desc: "Соберём любую мебель — кровать, шкаф, кухня, стеллаж.", price: "от 500 ₽" },
  { icon: "PaintRoller", title: "Отделочные работы", desc: "Поклейка обоев, покраска, шпаклёвка, плинтуса.", price: "от 800 ₽" },
  { icon: "Monitor", title: "Монтаж техники", desc: "Повесим телевизор, кондиционер, вытяжку, карниз.", price: "от 400 ₽" },
  { icon: "Drill", title: "Любое сверление", desc: "Пробурим отверстие в любой стене — кирпич, бетон, плитка.", price: "от 200 ₽" },
]

const stats = [
  { value: "500+", label: "выполненных заказов" },
  { value: "4.9", label: "рейтинг клиентов" },
  { value: "60 мин", label: "среднее время выезда" },
  { value: "0 ₽", label: "за выезд и консультацию" },
]

const steps = [
  {
    num: "01",
    title: "Опишите задачу",
    desc: "Напишите в Telegram или WhatsApp — что нужно сделать. Фото помогает.",
    icon: "MessageSquare",
  },
  {
    num: "02",
    title: "Получите цену",
    desc: "Скажем стоимость сразу — без скрытых доплат и неожиданностей.",
    icon: "BadgeCheck",
  },
  {
    num: "03",
    title: "Мастер приедет",
    desc: "Приедем в удобное время. Со своим инструментом. Ничего не нужно готовить.",
    icon: "Car",
  },
  {
    num: "04",
    title: "Платите по факту",
    desc: "Оплата только после выполнения. Наличные или перевод на карту.",
    icon: "Wallet",
  },
]

const reviews = [
  {
    name: "Ольга М.",
    text: "Вызвала мастера повесить карниз и полку. Приехал быстро, всё сделал аккуратно. Цена приятно удивила!",
    service: "Монтаж карнизов",
    stars: 5,
  },
  {
    name: "Дмитрий К.",
    text: "Собрали шкаф-купе за 2 часа. Работали чисто, убрали за собой. Буду обращаться ещё.",
    service: "Сборка мебели",
    stars: 5,
  },
  {
    name: "Светлана Р.",
    text: "Заменили смеситель на кухне и в ванной. Быстро и без лишних слов. Рекомендую.",
    service: "Сантехника",
    stars: 5,
  },
]

export default function MuzhNaChas() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Муж на час в Усть-Куте | МАСТЕРОФФ — мелкий ремонт от 300 ₽</title>
        <meta
          name="description"
          content="Муж на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели. Выезд в день обращения. От 300 руб. Звоните: +7 (908) 646-16-87"
        />
        <meta
          name="keywords"
          content="муж на час усть-кут, мелкий ремонт усть-кут, мастер на дом усть-кут, повесить полку усть-кут, сборка мебели усть-кут"
        />
        <meta property="og:title" content="Муж на час в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Муж на час — мелкий ремонт, сантехника, электрика. Выезд в день обращения." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/muzh-na-chas" />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero — как везде */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
          >
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d10a119d-8182-45c5-84eb-26f31e594144.jpg"
              alt="Муж на час"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "20px", bottom: 0, top: 0, height: "100%", width: "auto", zIndex: 5 }}
            />
            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Муж на час<br />в Усть-Куте
                </h1>
                <ul className="space-y-3 mb-8">
                  {[
                    "Повесим, прикрутим, починим — любые мелкие задачи",
                    "Сантехника, электрика, двери и замки",
                    "Соберём мебель быстро и аккуратно",
                    "Смонтируем технику, карнизы, полки",
                    "Приедем в день обращения со своим инструментом",
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
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-sky-500 transition-colors bg-zinc-800/60">
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
                  <a href="https://wa.me/79086461687" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-green-500 transition-colors bg-zinc-800/60">
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
                  <a href="tel:+79086461687"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Позвонить</div>
                      <div className="text-xs text-zinc-400">+7 (908) 646-16-87</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </motion.div>
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
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-orange-500 mb-1">{s.value}</div>
                  <div className="text-zinc-400 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Услуги — сетка с ценами */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-4">
                <Icon name="Sparkles" size={12} />
                Что мы делаем
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Список услуг и цены</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:bg-zinc-800/80"
                >
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Icon name={s.icon} size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-zinc-800">
                    <span className="text-orange-400 font-bold text-sm">{s.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Как работаем — горизонтальный таймлайн */}
        <section className="px-4 md:px-10 pb-20" style={{ backgroundColor: "#0d0d10" }}>
          <div className="max-w-6xl mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-4">
                <Icon name="Route" size={12} />
                Простой процесс
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Как мы работаем</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Линия соединения на десктопе */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <Icon name={step.icon} size={28} className="text-orange-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-4">
                <Icon name="Star" size={12} />
                Отзывы клиентов
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Что говорят о нас</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={14} className="text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{r.text}"</p>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div>
                      <div className="text-white font-medium text-sm">{r.name}</div>
                      <div className="text-zinc-500 text-xs">{r.service}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Icon name="User" size={14} className="text-orange-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — финальный блок */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a1108 0%, #0d0d10 50%, #0a1a0a 100%)" }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(34,197,94,0.05) 0%, transparent 60%)",
                }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

              <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    Мастера онлайн — выезд сегодня
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                    Нужен мастер<br />прямо сейчас?
                  </h2>
                  <p className="text-zinc-400 text-base">
                    Звоните или пишите — ответим за 2 минуты.<br />Выезд в день обращения, оплата по факту.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
                  <a href="tel:+79086461687"
                    className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-xl transition-colors font-semibold text-base">
                    <Icon name="Phone" size={18} />
                    +7 (908) 646-16-87
                  </a>
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-7 py-4 rounded-xl transition-colors font-semibold text-base">
                    <Icon name="Send" size={18} />
                    Написать в Telegram
                  </a>
                  <a href="https://wa.me/79086461687" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-7 py-4 rounded-xl transition-colors font-semibold text-base">
                    <Icon name="MessageCircle" size={18} />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
