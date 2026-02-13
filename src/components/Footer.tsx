import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 md:py-12 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/4b9a3c2f-fda5-4533-80d3-aafcd7b7efcb.png" 
              alt="МАСТЕРОФФ"
              className="h-8"
            />
          </div>

          {/* Контакты */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3 md:gap-4 text-sm">
            <a 
              href="tel:+79086461687" 
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 (908) 646-16-87
            </a>
            <span className="hidden md:inline text-zinc-700">•</span>
            <p className="text-zinc-500 flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Усть-Кут, Иркутская обл.
            </p>
            <span className="hidden md:inline text-zinc-700">•</span>
            <a 
              href="mailto:masteroff38@mail.ru" 
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name="Mail" size={16} />
              masteroff38@mail.ru
            </a>
            <span className="hidden md:inline text-zinc-700">•</span>
            <a 
              href="https://wa.me/79086461687" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
            <span className="hidden md:inline text-zinc-700">•</span>
            <a 
              href="https://t.me/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} МАСТЕРОФФ. Все права защищены.
          </p>
          <Link
            to="/privacy"
            className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs"
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  )
}