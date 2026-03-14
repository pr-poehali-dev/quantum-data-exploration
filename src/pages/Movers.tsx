import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "PackageOpen",
    title: "Погрузка и разгрузка",
    desc: "Мебель, бытовая техника, стройматериалы, коробки. Работаем аккуратно и быстро.",
    price: "от 500 ₽/час"
  },
  {
    icon: "Truck",
    title: "Помощь при переезде",
    desc: "Вынесем, загрузим, разгрузим и занесём на этаж. Без лифта тоже работаем.",
    price: "от 500 ₽/час"
  },
  {
    icon: "Building2",
    title: "Вынос мусора и хлама",
    desc: "Старая мебель, строительный мусор, накопившийся хлам — всё вывезем.",
    price: "от 500 ₽/час"
  },
  {
    icon: "Warehouse",
    title: "Разгрузка фур и газелей",
    desc: "Быстрая разгрузка транспорта на складе, магазине или строительном объекте.",
    price: "от 500 ₽/час"
  },
  {
    icon: "MoveUpRight",
    title: "Подъём на этаж",
    desc: "Занесём стройматериалы, мебель или оборудование на любой этаж.",
    price: "от 500 ₽/час"
  },
  {
    icon: "ShieldCheck",
    title: "Бережная работа",
    desc: "Хрупкие вещи, антиквариат, зеркала — работаем осторожно и ответственно.",
    price: "от 500 ₽/час"
  }
]

const Movers = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto px-6 py-12">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm mb-10"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full mb-4">
            <Icon name="MapPin" size={12} />
            Усть-Кут, выезд в день обращения
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Услуги грузчиков в Усть-Куте
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Профессиональные грузчики для переезда, погрузки и разгрузки. Работаем физически крепко и надёжно — без повреждений и опозданий.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="tel:+79086461687"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Icon name="Phone" size={18} />
              Позвонить: +7 (908) 646-16-87
            </a>
            <a
              href="https://wa.me/79086461687"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Icon name="MessageCircle" size={18} />
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: "Clock", label: "Выезд за 1 час" },
            { icon: "Banknote", label: "500 ₽/час" },
            { icon: "Users", label: "1–4 грузчика" },
            { icon: "Star", label: "Работаем без выходных" }
          ].map((item) => (
            <div key={item.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center gap-2">
              <Icon name={item.icon} size={22} className="text-orange-400" />
              <span className="text-white text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Услуги */}
        <h2 className="text-xl font-semibold text-white mb-6">Что мы делаем</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Icon name={s.icon} size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-2">{s.desc}</p>
                <span className="text-orange-400 text-sm font-medium">{s.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Как работаем */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Как это работает</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Звоните или пишете", desc: "Объясняете задачу — сколько и что нужно перенести, адрес и время." },
              { step: "2", title: "Договариваемся о времени", desc: "Подтверждаем состав бригады и стоимость. Без скрытых доплат." },
              { step: "3", title: "Приезжаем и работаем", desc: "Грузчики прибывают вовремя и выполняют всю физическую работу." },
              { step: "4", title: "Принимаете и оплачиваете", desc: "Расчёт по факту выполненной работы. Наличные или перевод." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-zinc-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Нужны грузчики в Усть-Куте?</h2>
          <p className="text-zinc-400 mb-6">Звоните прямо сейчас — выедем в течение часа</p>
          <a
            href="tel:+79086461687"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg"
          >
            <Icon name="Phone" size={20} />
            +7 (908) 646-16-87
          </a>
        </div>

      </div>
    </div>
  )
}

export default Movers