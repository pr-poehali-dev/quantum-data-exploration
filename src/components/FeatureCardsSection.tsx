import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const featureCards = [
  {
    title: "Уборка снега",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/e34c190b-3244-4469-a1e2-2e7ea82e1da6.jpeg"
          alt="Уборка снега"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },

  {
    title: "Уборка территории",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/009ee802-486d-4bd8-904f-b1061b27eab6.jpg"
          alt="Уборка территории"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Копка ям",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/45b1ae94-9f87-4e90-b394-908f859f6541.jpeg"
          alt="Копка ям"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Помощь на стройке",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d10a119d-8182-45c5-84eb-26f31e594144.jpg"
          alt="Помощь на стройке"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Услуги грузчиков",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/689451de-b18a-483a-a44f-e7f634a30b14.png"
          alt="Услуги грузчиков"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Перенос мебели",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/ca52a07a-9542-417e-8cd5-8e3eacc5f204.jpg"
          alt="Перенос мебели"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Наши{" "}
              <span className="inline-block px-2 py-0.5 rounded-md" style={{ backgroundColor: "#F5C518", color: "#09090B" }}>услуги</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Уборка снега, уборка территории, копка ям, помощь на стройке, услуги грузчиков, перенос мебели и многое другое. Быстро, качественно и по честным ценам.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline">
                  Заказать услугу <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "30px",
                  height: "360px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full flex"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}