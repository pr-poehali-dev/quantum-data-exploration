import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const stats = [
  {
    num: "20+",
    title: "Более 20 лет занимаемся",
    subtitle: "внутренней отделкой бань и саун.",
    desc: "Производим пиломатериалы и мебель из липы, включая эксклюзивный пиломатериал — горбыль, необрезную/обрезную доску из массива липы, вагонку-рейку, вагонку RMB.",
  },
  {
    num: "8 000+",
    title: "8 000+ выполненных профессиональных проектов",
    subtitle: "по созданию идеального места отдыха.",
    desc: "Наши высококвалифицированные специалисты быстро и качественно проводят все необходимые работы.",
  },
  {
    num: "3 500+",
    title: "3 500+ товаров для бань и саун",
    subtitle: "Пиломатериалы, печи, двери, аксессуары и др.",
    desc: "В шоуруме представлены образцы парных, чтобы оценить качество, дизайн и комфорт перед заказом.",
  },
]

const reasons = [
  {
    num: "01",
    emoji: "🏛️",
    title: "Демонстрационные парные",
    desc: "В нашем шоуруме вы можете оценить качество нашей отделки, материалов и оборудования",
  },
  {
    num: "02",
    emoji: "📋",
    title: "Понятная и прозрачная смета",
    desc: "У нас нет скрытых платежей. Стоимость жёстко фиксируется после заключения договора",
  },
  {
    num: "03",
    emoji: "🏭",
    title: "Собственное производство",
    desc: "Мы самостоятельно производим пиломатериал из липы и даём гарантию на качество",
  },
  {
    num: "04",
    emoji: "🏅",
    title: "Честная гарантия на работы",
    desc: "Все недочёты и поломки мы устраняем за свой счёт",
  },
  {
    num: "05",
    emoji: "👷",
    title: "Мастера с огромным опытом",
    desc: "Все профильные специалисты работают в штате более 5 лет",
  },
  {
    num: "06",
    emoji: "🏠",
    title: "Отделка под ключ",
    desc: "Оказываем полный цикл от производства до монтажа",
  },
]

const workStages = [
  {
    title: "Утепление, пароизоляция, прокладка проводки",
    dark: false,
    items: [
      "Каркас из бруса 50×50",
      "Утеплитель — закладывается в каркас",
      "Фольга (пароизоляция) — используется обожжённая фольга, стыки и разрывы проклеиваются алюминиевым скотчем.",
      "Контробрешётка — рейка 20×50. Используется для монтажа отделки стен, дополнительно создаёт воздушную подушку для циркуляции воздуха.",
    ],
  },
  {
    title: "Отделка стен и потолка, монтаж двери и окон",
    dark: true,
    items: [
      "Для отделки могут использоваться:",
      "Материалы нашего производства: вагонка из липы и термолипы различных профилей, имитация бруса, необрезная доска, горбыль, 3D панели, паркетная вагонка.",
      "Импортируемые материалы: вагонка из канадского кедра, абаш.",
    ],
  },
  {
    title: "Изготовление полков, монтаж печи и дымохода",
    dark: false,
    items: [
      "Для отделки могут быть использованы:",
      "Монтаж полков — полок изготавливается из: липы, абаша, канадского кедра.",
      "Установка печи (дровяная или электрическая) и дымохода (ТиС — из нержавейки российского производства, Schiedel Permeter — из нержавейки российского производства, Schiedel UNI — керамический дымоход немецкого производства).",
      "Теплоизоляция и облицовка печного узла и портала печи.",
    ],
  },
  {
    title: "Изготовление элементов декора",
    dark: true,
    items: [
      "Сборка и монтаж элементов декора.",
      "Изделия из можжевельника - помимо красивого внешнего вида, можжевельник выделяет аромасла, которые обладают приятным ароматом и являются природным антисептиком.",
      "Изделия из гималайской соли — панно, светильники или полностью стена. Помимо декора и элемента освещения, гималайская соль ионизирует воздух в парной и насыщает его полезными микроэлементами, которые способствуют профилактике заболеваний верхних дыхательных путей.",
    ],
  },
]

const faq = [
  {
    q: "Какую древесину вы используете?",
    a: "Мы используем липу собственного производства — вагонку, горбыль, необрезную доску, вагонку-рейку и RMB. Также работаем с канадским кедром и абашем.",
  },
  {
    q: "Можно ли у вас приобрести только материалы?",
    a: "Да, вы можете купить материалы без монтажа. У нас в шоуруме представлены все образцы — приезжайте, выберете подходящие.",
  },
  {
    q: "Кто выезжает на замер?",
    a: "На замер выезжает наш технический специалист с опытом более 5 лет. Замер бесплатный, без обязательств.",
  },
  {
    q: "Сколько времени потребуется для отделки парной «под ключ»?",
    a: "Стандартный проект занимает от 7 до 14 дней в зависимости от площади и сложности работ. Сроки фиксируются в договоре.",
  },
]

export default function OtdelkaBani() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Отделка бань и саун под ключ в Москве | Бригада мастеров</title>
        <meta name="description" content="Внутренняя отделка бань и саун под ключ. Более 20 лет опыта, 8000+ проектов. Идеальная баня за 7 дней. Звоните!" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/17b61bfe-f7c1-45e8-8669-6a1db835f7ae.jpg')",
            filter: "brightness(0.45)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7) 60%, transparent 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
              <span style={{ color: "#F5C518" }}>Внутренняя отделка</span>
              <br />
              <span className="text-white">бань и саун «под ключ»</span>
            </h1>

            <div
              className="inline-block px-6 py-5 rounded-2xl mb-6"
              style={{ backgroundColor: "rgba(0,0,0,0.65)", border: "1px solid rgba(245,197,24,0.3)" }}
            >
              <p className="text-white font-bold text-xl mb-1">Идеальная баня</p>
              <p className="font-black text-2xl" style={{ color: "#F5C518" }}>ЗА 7 ДНЕЙ</p>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="block px-8 py-4 rounded-xl font-bold text-black text-lg uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#F5C518" }}
            >
              Рассчитать стоимость
            </button>
          </motion.div>
        </div>

        {/* Нижние бонусы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6"
        >
          <div
            className="rounded-t-2xl grid grid-cols-3 divide-x"
            style={{
              backgroundColor: "rgba(20,20,20,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              divideColor: "rgba(255,255,255,0.08)",
            }}
          >
            {[
              { icon: "Box", text: "3D-дизайн", sub: "в подарок" },
              { icon: "FileText", text: "Расчёт сметы", sub: "бесплатно" },
              { icon: "ShieldCheck", text: "Гарантия на всё", sub: "1 год" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-3 px-6 py-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                  <Icon name={b.icon as "Box"} size={18} className="text-black" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold leading-tight">{b.text}</div>
                  <div className="text-zinc-400 text-xs">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* О компании — 3 карточки со статистикой */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-3" style={{ color: "#1a1a1a" }}>
              Компания «Бригада мастеров»
            </h2>
            <p className="text-zinc-500 text-lg">Мы оказываем профессиональные услуги по созданию идеального места отдыха.</p>
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
                {/* Зелёная карточка с числом */}
                <div
                  className="relative flex items-center justify-center py-10"
                  style={{
                    background: "linear-gradient(135deg, #2d6a2d 0%, #4a9a4a 50%, #2d6a2d 100%)",
                    minHeight: "140px",
                  }}
                >
                  <span className="text-5xl font-black text-white drop-shadow-lg">{s.num}</span>
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7456542a-a8b6-4854-a6db-866e3b8ed4d8.png"
                    alt="веник"
                    className="absolute select-none pointer-events-none"
                    style={{ width: 56, height: 56, bottom: 8, right: 12, objectFit: "contain", opacity: 0.85 }}
                  />
                </div>
                {/* Текст */}
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

      {/* Фото парной + текст */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Фото — placeholder до загрузки */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
              style={{ minHeight: "420px", backgroundColor: "#ddd" }}
            >
              <div
                className="w-full h-full min-h-[420px] flex items-center justify-center text-zinc-400 text-sm"
                style={{ backgroundColor: "#e5e5e5" }}
              >
                <span>Фото парной — вы добавите позже</span>
              </div>
            </motion.div>

            {/* Текст */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold mb-4 pb-2 border-b border-zinc-300" style={{ color: "#4a9a4a" }}>
                Внутренняя отделка бань и саун "под ключ"
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight mb-6">
                От дизайна до готовой к парению бани за 7 дней!
              </h2>
              <p className="text-zinc-600 mb-5">Пройдите короткий тест и получите:</p>
              <div className="flex flex-col gap-3 mb-7">
                {["Индивидуальный расчёт стоимости отделки", "3D-визуализацию вашей парной"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-2xl">🎁</span>
                    <span className="text-zinc-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-black text-base uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#F5C518" }}
              >
                Получить расчёт и бонусы
              </button>
              <p className="text-zinc-500 text-sm mt-4 font-medium">Бонусы после прохождения теста</p>
              <div className="flex gap-3 mt-2">
                {["3D-визуализация парной", "Предварительный расчёт"].map((b) => (
                  <div
                    key={b}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 border border-zinc-200"
                    style={{ backgroundColor: "#fff" }}
                  >
                    🎁 {b}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 причин */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">
              <span style={{ color: "#4a9a4a" }}>6 причин</span>{" "}
              <span className="text-zinc-900">выбрать «Бригаду мастеров»</span>
            </h2>
            <p className="text-zinc-500 text-lg">Оказываем полный цикл от производства до монтажа</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Цифра + иконка поверх */}
                <div className="relative flex items-center justify-center mb-5" style={{ width: 140, height: 120 }}>
                  <span
                    className="absolute font-black select-none leading-none"
                    style={{
                      fontSize: "110px",
                      color: "#4a9a4a",
                      opacity: 0.18,
                      lineHeight: 1,
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {r.num}
                  </span>
                  <span
                    className="relative z-10 font-black select-none leading-none"
                    style={{
                      fontSize: "80px",
                      color: "#4a9a4a",
                      opacity: 1,
                      lineHeight: 1,
                    }}
                  >
                    {r.num}
                  </span>
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7456542a-a8b6-4854-a6db-866e3b8ed4d8.png"
                    alt="веник"
                    className="absolute z-20 select-none pointer-events-none"
                    style={{ width: 64, height: 64, bottom: -8, right: -8, objectFit: "contain" }}
                  />
                </div>
                <h3 className="font-bold text-base text-zinc-900 mb-2 leading-snug">{r.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы работ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase text-zinc-900 mb-3">
              Берём полную ответственность<br />от начала до конца проекта
            </h2>
            <p className="text-zinc-600 text-lg">
              Полный цикл работ выполняется от 7 до 14 дней,<br />в зависимости от сложности работ.
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
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  backgroundColor: stage.dark ? "#1a1a1a" : "#fff",
                  border: stage.dark ? "1px solid #2a2a2a" : "1px solid #e5e5e5",
                }}
              >
                <h3
                  className="font-bold text-lg mb-4 leading-tight"
                  style={{ color: stage.dark ? "#5dbf5d" : "#2d6a2d" }}
                >
                  {stage.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      {j === 0 && stage.items.length > 1 && item.endsWith(":") ? (
                        <span className={stage.dark ? "text-zinc-400 text-sm" : "text-zinc-600 text-sm"}>{item}</span>
                      ) : (
                        <>
                          <span className="mt-0.5 flex-shrink-0">
                            <Icon name="CheckCircle2" size={16} style={{ color: "#4a9a4a" }} />
                          </span>
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: stage.dark ? "#d4d4d4" : "#444" }}
                          >
                            {item}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер: Сделаем отделку */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
            style={{ backgroundColor: "#e8e4dc", border: "1px solid #d5d0c5" }}
          >
            <div className="p-10 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 leading-tight">
                Сделаем отделку бани и сауны по одному из наших готовых проектов или разработаем для вас индивидуальный дизайн
              </h2>
              <p className="text-zinc-600 mb-7 leading-relaxed">
                Расчёт делается бесплатно! С вами свяжется наш менеджер для уточнения деталей. После этого мы составим подробный расчёт стоимости материалов и работ.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-white text-base uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#3a7a3a" }}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="hidden md:flex items-center justify-center p-8">
              <div
                className="w-full rounded-2xl flex items-center justify-center text-zinc-400 text-sm"
                style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              >
                Фото материалов — добавите сами
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Галерея проектов */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-black uppercase text-zinc-900">
              Каждый год мы выполняем более 300 проектов<br />различной сложности и планировки
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-sm">
                  Фото проекта {i} — добавите сами
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                  >
                    Подробнее...
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер: Как избежать затрат */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
            style={{ backgroundColor: "#e8e4dc", border: "1px solid #d5d0c5" }}
          >
            <div className="p-10 md:p-12">
              <p className="text-base font-bold uppercase mb-2" style={{ color: "#3a7a3a" }}>
                Как избежать неожиданных затрат?
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 leading-tight">
                Найдём скрытые расходы в вашей смете!
              </h2>
              <p className="text-zinc-600 mb-7 leading-relaxed">
                Отправьте нам вашу смету, и мы проведём подробный аудит. Проверим каждый пункт и выявим возможные скрытые расходы.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-white text-base uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#3a7a3a" }}
              >
                Проверить смету
              </button>
            </div>
            <div className="hidden md:flex items-center justify-center p-8">
              <div
                className="w-full rounded-2xl flex items-center justify-center text-zinc-400 text-sm"
                style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              >
                Фото бани — добавите сами
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase text-zinc-900 mb-2">
              Вопросы, на которые
            </h2>
            <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ color: "#3a7a3a" }}>
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-zinc-900 text-base pr-4">{item.q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{ border: "1.5px solid #aaa" }}
                  >
                    <Icon
                      name={openFaq === i ? "Minus" : "Plus"}
                      size={16}
                      className="text-zinc-600"
                    />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-200 pt-4">
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
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
              Хотите идеальную баню?
            </h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Оставьте заявку — рассчитаем стоимость бесплатно и пришлём 3D-визуализацию
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-4 rounded-xl font-black text-black text-lg uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
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