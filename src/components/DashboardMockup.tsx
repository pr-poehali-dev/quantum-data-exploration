import { motion } from "framer-motion"

export function DashboardMockup() {
  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img 
        src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/c5224f9d-ea38-4269-a672-954e55510c81.jpg"
        alt="Команда профессиональных разнорабочих МАСТЕРОФФ"
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}