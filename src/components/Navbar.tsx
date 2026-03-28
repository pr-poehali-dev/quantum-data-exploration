import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const servicesMenu = [
  { label: "Разнорабочие", href: "/raznorabochie", description: "Ремонт, сборка, монтаж" },
  { label: "Грузчики", href: "/gruzchiki", description: "Переезд, погрузка, разгрузка" },
  { label: "Мастер на час", href: "/master-na-chas", description: "Сантехника, электрика, ремонт" },
  { label: "Муж на час", href: "/muzh-na-chas", description: "Мелкий ремонт на дому" },
  { label: "Сборка мебели", href: "/sborka-mebeli", description: "Шкафы, кухни, кровати, прихожие" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/0f37afeb-2ed1-4004-a259-f654f185140c.png"
              alt="МАСТЕРОФФ - Профессиональные разнорабочие"
              className="h-10"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Dropdown Услуги */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Услуги
                <Icon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-1.5">
                    {servicesMenu.map((item) =>
                      item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group"
                        >
                          <span className="text-sm text-white font-medium">{item.label}</span>
                          <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                            {item.description}
                          </span>
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group"
                        >
                          <span className="text-sm text-white font-medium">{item.label}</span>
                          <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                            {item.description}
                          </span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/vakansii" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Вакансии
            </Link>
            <Link to="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Стоимость
            </Link>
            <Link to="/contacts" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Контакты
            </Link>

            <a
              href="tel:+79500990931"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-bold"
              style={{ backgroundColor: "#F5C518", color: "#09090B" }}
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {/* Аккордеон услуги */}
            <button
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Услуги
              <Icon
                name="ChevronDown"
                size={16}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-1 mb-1">
                {servicesMenu.map((item) =>
                  item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={handleLinkClick}
                      className="flex flex-col py-2 border-l border-zinc-800 pl-4"
                    >
                      <span className="text-sm text-white font-medium">{item.label}</span>
                      <span className="text-xs text-zinc-500">{item.description}</span>
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex flex-col py-2 border-l border-zinc-800 pl-4"
                    >
                      <span className="text-sm text-white font-medium">{item.label}</span>
                      <span className="text-xs text-zinc-500">{item.description}</span>
                    </a>
                  )
                )}
              </div>
            )}

            <Link
              to="/vakansii"
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Вакансии
            </Link>
            <Link
              to="/pricing"
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Стоимость
            </Link>
            <Link
              to="/contacts"
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}