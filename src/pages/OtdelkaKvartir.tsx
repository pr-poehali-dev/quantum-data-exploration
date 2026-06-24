import { useState } from "react"
import { Helmet } from "@/components/Helmet"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const HERO_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/96b30de2-deeb-4151-aed8-b0952d14597f.jpg"
const WORK_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/496e0053-cbc8-4d99-926c-c1b83b9fa5e6.jpg"
const KITCHEN_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/2e73ba0c-6d2b-4b20-bed8-1c201d2634a8.jpg"
const BEDROOM_IMG = "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/e347e49c-4a34-4bf0-832d-c99a4138e1a3.jpg"

const stats = [
  { num: "10+", label: "лет на рынке" },
  { num: "500+", label: "квартир сдано" },
  { num: "3", label: "года гарантии" },
  { num: "0", label: "скрытых платежей" },
]

const services = [
  {
    icon: "Layers",
    title: "Косметический ремонт",
    desc: "Обновим обои, покраску, напольное покрытие. Быстро и без пыли.",
    price: "от 800 ₽/м²",
  },
  {
    icon: "Hammer",
    title: "Капитальный ремонт",
    desc: "Полный ремонт с заменой коммуникаций, выравниванием стен, полов и потолков.",
    price: "от 2 500 ₽/м²",
  },
  {
    icon: "KeyRound",
    title: "Ремонт под ключ",
    desc: "Берём на себя всё — от замера до финальной уборки. Вы просто заезжаете.",
    price: "от 4 000 ₽/м²",
  },
  {
    icon: "Sofa",
    title: "Дизайн-проект",
    desc: "Создадим проект с визуализацией, подбором материалов и спецификацией.",
    price: "от 500 ₽/м²",
  },
  {
    icon: "Droplets",
    title: "Ванная и санузел",
    desc: "Укладка плитки, установка сантехники, гидроизоляция, вентиляция.",
    price: "от 35 000 ₽",
  },
  {
    icon: "Zap",
    title: "Электрика и сантехника",
    desc: "Замена проводки, установка розеток, труб, счётчиков с гарантией.",
    price: "от 15 000 ₽",
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
    title: "Опытные мастера",
    desc: "Все специалисты в штате, проверены и работают более 3 лет у нас.",
  },
  {
    num: "03",
    icon: "Medal",
    title: "Гарантия 3 года",
    desc: "Устраняем все недочёты за свой счёт в течение гарантийного срока.",
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
    desc: "Закупаем и доставляем материалы сами — по оптовым ценам.",
  },
]

const workStages = [
  {
    num: "1",
    title: "Замер и смета",
    desc: "Выезжаем на объект, делаем замеры, составляем детальную смету. Бесплатно и без обязательств.",
    dark: false,
  },
  {
    num: "2",
    title: "Подписание договора",
    desc: "Фиксируем объём, сроки и стоимость. Вы платите только после согласования — никаких сюрпризов.",
    dark: true,
  },
  {
    num: "3",
    title: "Закупка материалов",
    desc: "Закупаем материалы по вашему выбору или рекомендуем оптимальные варианты по оптовым ценам.",
    dark: false,
  },
  {
    num: "4",
    title: "Выполнение работ",
    desc: "Работаем поэтапно: черновые работы, чистовая отделка, установка. Еженедельные фотоотчёты.",
    dark: true,
  },
  {
    num: "5",
    title: "Сдача объекта",
    desc: "Принимаете работу вместе с мастером, подписываем акт. Финальная уборка включена.",
    dark: false,
  },
]

const galleryPhotos = [HERO_IMG, KITCHEN_IMG, BEDROOM_IMG, WORK_IMG]

const faq = [
  {
    q: "Сколько стоит ремонт квартиры под ключ?",
    a: "Стоимость зависит от площади, состояния квартиры и выбранных материалов. Косметический ремонт — от 800 ₽/м², капитальный — от 2 500 ₽/м², под ключ — от 4 000 ₽/м². Точную стоимость рассчитываем после замера.",
  },
  {
    q: "Как долго длится ремонт квартиры?",
    a: "Косметический ремонт однушки — 2–3 недели. Капитальный ремонт двушки — 1,5–2 месяца. Ремонт под ключ — от 2 до 4 месяцев в зависимости от сложности.",
  },
  {
    q: "Можно ли делать ремонт, пока я живу в квартире?",
    a: "Да, при косметическом ремонте в большинстве случаев можно. При капитальном и ремонте под ключ рекомендуем временно переехать — это ускорит работы и снизит дискомфорт.",
  },
  {
    q: "Даёте ли вы гарантию на работы?",
    a: "Да, мы даём официальную гарантию 3 года на все выполненные работы. Все недочёты устраняем за свой счёт. Гарантия прописана в договоре.",
  },
  {
    q: "Нужно ли самому покупать материалы?",
    a: "Нет, мы берём это на себя. Закупаем по вашему выбору или предлагаем проверенных поставщиков. Все чеки предоставляем — вы платите ровно столько, сколько стоят материалы.",
  },
]

export default function OtdelkaKvartir() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Отделка квартир в Усть-Куте под ключ | Бригада мастеров</title>
        <meta name="description" content="Ремонт и отделка квартир в Усть-Куте под ключ. Косметический и капитальный ремонт, дизайн-проект. Гарантия 3 года. Звоните!" />
      </Helmet>
      <Navbar />
      <FloatingCallButton />

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "80svh" }}>
        <img
          src={HERO_IMG}
          alt="Отделка квартир"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
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
              Отделка квартир<br />
              <span className="text-yellow-400">под ключ</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Делаем ремонт качественно и в срок. Косметический, капитальный, дизайнерский — берём любые задачи.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Получить смету
              </button>
              <a
                href="tel:+79148910000"
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

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Что мы делаем</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
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
                <div className="text-yellow-400 font-bold text-base mt-auto">{s.price}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4" style={{ backgroundColor: "#111113" }}>
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
                style={{ backgroundColor: "#09090B" }}
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

      {/* GALLERY */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">Наши работы</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Примеры готовых квартир</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden aspect-square cursor-pointer group relative"
                onClick={() => setLightboxIdx(i)}
              >
                <img src={photo} alt="Пример работы" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
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
            <img src={WORK_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Бесплатный замер<br />и смета за 24 часа
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Оставьте заявку — выедем, замерим и пришлём смету. Без обязательств.
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

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightboxIdx(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={galleryPhotos[lightboxIdx]}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + galleryPhotos.length) % galleryPhotos.length) }}
          >
            <Icon name="ChevronLeft" size={40} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % galleryPhotos.length) }}
          >
            <Icon name="ChevronRight" size={40} />
          </button>
        </div>
      )}

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} defaultService="Отделка квартир" />
      <Footer />
    </div>
  )
}
