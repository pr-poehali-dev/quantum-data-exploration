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
        src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/files/143d89ff-4171-40dc-915d-af95ea25c53f.jpg"
        alt="Команда профессиональных разнорабочих"
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}