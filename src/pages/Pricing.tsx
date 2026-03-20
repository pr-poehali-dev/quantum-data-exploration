import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Разнорабочие",
    href: "/raznorabochie",
    icon: "Hammer",
    color: "amber",
    description: "Ремонт, сборка, монтаж и любые физические работы",
    plans: [
      { label: "Минимальный заказ", hours: 4, price: 2000, rate: 500 },
      { label: "Полный день", hours: 8, price: 4000, rate: 500 },
    ],
  },
  {
    title: "Грузчики",
    href: "/gruzchiki",
    icon: "Package",
    color: "blue",
    description: "Переезд, погрузка, разгрузка, подъём на этаж",
    plans: [
      { label: "Минимальный заказ", hours: 4, price: 2000, rate: 500 },
      { label: "Полный день", hours: 8, price: 4000, rate: 500 },
    ],
  },
  {
    title: "Мастер на час",
    href: "/master-na-chas",
    icon: "Wrench",
    color: "green",
    description: "Сантехника, электрика, ремонт любой сложности",
    plans: [
      { label: "Минимальный заказ", hours: 4, price: 2000, rate: 500 },
      { label: "Полный день", hours: 8, price: 4000, rate: 500 },
    ],
  },
  {
    title: "Муж на час",
    href: "/muzh-na-chas",
    icon: "Screwdriver",
    color: "purple",
    description: "Мелкий бытовой ремонт, сборка мебели, установка",
    plans: [
      { label: "Минимальный заказ", hours: 4, price: 2000, rate: 500 },
      { label: "Полный день", hours: 8, price: 4000, rate: 500 },
    ],
  },
]

const colorMap: Record<string, { border: string; iconBg: string; iconText: string; badge: string; badgeText: string }> = {
  amber: {
    border: "hover:border-amber-500/50",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-400",
    badge: "bg-amber-500/10 border border-amber-500/30",
    badgeText: "text-amber-400",
  },
  blue: {
    border: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    badge: "bg-blue-500/10 border border-blue-500/30",
    badgeText: "text-blue-400",
  },
  green: {
    border: "hover:border-green-500/50",
    iconBg: "bg-green-500/10",
    iconText: "text-green-400",
    badge: "bg-green-500/10 border border-green-500/30",
    badgeText: "text-green-400",
  },
  purple: {
    border: "hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
    badge: "bg-purple-500/10 border border-purple-500/30",
    badgeText: "text-purple-400",
  },
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm mb-6">
              <Icon name="Tag" size={14} />
              Прозрачные цены
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Стоимость услуг
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Единый тариф — <span className="text-white font-semibold">500 ₽/час</span> для всех видов работ.
              Минимальный заказ — 4 часа.
            </p>
          </div>

          {/* Rate highlight */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500 ₽</div>
                <div className="text-sm text-zinc-400">за 1 час работы</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Icon name="CalendarDays" size={20} className="text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4 часа</div>
                <div className="text-sm text-zinc-400">минимальный заказ</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Без скрытых</div>
                <div className="text-sm text-zinc-400">доплат и наценок</div>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service) => {
              const c = colorMap[service.color]
              return (
                <div
                  key={service.title}
                  className={`bg-zinc-900 border border-zinc-800 ${c.border} rounded-3xl p-6 transition-colors`}
                >
                  {/* Card header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon name={service.icon} size={22} className={c.iconText} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{service.title}</h2>
                      <p className="text-sm text-zinc-400">{service.description}</p>
                    </div>
                  </div>

                  {/* Rate */}
                  <div className={`inline-flex items-center gap-2 ${c.badge} rounded-full px-3 py-1 text-sm mb-5`}>
                    <Icon name="Zap" size={12} className={c.badgeText} />
                    <span className={c.badgeText}>500 ₽ / час</span>
                  </div>

                  {/* Plans */}
                  <div className="space-y-3">
                    {service.plans.map((plan) => (
                      <div
                        key={plan.hours}
                        className="flex items-center justify-between bg-zinc-800/50 border border-zinc-700/50 rounded-2xl px-5 py-4"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{plan.label}</div>
                          <div className="text-xs text-zinc-500 mt-0.5">{plan.hours} часа × {plan.rate} ₽</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">{plan.price.toLocaleString()} ₽</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="mt-5 flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl py-3 text-sm text-zinc-300 font-medium transition-colors"
                  >
                    Подробнее об услуге
                    <Icon name="ArrowRight" size={14} />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Нужен расчёт для вашей задачи?
            </h2>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">
              Позвоните нам — обсудим детали и назовём точную стоимость под ваш объём работ
            </p>
            <a
              href="tel:+79500990931"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
              style={{ backgroundColor: "#F5C518", color: "#09090B" }}
            >
              <Icon name="Phone" size={18} />
              Позвонить и получить расчёт
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}