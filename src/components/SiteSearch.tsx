import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import Icon from "@/components/ui/icon"

const pages = [
  { label: "Главная", href: "/", description: "О компании и все услуги" },
  { label: "О компании", href: "/stroitelnaya-kompaniya", description: "Строительная компания в Усть-Куте" },

  { label: "Разнорабочие", href: "/raznorabochie", description: "Ремонт, сборка, монтаж", group: "Услуги" },
  { label: "Грузчики", href: "/gruzchiki", description: "Переезд, погрузка, разгрузка", group: "Услуги" },
  { label: "Мастер на час", href: "/master-na-chas", description: "Сантехника, электрика, ремонт", group: "Услуги" },
  { label: "Муж на час", href: "/muzh-na-chas", description: "Мелкий ремонт на дому", group: "Услуги" },
  { label: "Сборка мебели", href: "/sborka-mebeli", description: "Шкафы, кухни, кровати, прихожие", group: "Услуги" },
  { label: "Плотник", href: "/plotnik", description: "Двери, ламинат, обшивка, полки", group: "Услуги" },
  { label: "Отделка бань и саун", href: "/otdelka-bani", description: "Внутренняя отделка под ключ", group: "Услуги" },
  { label: "Электрик", href: "/elektrik", description: "Проводка, розетки, щитки, техника", group: "Услуги" },
  { label: "Сантехник", href: "/santehnik", description: "Трубы, смесители, протечки, монтаж", group: "Услуги" },
  { label: "Клининг", href: "/klining", description: "Уборка квартир, офисов, химчистка", group: "Услуги" },
  { label: "Отделка квартир", href: "/otdelka-kvartir", description: "Косметический и капитальный ремонт", group: "Услуги" },

  { label: "Заборы", href: "/zabory", description: "Все виды ограждений", group: "Строительство" },
  { label: "Строительство бань", href: "/banya", description: "Брус, бревно, каркас, бочка", group: "Строительство" },
  { label: "Строительство домов", href: "/stroitelstvo-domov", description: "Каркас, брус, кирпич под ключ", group: "Строительство" },
  { label: "Фундаменты", href: "/fundamenty", description: "Ленточный, свайный, монолит", group: "Строительство" },
  { label: "Печи и камины", href: "/pechi-kaminy", description: "Кладка печей, каминов, дымоходов", group: "Строительство" },
  { label: "Пластиковые окна", href: "/plastikovye-okna", description: "Производство и монтаж", group: "Строительство" },
  { label: "Русская печь", href: "/russkaya-pech", description: "Кладка под ключ", group: "Строительство" },

  { label: "Вакансии", href: "/vakansii", description: "Открытые вакансии компании" },
  { label: "Стоимость", href: "/pricing", description: "Цены на все услуги" },
  { label: "Контакты", href: "/contacts", description: "Телефоны, адрес, реквизиты" },
]

const groupOrder = ["Услуги", "Строительство", "Другое"]

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false)
      navigate(href)
    },
    [navigate]
  )

  const grouped = groupOrder.map((group) => ({
    group,
    items: pages.filter((p) => (p.group ?? "Другое") === group),
  }))

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        aria-label="Поиск по сайту"
      >
        <Icon name="Search" size={18} />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Найти услугу или страницу..." />
        <CommandList>
          <CommandEmpty>Ничего не найдено</CommandEmpty>
          {grouped.map(({ group, items }) =>
            items.length > 0 ? (
              <CommandGroup key={group} heading={group}>
                {items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${item.label} ${item.description}`}
                    onSelect={() => handleSelect(item.href)}
                  >
                    <Icon name="ArrowRight" size={14} className="mr-2 text-yellow-400" />
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
