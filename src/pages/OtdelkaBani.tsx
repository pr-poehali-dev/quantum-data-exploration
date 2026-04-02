import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"
import { FloatingLeaves } from "@/components/FloatingLeaves"

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
    icon: "ShowerHead",
    title: "Демонстрационные парные",
    desc: "В нашем шоуруме вы можете оценить качество нашей отделки, материалов и оборудования",
  },
  {
    num: "02",
    icon: "FolderOpen",
    title: "Понятная и прозрачная смета",
    desc: "У нас нет скрытых платежей. Стоимость жёстко фиксируется после заключения договора",
  },
  {
    num: "03",
    icon: "Settings2",
    title: "Собственное производство",
    desc: "Мы самостоятельно производим пиломатериал из липы и даём гарантию на качество",
  },
  {
    num: "04",
    icon: "Medal",
    title: "Честная гарантия на работы",
    desc: "Все недочёты и поломки мы устраняем за свой счёт",
  },
  {
    num: "05",
    icon: "UserCheck",
    title: "Мастера с огромным опытом",
    desc: "Все профильные специалисты работают в штате более 5 лет",
  },
  {
    num: "06",
    icon: "KeyRound",
    title: "Отделка под ключ",
    desc: "Оказываем полный цикл от производства до монтажа",
  },
]

const workStages = [
  {
    title: "Утепление, пароизоляция, прокладка проводки",
    dark: false,
    img: "",
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
    img: "",
    items: [
      "Для отделки могут использоваться:",
      "Материалы нашего производства: вагонка из липы и термолипы различных профилей, имитация бруса, необрезная доска, горбыль, 3D панели, паркетная вагонка.",
      "Импортируемые материалы: вагонка из канадского кедра, абаш.",
    ],
  },
  {
    title: "Изготовление полков, монтаж печи и дымохода",
    dark: true,
    img: "",
    items: [
      "Для отделки могут быть использованы:",
      "Монтаж полков — полок изготавливается из: липы, абаша, канадского кедра.",
      "Установка печи (дровяная или электрическая) и дымохода (ТиС — из нержавейки российского производства, Schiedel Permeter — из нержавейки российского производства — Германия, Schiedel UNI — керамический дымоход немецкого производства).",
      "Теплоизоляция и облицовка печного узла и портала печи.",
    ],
  },
  {
    title: "Изготовление элементов декора",
    dark: false,
    img: "",
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

const project2Photos = [
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/47194948-8427-49c8-b9ce-3df30077af93.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/4ec43766-cab0-4858-8501-79e50101f3fe.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7b83bba2-2aad-4ad7-8df9-2bc3fed171bc.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/63100a50-752f-48a4-a4f6-967a1bbaf020.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/0e6c8a6b-07f0-4de8-85e3-e33bb42de96f.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/06336d74-ebfa-4d43-ac49-e83fd8b51d5e.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/e62107ee-113f-4e56-ba0b-c612c979b20a.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/59cd4ee0-6cc2-4ebb-a799-2d73b80ee3cd.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ed617b54-ff09-4373-bb91-71725688cd39.jpg",
];

const project3Photos = [
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ca1fe51e-a2ce-4144-ad8e-ce33d9217ff8.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/46d571b7-b878-46d0-80ae-bf17e5d799d0.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/60cf40ad-4832-4b39-851f-affaa620a2d4.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/621d47f2-d249-4555-ba88-dac56d1c40f0.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/b92f2f83-7b26-40cd-96f3-f88016f8a045.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/f4199068-9e42-47e1-9062-5c87e8e6e020.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/47d4dd59-b785-4167-8aa8-734b1eee56b1.jpg",
];

const project1Photos = [
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/6413c3f1-32d5-418d-acee-5af22e369673.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/3a4e6936-22fe-4094-9aef-4788b1ff20ff.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/efcb386f-651a-432b-a197-409b395fa8c5.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/c02bf6bd-2b79-4c67-b367-54c2330ea1b2.jpg",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/877b6b11-4336-4d37-9223-cd04f1e9918c.jpg",
];

export default function OtdelkaBani() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [p1Idx, setP1Idx] = useState(0)
  const [p2Idx, setP2Idx] = useState(0)
  const [p3Idx, setP3Idx] = useState(0)
  const [lightbox, setLightbox] = useState<{ photos: string[]; idx: number } | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Helmet>
        <title>Отделка бань и саун в Усть-Куте под ключ | Бригада мастеров</title>
        <meta name="description" content="Внутренняя отделка бань и саун в Усть-Куте под ключ. Более 20 лет опыта, 8000+ проектов. Идеальная баня за 7 дней. Звоните!" />
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
              <span className="text-white">бань и саун</span>
              <br />
              <span className="text-white">в Усть-Куте</span>
            </h1>

            <div
              className="inline-block px-8 py-7 rounded-2xl mb-0 relative"
              style={{ backgroundColor: "rgba(0,0,0,0.65)", border: "1px solid rgba(245,197,24,0.3)" }}
            >
              <p className="text-white font-bold text-2xl mb-1">Идеальная баня</p>
              <p className="font-black text-4xl mb-6" style={{ color: "#F5C518" }}>ЗА 7 ДНЕЙ</p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="block w-full px-8 py-4 rounded-xl font-bold text-black text-lg uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#F5C518" }}
              >
                Рассчитать стоимость
              </button>
              {/* Белая стрелка вниз к бонусам */}
              <div className="absolute pointer-events-none" style={{ bottom: "-90px", left: "60%" }}>
                <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,5 Q60,10 55,60" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M45,52 L55,62 L65,50" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Бонусы — наезжают на белый блок */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full" style={{ marginTop: "-36px", marginBottom: "-36px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 12px 50px rgba(0,0,0,0.5)" }}
        >
          <div
            className="grid grid-cols-3"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {[
              { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/b1357e7d-2e8c-4267-bbef-09138cf6c386.png", text: "3D-дизайн", sub: "в подарок" },
              { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/b0cfe89a-b74c-4534-8126-b963b7591620.png", text: "Расчёт сметы", sub: "бесплатно" },
              { img: "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/07f30a49-3adc-4e52-946a-aefc555cf204.png", text: "Гарантия на всё", sub: "1 год" },
            ].map((b, i) => (
              <div
                key={b.text}
                className="flex flex-col md:flex-row items-center gap-2 md:gap-5 px-2 md:px-10 py-4 md:py-7"
                style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <div className="flex items-center justify-center flex-shrink-0">
                  <img src={b.img} alt={b.text} className="w-8 h-8 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-white font-bold text-xs md:text-base leading-tight">{b.text}</div>
                  <div className="text-zinc-400 text-xs md:text-sm mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* О компании — 3 карточки со статистикой */}
      <section className="px-6 pt-24 pb-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-3" style={{ color: "#1a3a1a" }}>
              Компания «Мастерофф»
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
                {/* Зелёная карточка с фоном листвы */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ minHeight: "150px" }}
                >
                  {/* Фото листвы как фон */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80')",
                      filter: "blur(2px) brightness(0.55) saturate(1.4)",
                      transform: "scale(1.08)",
                    }}
                  />
                  {/* Зелёный градиент поверх */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(160deg, rgba(20,70,20,0.6) 0%, rgba(50,120,50,0.35) 100%)" }}
                  />
                  {/* Мягкое свечение по центру */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at center, rgba(100,200,100,0.18) 0%, transparent 70%)" }}
                  />
                  {/* Цифра */}
                  <span
                    className="relative z-10 font-black text-white"
                    style={{ fontSize: "52px", textShadow: "0 2px 24px rgba(0,0,0,0.5), 0 0 40px rgba(80,180,80,0.3)" }}
                  >
                    {s.num}
                  </span>
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
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/5da8e402-605a-4244-82a7-e1a4e3575632.jpg"
                alt="Внутренняя отделка парной"
                className="w-full h-full min-h-[420px] object-cover"
              />
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
              <span className="text-zinc-900">выбрать «Мастерофф»</span>
            </h2>
            <p className="text-zinc-500 text-lg">Оказываем полный цикл от производства до монтажа</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Большая цифра + иконка поверх + растительность */}
                <div className="relative flex items-center justify-center mb-6" style={{ width: 160, height: 140 }}>
                  {/* Большая полупрозрачная цифра */}
                  <span
                    className="absolute font-black select-none leading-none"
                    style={{
                      fontSize: "130px",
                      color: "#4a9a4a",
                      opacity: 0.15,
                      lineHeight: 1,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.num}
                  </span>
                  {/* Зелёная растительность слева */}
                  <img
                    src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/7456542a-a8b6-4854-a6db-866e3b8ed4d8.png"
                    alt=""
                    className="absolute select-none pointer-events-none"
                    style={{ width: 70, height: 70, bottom: 0, left: -10, objectFit: "contain", opacity: 0.7, transform: "scaleX(-1)" }}
                  />
                  {/* Иконка по центру */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-2xl"
                    style={{ width: 72, height: 72, backgroundColor: "#f0f7f0", border: "2px solid #c8e6c8" }}
                  >
                    <Icon name={r.icon as "Home"} size={32} style={{ color: "#3a7a3a" }} />
                  </div>
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
                className="flex"
              >
                {/* Зелёная подложка слева */}
                <div
                  className="flex-shrink-0 rounded-l-2xl"
                  style={{ width: 7, backgroundColor: "#4a9a4a" }}
                />
                {/* Карточка */}
                <div
                  className="flex-1 rounded-r-2xl flex overflow-hidden"
                  style={{
                    backgroundColor: stage.dark ? "#1e1e1e" : "#fff",
                    border: `1px solid ${stage.dark ? "#333" : "#cde0cd"}`,
                    borderLeft: "none",
                  }}
                >
                  {/* Текст */}
                  <div className="flex-1 p-6">
                    <h3
                      className="font-bold text-base leading-tight mb-4"
                      style={{ color: stage.dark ? "#6dbf6d" : "#2d6a2d" }}
                    >
                      {stage.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          {j === 0 && item.endsWith(":") ? (
                            <span className="text-sm leading-relaxed" style={{ color: stage.dark ? "#aaa" : "#666" }}>{item}</span>
                          ) : (
                            <>
                              <span className="mt-0.5 flex-shrink-0">
                                <Icon name="CheckCircle2" size={15} style={{ color: "#4a9a4a" }} />
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: stage.dark ? "#d4d4d4" : "#444" }}>{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Фото справа внизу */}
                  {stage.img && (
                    <div className="flex-shrink-0 flex items-end justify-center p-4" style={{ width: 130 }}>
                      <img
                        src={stage.img}
                        alt={stage.title}
                        className="rounded-xl object-cover"
                        style={{ width: 110, height: 110 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер: Сделаем отделку */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
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
            <div className="hidden md:flex items-end justify-start overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/41419224-1b6e-425d-b4ce-1101cdc6ae68.png"
                alt="Отделка бани"
                className="object-contain object-bottom-left"
                style={{ height: "320px", maxWidth: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Переход: треугольник */}
      <div className="relative" style={{ backgroundColor: "#f0ede8" }}>
        <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }} preserveAspectRatio="none">
          <polygon points="0,0 1440,0 720,160" fill="#ffffff" />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#fff", border: "2px solid #b8d8b8", boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
          >
            <Icon name="ChevronDown" size={28} style={{ color: "#5aaa5a" }} />
          </div>
        </div>
        <div style={{ height: 24 }} />
      </div>

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
          {/* Лайтбокс */}
          {lightbox && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
                onClick={() => setLightbox(null)}
              >✕</button>
              <button
                className="absolute left-4 text-white text-4xl font-bold z-10 px-4"
                onClick={(e) => { e.stopPropagation(); setLightbox(l => l ? { ...l, idx: (l.idx - 1 + l.photos.length) % l.photos.length } : null); }}
              >‹</button>
              <img
                src={lightbox.photos[lightbox.idx]}
                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute right-4 text-white text-4xl font-bold z-10 px-4"
                onClick={(e) => { e.stopPropagation(); setLightbox(l => l ? { ...l, idx: (l.idx + 1) % l.photos.length } : null); }}
              >›</button>
              <div className="absolute bottom-4 text-white text-sm">{lightbox.idx + 1} / {lightbox.photos.length}</div>
            </div>
          )}
          <div className="relative">
            {/* Дерево слева от первого проекта */}
            {/* Тень дерева на земле */}
            <div
              className="hidden md:block absolute pointer-events-none select-none"
              style={{
                left: "-160px",
                bottom: "-6px",
                width: "320px",
                height: "40px",
                zIndex: 9,
                background: "radial-gradient(ellipse 80% 100% at 40% 100%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
                filter: "blur(6px)",
                transform: "scaleX(1.2)",
              }}
            />
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/94bd3aec-0afe-4b88-a9ae-d3dc94f360c4.png"
              alt="Дерево"
              className="hidden md:block absolute pointer-events-none select-none"
              style={{
                left: "-200px",
                bottom: "0px",
                width: "220px",
                zIndex: 10,
                filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.15))"
              }}
            />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Проект 1 — слайдер с 5 фото */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              onClick={() => setLightbox({ photos: project1Photos, idx: p1Idx })}
            >
              <img
                src={project1Photos[p1Idx]}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                alt={`Проект 1 фото ${p1Idx + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                  Подробнее...
                </span>
              </div>
              {/* Точки навигации */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {project1Photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setP1Idx(idx); }}
                    className="rounded-full transition-all duration-200"
                    style={{ width: idx === p1Idx ? 18 : 8, height: 8, backgroundColor: idx === p1Idx ? "#fff" : "rgba(255,255,255,0.5)" }}
                  />
                ))}
              </div>
              {/* Стрелки */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP1Idx(i => (i - 1 + project1Photos.length) % project1Photos.length); }}
              >‹</button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP1Idx(i => (i + 1) % project1Photos.length); }}
              >›</button>
            </motion.div>
            {/* Проект 2 — слайдер */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              onClick={() => setLightbox({ photos: project2Photos, idx: p2Idx })}
            >
              <img
                src={project2Photos[p2Idx]}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                alt={`Проект 2 фото ${p2Idx + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                  Подробнее...
                </span>
              </div>
              {/* Точки навигации */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {project2Photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setP2Idx(idx); }}
                    className="rounded-full transition-all duration-200"
                    style={{ width: idx === p2Idx ? 18 : 8, height: 8, backgroundColor: idx === p2Idx ? "#fff" : "rgba(255,255,255,0.5)" }}
                  />
                ))}
              </div>
              {/* Стрелки */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP2Idx(i => (i - 1 + project2Photos.length) % project2Photos.length); }}
              >‹</button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP2Idx(i => (i + 1) % project2Photos.length); }}
              >›</button>
            </motion.div>
            {/* Проект 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: "260px", backgroundColor: "#d5d0c5" }}
              onClick={() => setLightbox({ photos: project3Photos, idx: p3Idx })}
            >
              <img
                src={project3Photos[p3Idx]}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                alt={`Проект 3 фото ${p3Idx + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                  Подробнее...
                </span>
              </div>
              {/* Точки навигации */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {project3Photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setP3Idx(idx); }}
                    className="rounded-full transition-all duration-200"
                    style={{ width: idx === p3Idx ? 18 : 8, height: 8, backgroundColor: idx === p3Idx ? "#fff" : "rgba(255,255,255,0.5)" }}
                  />
                ))}
              </div>
              {/* Стрелки */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP3Idx(i => (i - 1 + project3Photos.length) % project3Photos.length); }}
              >‹</button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl font-bold px-1 bg-black/30 rounded-lg"
                onClick={(e) => { e.stopPropagation(); setP3Idx(i => (i + 1) % project3Photos.length); }}
              >›</button>
            </motion.div>
          </div>
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
              <img
                src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/28a09cfc-af78-416e-bc54-84b1057932f2.png"
                alt="Отделка бани"
                className="w-full rounded-2xl object-contain"
                style={{ height: "260px" }}
              />
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
      <FloatingLeaves />
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}