import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"

const services = [
  { icon: "Wrench", title: "Мелкий ремонт", desc: "Повесим полки, карнизы, картины, зеркала. Всё ровно и надёжно.", price: "от 300 ₽" },
  { icon: "Droplets", title: "Сантехника", desc: "Заменим смеситель, устраним течь, подключим стиральную машину.", price: "от 500 ₽" },
  { icon: "Zap", title: "Электрика", desc: "Розетки, выключатели, люстры, светильники — под ключ.", price: "от 400 ₽" },
  { icon: "DoorOpen", title: "Двери и замки", desc: "Установим, отрегулируем, врежем замок или поменяем петли.", price: "от 600 ₽" },
  { icon: "Hammer", title: "Сборка мебели", desc: "Соберём кровать, шкаф, кухню, стеллаж — быстро и аккуратно.", price: "от 500 ₽" },
  { icon: "PaintRoller", title: "Отделочные работы", desc: "Поклейка обоев, покраска, шпаклёвка, плинтуса.", price: "от 800 ₽" },
  { icon: "Monitor", title: "Монтаж техники", desc: "Повесим телевизор, кондиционер, вытяжку, карниз.", price: "от 400 ₽" },
  { icon: "Drill", title: "Сверление", desc: "Пробурим отверстие в любой стене — кирпич, бетон, плитка.", price: "от 200 ₽" },
]

const advantages = [
  { icon: "Users", title: "Опытные мастера", desc: "Все мастера проверены и имеют опыт работы от 3 лет. Гарантируем качество и надёжность." },
  { icon: "LayoutGrid", title: "Широкий спектр услуг", desc: "Сантехника, электрика, сборка мебели, монтаж, мелкий ремонт и многое другое." },
  { icon: "UserCheck", title: "Индивидуальный подход", desc: "Каждый клиент уникален. Подберём решение под ваши задачи и бюджет." },
  { icon: "BadgeDollarSign", title: "Лучшие цены", desc: "Честная стоимость без скрытых доплат. Цену скажем сразу — до начала работ." },
]

const steps = [
  { num: "01", icon: "MessageSquare", title: "Опишите задачу", desc: "Напишите в Telegram или WhatsApp — что нужно сделать. Фото помогает точнее назвать цену." },
  { num: "02", icon: "BadgeCheck", title: "Получите цену", desc: "Скажем стоимость сразу — без скрытых доплат и неожиданностей после работы." },
  { num: "03", icon: "Car", title: "Мастер приедет", desc: "Приедем в удобное время. Со своим инструментом. Ничего не нужно готовить." },
  { num: "04", icon: "Wallet", title: "Платите по факту", desc: "Оплата только после выполнения. Наличные или перевод на карту." },
]

const reviews = [
  { name: "Ольга М.", text: "Вызвала мастера повесить карниз и полку. Приехал быстро, всё сделал аккуратно. Цена приятно удивила!", service: "Монтаж карнизов", stars: 5 },
  { name: "Дмитрий К.", text: "Собрали шкаф-купе за 2 часа. Работали чисто, убрали за собой. Буду обращаться ещё.", service: "Сборка мебели", stars: 5 },
  { name: "Светлана Р.", text: "Заменили смеситель на кухне и в ванной. Быстро и без лишних слов. Рекомендую.", service: "Сантехника", stars: 5 },
]

const stats = [
  { value: "500+", label: "выполненных заказов" },
  { value: "4.9", label: "рейтинг клиентов" },
  { value: "60 мин", label: "среднее время выезда" },
  { value: "0 ₽", label: "за выезд и консультацию" },
]

function HighlightWord({ children }: { children: string }) {
  return (
    <span className="relative inline-block px-3 py-0.5 rounded-md mx-1" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>
      {children}
    </span>
  )
}

export default function MuzhNaChas() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Муж на час в Усть-Куте | МАСТЕРОФФ — мелкий ремонт от 300 ₽</title>
        <meta name="description" content="Муж на час в Усть-Куте. Мелкий ремонт, сантехника, электрика, сборка мебели. Выезд в день обращения. От 300 руб. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="муж на час усть-кут, мелкий ремонт усть-кут, мастер на дом усть-кут, повесить полку усть-кут, сборка мебели усть-кут" />
        <meta property="og:title" content="Муж на час в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quantum-data-exploration.poehali.app/muzh-na-chas" />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero — как везде */}
        <div className="w-full flex justify-center px-4 md:px-10 pt-28 mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden"
          >
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/72c5344d-457d-4867-91bc-87a986493536.png"
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>в сети
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>в сети
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
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60">
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
                Берёмся за любые домашние задачи — от закрутить шуруп до полноценного мелкого ремонта
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
                  style={{ backgroundColor: "#1a1a1a", transition: "box-shadow 0.3s", boxShadow: "0 0 0 0 transparent" }}
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
              Мы предлагаем профессиональные услуги мастеров на дом для решения любых бытовых задач. Наша команда обладает необходимыми навыками и опытом.
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
                    <Icon name={a.icon} size={isEdge ? 34 : 42} className="mb-5" style={{ color: "#F5C518" }} />
                    <h3 className="font-bold leading-snug mb-3" style={{ color: "#F5C518", fontSize: isEdge ? "13px" : "15px" }}>{a.title}</h3>
                    <p className="text-zinc-400 leading-relaxed" style={{ fontSize: "13px" }}>{a.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Как работаем */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Как мы <HighlightWord>работаем</HighlightWord>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(245,197,24,0.3), transparent)" }} />
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
                    <div className="w-20 h-20 rounded-2xl border border-zinc-800 flex items-center justify-center" style={{ backgroundColor: "#111113" }}>
                      <Icon name={step.icon} size={28} style={{ color: "#F5C518" }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold" style={{ backgroundColor: "#F5C518" }}>
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
        <section className="px-4 md:px-10 pb-20" style={{ backgroundColor: "#0d0d10" }}>
          <div className="max-w-6xl mx-auto py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Отзывы <HighlightWord>клиентов</HighlightWord>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-6 flex flex-col gap-4 border border-zinc-800"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={14} style={{ color: "#F5C518" }} />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{r.text}"</p>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div>
                      <div className="text-white font-medium text-sm">{r.name}</div>
                      <div className="text-zinc-500 text-xs">{r.service}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                      <Icon name="User" size={14} style={{ color: "#F5C518" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Связь с нами */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Связь с <HighlightWord>нами</HighlightWord>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Левая колонка */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 border border-zinc-800" style={{ backgroundColor: "#111113" }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#F5C518" }}>У вас остались вопросы?</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Не ждите, пока задача станет проблемой! Свяжитесь с нами прямо сейчас — мы готовы помочь с любым бытовым вопросом.
                </p>
                <div className="flex gap-3 mb-6">
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: "#25D366" }}>
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </a>
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: "#229ED9" }}>
                    <Icon name="Send" size={20} className="text-white" />
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="tel:+79500990931" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm">
                    <Icon name="Phone" size={16} style={{ color: "#F5C518" }} />
                    +7 (950) 099-09-31
                  </a>
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm">
                    <Icon name="Send" size={16} style={{ color: "#F5C518" }} />
                    @masteroff_uk
                  </a>
                </div>
              </motion.div>

              {/* Правая колонка — кнопки связи */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
                  <span className="text-zinc-400 text-sm">Мастера онлайн — выезд сегодня</span>
                </div>
                <a href="tel:+79500990931"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#F5C518" }}>
                  <Icon name="Phone" size={20} className="text-black" />
                  +7 (950) 099-09-31
                </a>
                <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white border border-zinc-700 hover:border-yellow-500/50 transition-all"
                  style={{ backgroundColor: "#111113" }}>
                  <Icon name="Send" size={20} style={{ color: "#F5C518" }} />
                  Написать в Telegram
                </a>
                <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white border border-zinc-700 hover:border-yellow-500/50 transition-all"
                  style={{ backgroundColor: "#111113" }}>
                  <Icon name="MessageCircle" size={20} style={{ color: "#F5C518" }} />
                  Написать в WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}