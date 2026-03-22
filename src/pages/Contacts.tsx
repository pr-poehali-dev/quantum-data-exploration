import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingCallButton } from "@/components/FloatingCallButton"
import Icon from "@/components/ui/icon"

const contacts = [
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (950) 099-09-31",
    href: "tel:+79500990931",
    color: "#F5C518",
    bg: "rgba(245,197,24,0.08)",
  },
  {
    icon: "Mail",
    label: "Почта",
    value: "masteroff.ustkut@mail.ru",
    href: "mailto:masteroff.ustkut@mail.ru",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
  },
  {
    emoji: "MAX",
    label: "MAX",
    value: "+7 (950) 099-09-31",
    href: "https://max.ru/+79500990931",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    emoji: "✈️",
    label: "Telegram",
    value: "+7 (950) 099-09-31",
    href: "https://t.me/+79500990931",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
  },
  {
    emoji: "ВК",
    label: "ВКонтакте",
    value: "vk.com/sbm38ustkut",
    href: "https://vk.com/sbm38ustkut",
    color: "#4f8ce6",
    bg: "rgba(79,140,230,0.08)",
  },
  {
    emoji: "ОК",
    label: "Одноклассники",
    value: "ok.ru/masteroffm",
    href: "https://ok.ru/masteroffm",
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
  },
]

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Контакты | МАСТЕРОФФ — Усть-Кут</title>
        <meta
          name="description"
          content="Контакты МАСТЕРОФФ в Усть-Куте. Телефон: +7 (950) 099-09-31. Telegram, ВКонтакте, Одноклассники. Выезд в день обращения."
        />
        <link rel="canonical" href="https://servismasteroff.ru/contacts" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "МАСТЕРОФФ",
          "telephone": "+79500990931",
          "email": "masteroff.ustkut@mail.ru",
          "url": "https://servismasteroff.ru",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Усть-Кут",
            "addressRegion": "Иркутская область",
            "addressCountry": "RU"
          },
          "sameAs": [
            "https://vk.com/sbm38ustkut",
            "https://ok.ru/masteroffm"
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        <div className="flex-1 w-full flex justify-center px-4 md:px-10 pt-28 mt-8 pb-20">
          <div className="w-full max-w-3xl">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Контакты
              </h1>
              <p className="text-zinc-400 text-lg">
                Свяжитесь с нами удобным способом — ответим быстро
              </p>
            </motion.div>

            {/* Contact cards */}
            <div className="grid gap-4">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all group"
                  style={{ backgroundColor: "#111113" }}
                >
                  {/* Icon / Emoji */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-base font-bold transition-transform group-hover:scale-105"
                    style={{ backgroundColor: c.bg, color: c.color }}
                  >
                    {c.icon ? (
                      <Icon name={c.icon} size={26} />
                    ) : (
                      <span className="text-sm font-extrabold tracking-tight">{c.emoji}</span>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wider">{c.label}</p>
                    <p className="text-white font-semibold text-base truncate">{c.value}</p>
                  </div>

                  {/* Arrow */}
                  <Icon
                    name="ArrowRight"
                    size={18}
                    className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </motion.a>
              ))}
            </div>

            {/* Working hours */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 p-6 rounded-2xl border border-zinc-800 flex items-center gap-5"
              style={{ backgroundColor: "#111113" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(245,197,24,0.08)", color: "#F5C518" }}
              >
                <Icon name="Clock" size={26} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wider">Режим работы</p>
                <p className="text-white font-semibold text-base">Ежедневно, 08:00 — 20:00</p>
                <p className="text-zinc-400 text-sm mt-0.5">Выезд в день обращения</p>
              </div>
            </motion.div>

          </div>
        </div>

        <Footer />
      </div>

      <FloatingCallButton />
    </>
  )
}