import { motion } from "framer-motion"
import { Helmet } from "@/components/Helmet"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const ORANGE = "#E8622A"
const ORANGE_LIGHT = "#FFF0EA"

const services = [
  {
    icon: "Sparkles",
    title: "Уборка квартир",
    items: ["Генеральная уборка", "Поддерживающая уборка", "Уборка после ремонта", "Уборка после праздников"],
  },
  {
    icon: "Home",
    title: "Уборка домов",
    items: ["Генеральная уборка дома", "Регулярная уборка", "Уборка после строительства", "Сезонная уборка"],
  },
  {
    icon: "Building2",
    title: "Коммерческая уборка",
    items: ["Уборка офисов", "Уборка магазинов", "Уборка складов", "Уборка после мероприятий"],
  },
  {
    icon: "Sofa",
    title: "Химчистка",
    items: ["Химчистка диванов", "Химчистка матрасов", "Химчистка кресел", "Химчистка ковров"],
  },
]

const whyItems = [
  {
    num: "01",
    title: "Приезжаем вовремя.",
    desc: "А если вдруг опоздаем — дадим скидку. Менеджер всегда с Вами на связи 24/7.",
  },
  {
    num: "02",
    title: "Фиксированная цена.",
    desc: "После расчёта менеджером цена окончательная и не изменится по приезду бригады.",
  },
  {
    num: "03",
    title: "Бригадир контролирует.",
    desc: "Бригаду клинеров сопровождает бригадир. Он проконтролирует уборку и сдаст её Вам.",
  },
  {
    num: "04",
    title: "Своё оборудование.",
    desc: "Оборудование: стремянки, пылесосы, химия, тряпки, вёдра и прочее — привозим с собой.",
  },
]

const advantages = [
  { icon: "ClipboardList", text: "Цена окончательная и не изменится по приезду бригады" },
  { icon: "Package", text: "Оборудование, стремянки и химию привозим с собой" },
  { icon: "Wallet", text: "Оплата только после оказания услуг. Никаких предоплат!" },
  { icon: "HardHat", text: "Бригаду клинеров сопровождает бригадир" },
]

const prices = [
  { type: "Студия", general: "2 500 ₽", support: "1 200 ₽", afterRepair: "3 500 ₽" },
  { type: "1-комнатная", general: "3 000 ₽", support: "1 500 ₽", afterRepair: "4 000 ₽" },
  { type: "2-комнатная", general: "4 000 ₽", support: "2 000 ₽", afterRepair: "5 500 ₽" },
  { type: "3-комнатная", general: "5 500 ₽", support: "2 800 ₽", afterRepair: "7 000 ₽" },
  { type: "4-комнатная", general: "7 000 ₽", support: "3 500 ₽", afterRepair: "9 000 ₽" },
  { type: "Офис до 50 м²", general: "3 500 ₽", support: "2 000 ₽", afterRepair: "5 000 ₽" },
]

export default function Klining() {
  return (
    <>
      <Helmet>
        <title>Клининг в Усть-Куте | Уборка квартир, домов, офисов — МАСТЕРОФФ</title>
        <meta name="description" content="Профессиональный клининг в Усть-Куте. Генеральная уборка, уборка после ремонта, химчистка мебели. Выезд в день обращения. Звоните: +7 (950) 099-09-31" />
        <meta name="keywords" content="клининг усть-кут, уборка квартир усть-кут, генеральная уборка усть-кут, химчистка мебели усть-кут, уборка после ремонта усть-кут" />
        <link rel="canonical" href="https://servismasteroff.ru/klining" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        {/* HERO */}
        <section className="pt-0 mt-0 pb-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf6f2 0%, #fff9f7 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 min-h-[500px]">
            <div className="flex-1 py-12 relative z-10">
              <div className="mb-5">
                <div className="mb-3">
                  <span className="px-4 py-2 rounded-2xl text-white text-base font-bold inline-block" style={{ backgroundColor: ORANGE, transform: "rotate(-6deg)" }}>от 50 р./м²</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Клининговые услуги в Усть-Куте
                </h1>
              </div>
              <p className="text-gray-500 text-lg mb-6">
                Профессиональная уборка квартир, домов,<br />офисов и коммерческих помещений
              </p>

              <div className="rounded-2xl px-5 py-4 mb-7 text-gray-800 font-medium text-base" style={{ backgroundColor: "#FFF0EA", border: `1px solid ${ORANGE}44` }}>
                Закажи уборку и получи мойку всех окон в{" "}
                <span className="font-extrabold" style={{ color: ORANGE }}>ПОДАРОК!</span>
              </div>

              <div className="flex flex-wrap gap-5 mb-8">
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                    <Icon name="Check" size={14} className="text-white" />
                  </span>
                  Уборка в день заказа
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                    <Icon name="Check" size={14} className="text-white" />
                  </span>
                  −10% на первый заказ
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+79500990931"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: ORANGE }}
                >
                  Заказать уборку
                  <Icon name="ArrowRight" size={18} className="text-white" />
                </a>
                <a
                  href="https://wa.me/79500990931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Написать в WhatsApp
                  <Icon name="MessageCircle" size={18} className="text-white" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-end self-stretch">
              <img
                src="https://cdn.poehali.dev/files/0f9d20cf-531b-4bc5-a6bd-5234c550a356.png"
                alt="Клинер"
                className="h-[750px] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* Преимущества — 4 карточки */}
        <section className="bg-white pt-0 pb-10 px-6 -mt-20 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 shadow-md"
                style={{ borderColor: ORANGE }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ORANGE_LIGHT }}>
                  <Icon name={a.icon} size={24} style={{ color: ORANGE }} />
                </div>
                <p className="text-gray-700 text-sm font-medium leading-snug">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Акционный баннер */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ backgroundColor: ORANGE }}
            >
              <div>
                <p className="text-orange-100 text-lg font-medium mb-1">При заказе уборки</p>
                <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-3">МОЙКА ОКОН В ПОДАРОК!</h2>
                <p className="text-orange-100 text-base">
                  Закажи генеральную или послестроительную уборку —<br />
                  получи мойку всех стандартных окон в <strong className="text-white">ПОДАРОК.</strong>
                </p>
                <p className="text-orange-200 text-xs mt-3">*В акцию не входит балконное остекление</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="https://wa.me/79500990931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "white", color: ORANGE }}
                >
                  <Icon name="MessageCircle" size={20} style={{ color: "#25D366" }} />
                  Написать WhatsApp
                </a>
                <a
                  href="tel:+79500990931"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-base text-white border-2 border-white hover:bg-white transition-all"
                  style={{} as React.CSSProperties}
                >
                  <Icon name="Phone" size={20} />
                  Или Звонок
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Наши услуги */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Наши услуги</h2>
              <p className="text-gray-500">Полный спектр клининговых услуг в Усть-Куте</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: ORANGE_LIGHT }}>
                    <Icon name={s.icon} size={22} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-3">{s.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ORANGE }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Мойка окон — акция */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10 bg-gray-50">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">Все окна и балконы в квартире по единой цене!</h2>
                  <p className="text-gray-500 text-center mb-8">Закажите мытьё всех окон и балкона</p>
                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Как проходит мойка окон</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Мойщик приезжает в назначенное время со всем необходимым оборудованием и профессиональными моющими средствами. По окончании работ вам остаётся лишь принять работу.</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Что мы поможем?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Мойщик помоет окна с обеих сторон, рамы внутри и снаружи, подоконники и откосы. При заказе мытья окон и балконов — моются все окна и балконы в квартире, независимо от количества.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80 transition-opacity" style={{ borderColor: "#25D366", color: "#25D366" }}>
                      <Icon name="MessageCircle" size={16} />Написать WhatsApp
                    </a>
                    <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80 transition-opacity" style={{ borderColor: "#2AABEE", color: "#2AABEE" }}>
                      <Icon name="Send" size={16} />Написать Telegram
                    </a>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center" style={{ backgroundColor: ORANGE_LIGHT }}>
                  <div className="relative mb-5">
                    <div className="rounded-2xl p-6 text-center bg-white border-2" style={{ borderColor: ORANGE }}>
                      <div className="text-4xl font-extrabold mb-1" style={{ color: ORANGE }}>3 000 руб.</div>
                      <div className="text-gray-500 text-sm">Цена не зависит от количества окон в квартире</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-extrabold text-center leading-tight" style={{ backgroundColor: "#e53e3e" }}>АКЦИЯ</div>
                  </div>
                  <p className="text-gray-700 font-medium mb-3 text-sm">Оставьте заявку</p>
                  <div className="flex flex-col gap-2 mb-3">
                    <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer"><input type="radio" name="windows" defaultChecked className="accent-orange-500" />Окна и балконы</label>
                    <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer"><input type="radio" name="windows" className="accent-orange-500" />Только окна</label>
                  </div>
                  <input type="tel" placeholder="+7 (000) 000-00-00" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:border-orange-400 transition-colors mb-3 bg-white" />
                  <a href="tel:+79500990931" className="block w-full py-3 rounded-xl text-white font-bold text-sm text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>Отправить заявку</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Почему мы + форма */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Почему стоит{" "}
                <span style={{ color: ORANGE }}>заказать клининг</span>
                <br />именно у нас?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-[1fr_380px] gap-8 items-start">
              <div className="flex flex-col gap-5">
                {whyItems.map((w, i) => (
                  <motion.div
                    key={w.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center" style={{ backgroundColor: ORANGE_LIGHT }}>
                      <Icon name="Sparkles" size={22} style={{ color: ORANGE }} />
                    </div>
                    <div className="flex-1 pr-10">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="font-bold text-gray-800">{w.title}</span>{" "}
                        {w.desc}
                      </p>
                    </div>
                    <div
                      className="absolute top-3 right-4 text-3xl font-extrabold select-none"
                      style={{ color: `${ORANGE}25` }}
                    >
                      {w.num}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm sticky top-28"
              >
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Не можете определиться с услугой?</h3>
                <p className="text-gray-400 text-sm mb-5">Напишите нам в мессенджеры — мы всегда онлайн!</p>

                <div className="flex gap-3 mb-5">
                  <a
                    href="https://wa.me/79500990931"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <Icon name="MessageCircle" size={18} className="text-white" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/masteroff_uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#2AABEE" }}
                  >
                    <Icon name="Send" size={18} className="text-white" />
                    Telegram
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-4">Или оставьте свой номер и мы свяжемся с Вами в течение 5 минут.</p>
                <div className="flex flex-col gap-3">
                  <input
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-base outline-none focus:border-orange-400 transition-colors"
                  />
                  <a
                    href="tel:+79500990931"
                    className="w-full py-4 rounded-xl text-white font-bold text-base text-center hover:opacity-90 transition-opacity block"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Позвоните мне
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Интерактивная карта комнаты */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Что входит в уборку</h2>
              <p className="text-gray-500">Мы убираем каждый уголок вашего дома</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              style={{ minHeight: 420 }}
            >
              <img src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/1e509d62-6d10-41b8-85e0-cf97af312741.png"
                alt="Что входит в уборку" className="w-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Наше оборудование */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Наше оборудование</h2>
              <p className="text-gray-600 text-base mb-1">Все наши бригады оснащены всем необходимым оборудованием для уборки.</p>
              <p className="text-base">
                <span style={{ color: ORANGE }} className="font-bold">Мы выполняем любые виды уборок,</span>{" "}
                <span className="text-gray-600">в работе мы используем профессиональную технику Karcher и химию GRASS и Pro-Brite</span>
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "Профессиональные пылесосы Karcher", desc: "Мощный помощник в уборке любых видов загрязнений. Сбора как мелкого и крупного, влажного или сухого мусора.", icon: "Wind", img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ac3c539a-2771-41df-abb8-9a81985278b6.jpg" },
                { title: "Профессиональные парогенераторы Karcher", desc: "Оптимальный для очистки разных поверхностей от разных загрязнений без использования химии.", icon: "Zap", img: "" },
                { title: "Профессиональные экстракторы Karcher", desc: "Для химчистки ковровых покрытий, мягкой мебели, штор и матрасов.", icon: "Droplets", img: "" },
              ].map((eq, i) => (
                <motion.div key={eq.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
                  style={{ borderColor: `${ORANGE}55`, minHeight: 200 }}
                >
                  <div className="p-6 pb-0">
                    <h3 className="font-extrabold text-gray-800 text-base mb-2">{eq.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{eq.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    {eq.img ? (
                      <img src={eq.img} alt={eq.title} className="h-40 w-auto object-contain" style={{ marginRight: -8, marginBottom: -8 }} />
                    ) : (
                      <div className="m-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: ORANGE_LIGHT }}>
                        <Icon name={eq.icon} size={22} style={{ color: ORANGE }} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 шага */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                <span style={{ color: ORANGE }}>4 шага</span> для идеальной чистоты Вашего дома
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { num: "1", title: "Заявка", desc: "Оставьте заявку, позвоните или пишите нам в мессенджеры.", hasButtons: true },
                { num: "2", title: "Консультация", desc: "Менеджер проконсультирует и рассчитает стоимость.", hasButtons: false },
                { num: "3", title: "Уборка", desc: "Приезжает бригада и выполняет уборку.", hasButtons: false },
                { num: "4", title: "Проверка и оплата", desc: "После проверки уборки оплачиваете удобным для Вас способом.", hasButtons: false },
              ].map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-base flex-shrink-0" style={{ backgroundColor: ORANGE }}>
                      {step.num}
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-base flex items-center gap-1">
                      {step.title} <span className="text-gray-400">→</span>
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                  {step.hasButtons && (
                    <div className="flex gap-2">
                      <a href="tel:+79500990931" className="px-4 py-2 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
                        Заявка
                      </a>
                      <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl text-sm font-bold border-2 hover:opacity-80 transition-opacity" style={{ borderColor: ORANGE, color: ORANGE }}>
                        WhatsApp
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Точность цены 100% */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl border-2 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
              style={{ borderColor: `${ORANGE}44`, backgroundColor: "#fff" }}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: ORANGE }}>
                  Хотите узнать стоимость уборки с точностью 100%?
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Пришлите нам фото объекта в любой мессенджер и мы рассчитаем стоимость уборки с точностью{" "}
                  <strong style={{ color: ORANGE }}>100%</strong> за несколько минут. Цена не изменится по приезду!
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/79500990931" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#25D366" }}>
                    <Icon name="MessageCircle" size={18} className="text-white" />
                    Написать в WhatsApp
                  </a>
                  <a href="https://t.me/masteroff_uk" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#2AABEE" }}>
                    <Icon name="Send" size={18} className="text-white" />
                    Написать в Telegram
                  </a>
                </div>
              </div>
              <div className="hidden md:block flex-shrink-0">
                <div className="w-40 h-40 rounded-3xl flex items-center justify-center" style={{ backgroundColor: ORANGE_LIGHT }}>
                  <Icon name="Smartphone" size={64} style={{ color: ORANGE }} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Акции */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Акции</h2>
              <p className="text-gray-500">Выгодные предложения для наших клиентов</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Мойка окон в подарок!", badge: "bg-orange-100 text-orange-600", desc: "Закажи генеральную или уборку после ремонта и получи мойку всех комнатных окон в подарок.", note: "В акцию не входит балконное и панорамное остекление." },
                { title: "Холодильник внутри в подарок!", badge: "bg-orange-100 text-orange-600", desc: "При заказе уборки чеком выше 15 000 ₽, холодильник внутри помоем бесплатно.", note: "" },
                { title: "Скидка 30% на химчистку", badge: "bg-orange-100 text-orange-600", desc: "При заказе уборки химчистка мебели, матрасов, ковров со скидкой 30%.", note: "" },
              ].map((promo, i) => (
                <motion.div key={promo.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="h-12 flex items-center px-5" style={{ backgroundColor: ORANGE_LIGHT }}>
                    <span className="font-bold text-sm" style={{ color: ORANGE }}>Действует до: 1 сентября 2026</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-lg mb-2" style={{ color: ORANGE }}>{promo.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{promo.desc}</p>
                    {promo.note && <p className="text-xs mb-4" style={{ color: ORANGE }}>{promo.note}</p>}
                    <a href="tel:+79500990931"
                      className="inline-flex items-center px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity mt-2"
                      style={{ backgroundColor: ORANGE }}>
                      Заказать
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6" style={{ backgroundColor: "#fdf6f2" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-orange-100 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-400 text-sm">Принимаем заявки ежедневно 8:00 — 20:00</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  Готовы навести чистоту?{" "}
                  <span style={{ color: ORANGE }}>Звоните!</span>
                </h2>
                <p className="text-gray-500 text-sm">Ответим за 2 минуты. Выезд в день обращения.</p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
                <a
                  href="tel:+79500990931"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Icon name="Phone" size={18} className="text-white" />
                  +7 (950) 099-09-31
                </a>
                <a
                  href="tel:+73953270234"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity border-2 whitespace-nowrap"
                  style={{ borderColor: ORANGE, color: ORANGE }}
                >
                  <Icon name="Phone" size={18} />
                  8 (3953) 27-02-34
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingCallButton />
    </>
  )
}