import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Новая заявка:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AУслуга: ${formData.service}%0AОписание: ${formData.description}`
    window.open(`https://wa.me/79086461687?text=${message}`, "_blank")
    onClose()
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
          <X className="w-5 h-5" />
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
              <option value="Ремонт и отделка">Ремонт и отделка</option>
              <option value="Сборка мебели">Сборка мебели</option>
              <option value="Электрика">Электрика</option>
              <option value="Сантехника">Сантехника</option>
              <option value="Поклейка обоев">Поклейка обоев</option>
              <option value="Покраска">Покраска</option>
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

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 px-5 py-2.5 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircle" size={16} />
              Отправить в WhatsApp
            </button>
            <button
              type="button"
              onClick={() => {
                const message = `Новая заявка:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AУслуга: ${formData.service}%0AОписание: ${formData.description}`
                window.open(`https://t.me/share/url?url=&text=${message}`, "_blank")
                onClose()
              }}
              className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Telegram
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}