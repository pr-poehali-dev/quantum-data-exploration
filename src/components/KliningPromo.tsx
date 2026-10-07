import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

export function KliningPromo() {
  const [closed, setClosed] = useState(false)
  const location = useLocation()

  if (closed || location.pathname === "/klining") return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 120, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center"
        style={{ zIndex: 2147483640 }}
      >
        <div className="relative rounded-l-2xl shadow-2xl overflow-hidden" style={{ backgroundColor: "#E8622A" }}>
          <button
            onClick={() => setClosed(true)}
            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          >
            <Icon name="X" size={10} className="text-white" />
          </button>
          <Link to="/klining" className="flex flex-col items-center gap-3 px-5 py-6 pr-7">
            <span className="text-white text-sm font-bold uppercase tracking-wide opacity-90">Новинка!</span>
            <Icon name="Sparkles" size={32} className="text-white" />
            <div className="text-white text-base font-extrabold text-center leading-snug" style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)", maxHeight: 180 }}>
              Теперь доступен клининг!
            </div>
            <span className="text-white text-base font-bold">→</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}