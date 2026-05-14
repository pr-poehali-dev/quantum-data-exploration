import { motion } from "framer-motion"
import { Helmet } from "@/components/Helmet"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AdvantagesSection } from "@/components/AdvantagesSection"
import { WhyUsSection } from "@/components/WhyUsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const services = [
  {
    icon: "Home",
    title: "Генеральная уборка",
    desc: "Полная уборка квартиры или дома: мытьё окон, плинтусов, сантехники, кухни. Уберём годами накопившиеся загрязнения.",
    price: "от 3 000 ₽",
    color: "#F5C518",
    bg: "rgba(245,197,24,0.08)",
  },
  {
    icon: "Sparkles",
    title: "Поддерживающая уборка",
    desc: "Регулярная уборка для поддержания чистоты: пылесос, мытьё полов, протирка поверхностей, санузел.",
    price: "от 1 500 ₽",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
  },
  {
    icon: "Building2",
    title: "Уборка после ремонта",
    desc: "Уберём строительную пыль, цементные разводы, остатки краски и стройматериалов. Приведём помещение в жилой вид.",
    price: "от 4 000 ₽",
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
  },
  {
    icon: "Sofa",
    title: "Химчистка мягкой мебели",
    desc: "Чистка диванов, кресел, матрасов профессиональным оборудованием. Выведем пятна, запахи, обеззаразим.",
    price: "от 1 000 ₽",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    icon: "Car",
    title: "Уборка офисов",
    desc: "Ежедневная или разовая уборка офисных помещений: полы, поверхности, санузлы, кухня, вынос мусора.",
    price: "от 2 000 ₽",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
  },
  {
    icon: "Droplets",
    title: "Мытьё окон",
    desc: "Профессиональная мойка окон снаружи и внутри. Рамы, стёкла, подоконники — без разводов и следов.",
    price: "от 100 ₽/окно",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
  },
]

const prices = [
  { name: "Студия / 1-комн.", general: "3 000 ₽", support: "1 500 ₽", afterRepair: "4 000 ₽" },
  { name: "2-комнатная", general: "4 000 ₽", support: "2 000 ₽", afterRepair: "5 500 ₽" },
  { name: "3-комнатная", general: "5 500 ₽", support: "2 800 ₽", afterRepair: "7 000 ₽" },
  { name: "4+ комнат", general: "от 7 000 ₽", support: "от 3 500 ₽", afterRepair: "от 9 000 ₽" },
  { name: "Офис до 50 м²", general: "3 500 ₽", support: "2 000 ₽", afterRepair: "5 000 ₽" },
  { name: "Офис до 100 м²", general: "6 000 ₽", support: "3 500 ₽", afterRepair: "8 500 ₽" },
]

const whyItems = [
  { icon: "ShieldCheck", title: "Проверенные клинеры", desc: "Все сотрудники прошли проверку. Работаем официально." },
  { icon: "Package", title: "Своё оборудование", desc: "Привозим профессиональную химию и технику. Вам ничего не нужно." },
  { icon: "Clock", title: "Выезд в день звонка", desc: "Принимаем заявки ежедневно. Приедем в удобное время." },
  { icon: "BadgeCheck", title: "Гарантия качества", desc: "Если что-то не понравилось — бесплатно переделаем." },
  { icon: "Wallet", title: "Фиксированная цена", desc: "Называем цену до начала работ. Никаких доплат на месте." },
  { icon: "Leaf", title: "Безопасная химия", desc: "Используем сертифицированные средства. Безопасно для детей и животных." },
]

const faq = [
  { q: "Сколько времени занимает уборка?", a: "Зависит от площади и типа уборки. Поддерживающая уборка — 1,5–3 часа. Генеральная — 4–8 часов. Уборка после ремонта — от 6 часов." },
  { q: "Нужно ли мне быть дома во время уборки?", a: "Не обязательно. Многие клиенты оставляют ключ или открывают дверь и уходят по делам." },
  { q: "Вы привозите свои средства?", a: "Да, всё необходимое оборудование и профессиональную химию мы привозим с собой. Вам не нужно ничего покупать." },
  { q: "Как оплатить услугу?", a: "Принимаем оплату наличными или переводом на карту после выполнения работ." },
  { q: "Работаете ли вы в выходные?", a: "Да, работаем ежедневно, в том числе в выходные и праздники с 8:00 до 20:00." },
]

export default function Klining() {
  return (
    <>
      <Helmet>
        <title>Клининг в Усть-Куте | Уборка квартир, офисов — МАСТЕРОФФ</title>
        <meta
          name="description"
          content="Профессиональный клининг в Усть-Куте. Генеральная и поддерживающая уборка, уборка после ремонта, химчистка мебели, мытьё окон. Выезд в день обращения. Звоните: +7 (950) 099-09-31"
        />
        <meta
          name="keywords"
          content="клининг усть-кут, уборка квартир усть-кут, генеральная уборка усть-кут, химчистка мебели усть-кут, уборка после ремонта усть-кут, клининговая компания усть-кут"
        />
        <meta property="og:title" content="Клининг в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Профессиональная уборка квартир, офисов, химчистка мебели в Усть-Куте. Выезд в день обращения." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://servismasteroff.ru/klining" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Клининг в Усть-Куте",
          "provider": { "@type": "LocalBusiness", "name": "МАСТЕРОФФ", "telephone": "+79086461687" },
          "areaServed": { "@type": "City", "name": "Усть-Кут" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "28", "bestRating": "5", "worstRating": "1" },
          "review": [
            { "@type": "Review", "author": { "@type": "Person", "name": "Ольга Р." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Заказала генеральную уборку после ремонта. Девочки отработали на отлично — всё блестит!" },
            { "@type": "Review", "author": { "@type": "Person", "name": "Дмитрий А." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Регулярно заказываем поддерживающую уборку офиса. Всегда чисто, вовремя, без нареканий." },
            { "@type": "Review", "author": { "@type": "Person", "name": "Татьяна В." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Почистили диван и кресло — как новые! Запах пропал, пятна вывели. Очень довольна." }
          ]
        })}</script>
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
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/2768df91-13a5-440c-8740-756c54951b24.png"
              alt="Клининг"
              className="hidden md:block absolute pointer-events-none"
              style={{ right: "0px", bottom: 0, top: "auto", height: "105%", width: "auto", zIndex: 5, opacity: 0.3 }}
            />

            <div className="grid md:grid-cols-[1fr_420px]">
              <div className="p-8 md:p-12 flex flex-col justify-start relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 w-fit" style={{ backgroundColor: "rgba(245,197,24,0.12)", color: "#F5C518" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block animate-pulse" />
                  Профессиональный клининг
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-7">
                  Уборка квартир<br />и офисов в Усть-Куте
                </h1>

                <ul className="space-y-3 mb-8">
                  {[
                    "Генеральная и поддерживающая уборка",
                    "Уборка после ремонта и строительства",
                    "Химчистка диванов, кресел, матрасов",
                    "Мытьё окон без разводов",
                    "Своё оборудование и безопасная химия",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300 text-base">
                      <span className="text-yellow-400 text-xl font-bold leading-none">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-zinc-400 text-sm mb-3">
                  Свяжитесь с нами для расчёта стоимости:
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                        в сети
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                        в сети
                      </div>
                    </div>
                  </a>
                  <a href="tel:+79500990931"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-orange-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Позвонить</div>
                      <div className="text-xs text-zinc-400">+7 (950) 099-09-31</div>
                    </div>
                  </a>
                  <a href="tel:+73953270234"
                    className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-3 hover:border-yellow-500 transition-colors bg-zinc-800/60">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-black" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Городской</div>
                      <div className="text-xs text-zinc-400">8 (3953) 27-02-34</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </motion.div>
        </div>

        {/* Виды уборки */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Виды уборки</h2>
              <p className="text-zinc-400">Выполняем все виды клининговых работ</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="rounded-2xl border border-zinc-800 p-6 flex flex-col gap-3"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.bg }}>
                    <Icon name={s.icon} size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <div className="pt-2 border-t border-zinc-800">
                    <span className="font-bold text-base" style={{ color: "#F5C518" }}>{s.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Прайс */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Стоимость уборки</h2>
              <p className="text-zinc-400">Фиксированные цены без скрытых доплат</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-zinc-800 overflow-hidden"
              style={{ backgroundColor: "#111113" }}
            >
              <div className="grid grid-cols-4 px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
                <div className="text-zinc-400 text-sm font-medium">Тип помещения</div>
                <div className="text-zinc-400 text-sm font-medium text-center">Генеральная</div>
                <div className="text-zinc-400 text-sm font-medium text-center">Поддерживающая</div>
                <div className="text-zinc-400 text-sm font-medium text-center">После ремонта</div>
              </div>
              {prices.map((p, i) => (
                <div
                  key={p.name}
                  className={`grid grid-cols-4 px-6 py-4 ${i !== prices.length - 1 ? "border-b border-zinc-800" : ""}`}
                >
                  <div className="text-white font-medium text-sm">{p.name}</div>
                  <div className="text-center font-bold text-sm" style={{ color: "#F5C518" }}>{p.general}</div>
                  <div className="text-center font-bold text-sm" style={{ color: "#F5C518" }}>{p.support}</div>
                  <div className="text-center font-bold text-sm" style={{ color: "#F5C518" }}>{p.afterRepair}</div>
                </div>
              ))}
            </motion.div>
            <p className="text-zinc-500 text-xs mt-3">* Точная стоимость рассчитывается после осмотра. Выезд для оценки — бесплатно.</p>
          </div>
        </div>

        {/* Почему мы */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Почему выбирают нас</h2>
              <p className="text-zinc-400">6 причин доверить уборку МАСТЕРОФФ</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {whyItems.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="rounded-2xl border border-zinc-800 p-6 flex gap-4"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                    <Icon name={w.icon} size={20} style={{ color: "#F5C518" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{w.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full flex justify-center px-4 md:px-10 mb-12">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Частые вопросы</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {faq.map((f, i) => (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="rounded-2xl border border-zinc-800 p-6"
                  style={{ backgroundColor: "#111113" }}
                >
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(245,197,24,0.15)", color: "#F5C518" }}>
                      <span className="text-xs font-bold">?</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2">{f.q}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AdvantagesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>

      <FloatingCallButton />
    </>
  )
}
