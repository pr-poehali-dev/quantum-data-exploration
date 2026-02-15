import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    description: "",
  })
  const [agreed, setAgreed] = useState(false)

  const buildMessage = () =>
    `Новая заявка:\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nУслуга: ${formData.service}\nОписание: ${formData.description}`

  const sendTo = (target: "telegram" | "max" | "vk") => {
    const message = encodeURIComponent(buildMessage())
    const urls = {
      telegram: `https://t.me/masteroff38?text=${message}`,
      max: `https://ok.me/masteroff38?text=${message}`,
      vk: `https://vk.me/masteroff38?message=${message}`,
    }
    window.open(urls[target], "_blank")
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendTo("telegram")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <h2 className="text-2xl font-medium text-white mb-6">Заказать услугу</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Ваше имя</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Телефон</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Услуга</label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
            >
              <option value="">Выберите услугу</option>
              <option value="Уборка снега">Уборка снега</option>
              <option value="Уборка территории">Уборка территории</option>
              <option value="Копка ям">Копка ям</option>
              <option value="Помощь на стройке">Помощь на стройке</option>
              <option value="Услуги грузчиков">Услуги грузчиков</option>
              <option value="Перенос мебели">Перенос мебели</option>
              <option value="Другое">Другое</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Описание работы</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors h-24 resize-none"
              placeholder="Расскажите подробнее о работе..."
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-white accent-white"
            />
            <span className="text-xs text-zinc-500 leading-relaxed">
              Я даю согласие на обработку{" "}
              <Link
                to="/privacy"
                target="_blank"
                className="text-zinc-400 underline hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                персональных данных
              </Link>
            </span>
          </label>

          <div className="flex flex-col gap-2 pt-2">
            <button
              type="submit"
              className="w-full px-5 py-2.5 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Отправить в Telegram
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  const form = document.querySelector("form") as HTMLFormElement
                  if (form?.checkValidity() && agreed) sendTo("max")
                  else form?.reportValidity()
                }}
                className="flex-1 px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Icon name="MessageCircle" size={16} />
                Max
              </button>
              <button
                type="button"
                onClick={() => {
                  const form = document.querySelector("form") as HTMLFormElement
                  if (form?.checkValidity() && agreed) sendTo("vk")
                  else form?.reportValidity()
                }}
                className="flex-1 px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Icon name="MessageSquare" size={16} />
                ВКонтакте
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}