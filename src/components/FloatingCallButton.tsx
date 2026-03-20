import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FloatingCallButton() {
  return (
    <a
      href="tel:+79500990931"
      className="fixed bottom-8 right-6 z-50 flex items-center justify-center"
      aria-label="Позвонить"
    >
      <span
        className="absolute inline-flex rounded-full w-16 h-16 animate-ping"
        style={{ backgroundColor: "rgba(245, 197, 24, 0.35)", animationDuration: "1.4s" }}
      />
      <span
        className="absolute inline-flex rounded-full w-20 h-20 animate-ping"
        style={{ backgroundColor: "rgba(245, 197, 24, 0.18)", animationDuration: "1.4s", animationDelay: "0.3s" }}
      />
      <span
        className="absolute inline-flex rounded-full w-24 h-24 animate-ping"
        style={{ backgroundColor: "rgba(245, 197, 24, 0.08)", animationDuration: "1.4s", animationDelay: "0.6s" }}
      />
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{ backgroundColor: "#F5C518", boxShadow: "0 0 24px rgba(245, 197, 24, 0.5)" }}
      >
        <Icon name="Phone" size={24} style={{ color: "#09090B" }} />
      </motion.span>
    </a>
  )
}
