import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

function AppInstallModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#18181B" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F5C518 0%, #ff9d00 100%)" }}>
              <Icon name="Smartphone" size={18} className="text-black" />
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">Установить приложение</div>
              <div className="text-zinc-500 text-xs">МастерОФФ на телефон</div>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5 max-h-[70vh] overflow-y-auto">

          {/* Android */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🤖</span>
              <span className="text-white font-semibold">Android (Chrome)</span>
            </div>
            <ol className="flex flex-col gap-2">
              {[
                "Откройте браузер Google Chrome на телефоне",
                <>Перейдите на сайт <span className="text-yellow-400 font-medium">servismasteroff.ru</span></>,
                <>Нажмите на <span className="text-white font-medium">три точки (⋮)</span> в правом верхнем углу</>,
                <>Выберите <span className="text-white font-medium">«Добавить на главный экран»</span></>,
                "Нажмите «Добавить» в появившемся окне",
                "Иконка МастерОФФ появится на рабочем столе",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-zinc-800" />

          {/* iPhone */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🍎</span>
              <span className="text-white font-semibold">iPhone (Safari)</span>
            </div>
            <ol className="flex flex-col gap-2">
              {[
                "Откройте браузер Safari на iPhone",
                <>Перейдите на сайт <span className="text-yellow-400 font-medium">servismasteroff.ru</span></>,
                <>Нажмите кнопку <span className="text-white font-medium">«Поделиться»</span> — значок квадрата со стрелкой (внизу)</>,
                <>Выберите <span className="text-white font-medium">«На экран Домой»</span></>,
                "Нажмите «Добавить» в правом верхнем углу",
                "Иконка МастерОФФ появится на рабочем столе",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-zinc-800" />

          {/* Уведомления */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔔</span>
              <span className="text-white font-semibold">Включение уведомлений</span>
            </div>
            <ol className="flex flex-col gap-2">
              {[
                "Откройте приложение",
                <>Нажмите на <span className="text-white font-medium">колокольчик 🔔</span> в верхнем левом углу</>,
                "Нажмите «Разрешить»",
                "Готово — будете получать уведомления о статусе заказа",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Важно */}
          <div className="rounded-xl px-4 py-3 flex gap-3" style={{ backgroundColor: "#27272A" }}>
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-zinc-400 text-xs leading-relaxed">
              На iPhone уведомления работают только начиная с <span className="text-white">iOS 16.4</span> и только если приложение добавлено на экран «Домой».
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800">
          <a
            href="https://ust-kut-masters-app--preview.poehali.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F5C518 0%, #ff9d00 100%)" }}
          >
            <Icon name="ExternalLink" size={15} />
            Открыть приложение
          </a>
        </div>
      </div>
    </div>
  )
}

const zaboryMenu = [
  { label: "Забор из дерева", href: "/zabory#derevo" },
  { label: "Забор из евроштакетника", href: "/zabory#evroshtaketnik" },
  { label: "Забор из профлиста", href: "/zabory#proflist" },
  { label: "Заборы 2D и 3D", href: "/zabory#2d3d" },
  { label: "Забор из сетки-рабицы", href: "/zabory#setka" },
  { label: "Забор-жалюзи", href: "/zabory#zhalyuzi" },
  { label: "Забор из кирпича", href: "/zabory#kirpich" },
  { label: "Забор из профтрубы", href: "/zabory#proftruba" },
  { label: "Забор из поликарбоната", href: "/zabory#polikarbonat" },
]

const servicesMenu = [
  { label: "Разнорабочие", href: "/raznorabochie", description: "Ремонт, сборка, монтаж" },
  { label: "Грузчики", href: "/gruzchiki", description: "Переезд, погрузка, разгрузка" },
  { label: "Мастер на час", href: "/master-na-chas", description: "Сантехника, электрика, ремонт" },
  { label: "Муж на час", href: "/muzh-na-chas", description: "Мелкий ремонт на дому" },
  { label: "Сборка мебели", href: "/sborka-mebeli", description: "Шкафы, кухни, кровати, прихожие" },
  { label: "Плотник", href: "/plotnik", description: "Двери, ламинат, обшивка, полки" },
  { label: "Отделка бань и саун", href: "/otdelka-bani", description: "Внутренняя отделка под ключ" },
  { label: "Электрик", href: "/elektrik", description: "Проводка, розетки, щитки, техника" },
  { label: "Сантехник", href: "/santehnik", description: "Трубы, смесители, протечки, монтаж" },
  { label: "Клининг", href: "/klining", description: "Уборка квартир, офисов, химчистка" },
  { label: "Отделка квартир", href: "/otdelka-kvartir", description: "Косметический и капитальный ремонт" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isZaboryOpen, setIsZaboryOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileZaboryOpen, setIsMobileZaboryOpen] = useState(false)
  const [isAppModalOpen, setIsAppModalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const zaboryDropdownRef = useRef<HTMLDivElement>(null)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
    setIsMobileZaboryOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
      if (zaboryDropdownRef.current && !zaboryDropdownRef.current.contains(e.target as Node)) {
        setIsZaboryOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
    {isAppModalOpen && <AppInstallModal onClose={() => setIsAppModalOpen(false)} />}
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

            {/* Dropdown Строительство */}
            <div className="relative" ref={zaboryDropdownRef}>
              <button
                onClick={() => setIsZaboryOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Строительство
                <Icon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-200 ${isZaboryOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isZaboryOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-1.5">
                    <Link
                      to="/zabory"
                      onClick={() => setIsZaboryOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-sm text-white font-medium">Заборы</span>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Все виды ограждений</span>
                    </Link>
                    <Link
                      to="/banya"
                      onClick={() => setIsZaboryOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-sm text-white font-medium">Строительство бань</span>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Брус, бревно, каркас, бочка</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/stroitelnaya-kompaniya" className="text-sm text-zinc-400 hover:text-white transition-colors">
              О компании
            </Link>
            <Link to="/vakansii" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Вакансии
            </Link>
            <Link to="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Стоимость
            </Link>
            <Link to="/contacts" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Контакты
            </Link>

            <button
              onClick={() => setIsAppModalOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F5C518 0%, #ff9d00 100%)", boxShadow: "0 0 16px rgba(245,197,24,0.45)" }}
            >
              <Icon name="Smartphone" size={15} />
              Скачать приложение
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">NEW</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
                <span className="absolute inline-flex rounded-full w-6 h-6 animate-ping" style={{ backgroundColor: "rgba(245, 197, 24, 0.35)", animationDuration: "1.4s" }} />
                <span className="absolute inline-flex rounded-full w-8 h-8 animate-ping" style={{ backgroundColor: "rgba(245, 197, 24, 0.15)", animationDuration: "1.4s", animationDelay: "0.3s" }} />
                <Icon name="Phone" size={18} style={{ color: "#F5C518" }} className="relative" />
              </div>
              <div className="flex flex-col leading-tight">
                <a href="tel:+73953270234" className="text-sm text-white hover:text-yellow-400 transition-colors">8 (3953) 27-02-34</a>
                <a href="tel:+79500990931" className="text-xs text-zinc-400 hover:text-yellow-400 transition-colors">+7 (950) 099-09-31</a>
              </div>
            </div>
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
        <div className="md:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md overflow-y-auto" style={{ maxHeight: "calc(100dvh - 65px)" }}>
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

            {/* Аккордеон строительство */}
            <button
              onClick={() => setIsMobileZaboryOpen((v) => !v)}
              className="flex items-center justify-between w-full text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              Строительство
              <Icon
                name="ChevronDown"
                size={16}
                className={`transition-transform duration-200 ${isMobileZaboryOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isMobileZaboryOpen && (
              <div className="ml-4 flex flex-col gap-1 mb-1">
                <Link
                  to="/zabory"
                  onClick={handleLinkClick}
                  className="flex flex-col py-2 border-l border-zinc-800 pl-4"
                >
                  <span className="text-sm text-white font-medium">Заборы</span>
                  <span className="text-xs text-zinc-500">Все виды ограждений</span>
                </Link>
                <Link
                  to="/banya"
                  onClick={handleLinkClick}
                  className="flex flex-col py-2 border-l border-zinc-800 pl-4"
                >
                  <span className="text-sm text-white font-medium">Строительство бань</span>
                  <span className="text-xs text-zinc-500">Брус, бревно, каркас, бочка</span>
                </Link>
              </div>
            )}

            <Link
              to="/stroitelnaya-kompaniya"
              onClick={handleLinkClick}
              className="text-base text-zinc-400 hover:text-white transition-colors py-2"
            >
              О компании
            </Link>
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
            <button
              onClick={() => { handleLinkClick(); setIsAppModalOpen(true) }}
              className="relative flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-black mt-1"
              style={{ background: "linear-gradient(135deg, #F5C518 0%, #ff9d00 100%)", boxShadow: "0 0 16px rgba(245,197,24,0.35)" }}
            >
              <Icon name="Smartphone" size={16} />
              Скачать приложение
              <span className="absolute -top-1.5 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">NEW</span>
            </button>

            <div className="flex items-center gap-3 pt-2 pb-1">
              <div className="relative flex items-center justify-center w-9 h-9 flex-shrink-0">
                <span className="absolute inline-flex rounded-full w-9 h-9 animate-ping" style={{ backgroundColor: "rgba(245, 197, 24, 0.35)", animationDuration: "1.4s" }} />
                <span className="absolute inline-flex rounded-full w-11 h-11 animate-ping" style={{ backgroundColor: "rgba(245, 197, 24, 0.15)", animationDuration: "1.4s", animationDelay: "0.3s" }} />
                <span className="relative flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "#F5C518" }}>
                  <Icon name="Phone" size={16} style={{ color: "#09090B" }} />
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <a href="tel:+79500990931" className="text-base font-bold text-white">+7 (950) 099-09-31</a>
                <a href="tel:+73953270234" className="text-sm text-zinc-400">8 (3953) 27-02-34</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}