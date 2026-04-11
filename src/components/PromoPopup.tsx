import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

function getTimeUntilEndOfMonth() {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0)
  const diff = endOfMonth.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function PromoPopup() {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState(getTimeUntilEndOfMonth())

  useEffect(() => {
    const shown = sessionStorage.getItem("promo_shown")
    if (!shown) {
      const t = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setTime(getTimeUntilEndOfMonth())
    }, 1000)
    return () => clearInterval(interval)
  }, [visible])

  const close = () => {
    sessionStorage.setItem("promo_shown", "1")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.7, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 260 }}
            >
              {/* Gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pointer-events-none" />
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, #F5C518 0%, transparent 60%), radial-gradient(ellipse at bottom right, #ea580c 0%, transparent 60%)",
                }}
              />

              {/* Sparkling border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  padding: "1.5px",
                  background: "linear-gradient(135deg, #F5C518, #ea580c, #F5C518)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <Icon name="X" size={16} />
              </button>

              {/* Content */}
              <div className="relative z-10 px-7 pt-8 pb-7 text-center">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-5"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                    Акция месяца
                  </span>
                </motion.div>

                {/* Discount */}
                <motion.div
                  className="mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <span
                    className="text-8xl font-black leading-none"
                    style={{
                      background: "linear-gradient(135deg, #F5C518, #ea580c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    −30%
                  </span>
                </motion.div>

                <h2 className="text-white text-xl font-bold mb-1">на все услуги</h2>
                <p className="text-zinc-400 text-sm mb-6">
                  Успей заказать до конца месяца и сэкономь!
                </p>

                {/* Timer */}
                <div className="bg-black/40 rounded-2xl px-4 py-4 mb-6">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">
                    Акция заканчивается через
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {[
                      { v: time.days, l: "дней" },
                      { v: time.hours, l: "часов" },
                      { v: time.minutes, l: "минут" },
                      { v: time.seconds, l: "секунд" },
                    ].map(({ v, l }, i) => (
                      <div key={l} className="flex items-center gap-2">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-12 h-12 flex items-center justify-center rounded-xl font-black text-xl text-white"
                            style={{ background: "linear-gradient(135deg, #F5C518, #ea580c)" }}
                          >
                            {pad(v)}
                          </div>
                          <span className="text-zinc-500 text-[10px] mt-1">{l}</span>
                        </div>
                        {i < 3 && (
                          <span className="text-amber-400 font-black text-xl mb-4">:</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="tel:+79148768882"
                  onClick={close}
                  className="block w-full py-4 rounded-2xl font-black text-black text-lg uppercase tracking-wide transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #F5C518, #ea580c)" }}
                >
                  Позвонить и заказать
                </a>

                <p className="text-zinc-600 text-xs mt-3">
                  Скидка действует при заказе до конца месяца
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}