import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_accepted")
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <Icon name="Cookie" size={20} className="text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">
          Сайт использует файлы cookie и{" "}
          <span className="text-zinc-300">рекомендательные технологии</span>.
          Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
          <Link to="/privacy" className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2">
            политикой обработки персональных данных
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
        >
          Принять
        </button>
      </div>
    </div>
  )
}
