import { motion } from "framer-motion"

const galleryImages = [
  {
    title: "Ремонт квартиры",
    description: "Полная отделка 2-комнатной квартиры",
    image: "/placeholder.jpg",
  },
  {
    title: "Сборка кухни",
    description: "Угловая кухня 3.5 метра",
    image: "/placeholder.jpg",
  },
  {
    title: "Электромонтаж",
    description: "Замена проводки в офисе",
    image: "/placeholder.jpg",
  },
  {
    title: "Сантехнические работы",
    description: "Установка душевой кабины",
    image: "/placeholder.jpg",
  },
  {
    title: "Поклейка обоев",
    description: "Комната 18 м²",
    image: "/placeholder.jpg",
  },
  {
    title: "Установка техники",
    description: "Подключение бытовой техники",
    image: "/placeholder.jpg",
  },
]

export function GallerySection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-4">
            Наши работы
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Примеры выполненных проектов в Усть-Куте. Качество, которому можно доверять.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-6">
            Хотите увидеть больше примеров работ? Свяжитесь с нами!
          </p>
          <button className="px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors">
            Смотреть все работы
          </button>
        </motion.div>
      </div>
    </section>
  )
}
