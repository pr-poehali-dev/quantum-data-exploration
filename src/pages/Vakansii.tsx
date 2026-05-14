import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Icon from "@/components/ui/icon"
import { FloatingCallButton } from "@/components/FloatingCallButton"

const vacancies = [
  {
    title: "Разнорабочий",
    type: "Подработка / Официально",
    salary: "от 300 ₽/час или от 45 000 ₽/мес",
    icon: "Hammer",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    duties: ["Вывоз мусора", "Сборка мебели", "Уборка помещений", "Помощь при переезде", "Разные хозяйственные работы"],
    partTime: true,
  },
  {
    title: "Грузчик",
    type: "Подработка / Официально",
    salary: "от 300 ₽/час или от 45 000 ₽/мес",
    icon: "Package",
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
    duties: ["Погрузка и разгрузка", "Переезды квартирные и офисные", "Перестановка мебели", "Работа со спецтехникой"],
    partTime: true,
  },
  {
    title: "Мастер на час",
    type: "Подработка / Официально",
    salary: "от 300 ₽/час или от 45 000 ₽/мес",
    icon: "Wrench",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    duties: ["Сантехника", "Электрика", "Мелкий ремонт", "Навеска карнизов, полок", "Установка техники"],
    partTime: true,
  },
]

const benefits = [
  { icon: "Clock", text: "Гибкий график — работай когда удобно" },
  { icon: "Banknote", text: "Еженедельные выплаты без задержек" },
  { icon: "MapPin", text: "Работа рядом с домом в Усть-Куте" },
  { icon: "Shield", text: "Официальное оформление по ТК РФ" },
  { icon: "Users", text: "Дружный коллектив, помощь новичкам" },
  { icon: "TrendingUp", text: "Карьерный рост внутри компании" },
]

export default function Vakansii() {
  return (
    <>
      <Helmet>
        <title>Вакансии в Усть-Куте | Подработка и работа — МАСТЕРОФФ</title>
        <meta
          name="description"
          content="Вакансии в Усть-Куте: разнорабочие, грузчики, мастера на час. Подработка от 300 руб/час, официальное трудоустройство от 45 000 руб/мес. Гибкий график. Звоните: +7 (950) 099-09-31"
        />
        <meta name="keywords" content="вакансии усть-кут, подработка усть-кут, работа усть-кут, грузчик усть-кут, разнорабочий усть-кут, мастер на час работа" />
        <meta property="og:title" content="Вакансии в Усть-Куте | МАСТЕРОФФ" />
        <meta property="og:description" content="Подработка от 300 руб/час и официальное трудоустройство от 45 000 руб/мес. Разнорабочие, грузчики, мастера." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://masteroff.ru/vakansii" />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(234,179,8,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase"
            >
              <Icon name="Briefcase" size={14} />
              Усть-Кут
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-white font-extrabold leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)" }}
            >
              Вакансии в{" "}
              <span className="bg-yellow-500 text-zinc-950 px-3 rounded-xl">Усть-Куте</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Подработка от <span className="text-white font-semibold">300 ₽/час</span> и официальное трудоустройство<br />
              от <span className="text-white font-semibold">45 000 ₽/мес</span>
            </motion.p>
          </div>
        </section>

        {/* Vacancies */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {vacancies.map((vac, i) => (
              <motion.div
                key={vac.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`border rounded-2xl p-6 flex flex-col gap-4 ${vac.bg}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-zinc-800`}>
                    <Icon name={vac.icon} size={22} className={vac.color} />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg leading-tight">{vac.title}</h2>
                    <p className="text-zinc-500 text-xs">{vac.type}</p>
                  </div>
                </div>

                <div className={`text-sm font-semibold ${vac.color}`}>{vac.salary}</div>

                <ul className="flex flex-col gap-1.5">
                  {vac.duties.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {vac.partTime && (
                  <a
                    href="https://t.me/+KuuBURG3ujpkM2Ji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    <Icon name="Send" size={16} />
                    Хочу подрабатывать
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Formats */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-bold text-2xl md:text-3xl text-center mb-8"
            >
              Два формата работы
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Подработка */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-yellow-500/30 bg-yellow-500/5 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-xl">
                    <Icon name="Zap" size={22} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Подработка</h3>
                    <p className="text-yellow-500 font-semibold text-sm">от 300 ₽/час</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 mb-6 text-zinc-300 text-sm">
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-yellow-500 shrink-0" />Работай в свободное время</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-yellow-500 shrink-0" />Сам выбираешь заявки</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-yellow-500 shrink-0" />Ежедневные выплаты</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-yellow-500 shrink-0" />Никаких обязательств</li>
                </ul>
                <a
                  href="https://t.me/+KuuBURG3ujpkM2Ji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <Icon name="Send" size={16} />
                  Вступить в Telegram-группу
                </a>
              </motion.div>

              {/* Официально */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-zinc-700 bg-zinc-900 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-xl">
                    <Icon name="Shield" size={22} className="text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Официально</h3>
                    <p className="text-zinc-400 font-semibold text-sm">от 45 000 ₽/мес</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 mb-6 text-zinc-300 text-sm">
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-zinc-400 shrink-0" />Трудовой договор по ТК РФ</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-zinc-400 shrink-0" />Соцпакет, отпуск, больничный</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-zinc-400 shrink-0" />Стабильная зарплата 2 раза в месяц</li>
                  <li className="flex items-center gap-2"><Icon name="Check" size={14} className="text-zinc-400 shrink-0" />Рост до бригадира</li>
                </ul>
                <a
                  href="tel:+79500990931"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <Icon name="Phone" size={16} />
                  Позвонить по вакансии
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-bold text-2xl md:text-3xl text-center mb-8"
            >
              Почему выбирают нас
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4"
                >
                  <Icon name={b.icon} size={20} className="text-yellow-500 shrink-0" />
                  <p className="text-zinc-300 text-sm">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingCallButton />
    </>
  )
}