import { useState } from "react"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/4b9a3c2f-fda5-4533-80d3-aafcd7b7efcb.png" 
              alt="МАСТЕРОФФ - Профессиональные разнорабочие"
              className="h-8"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Стоимость
            </a>
            <a href="#contacts" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Контакты
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:+79086461687"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Услуги
            </a>
            <a 
              href="#pricing" 
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Стоимость
            </a>
            <a 
              href="#contacts" 
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}