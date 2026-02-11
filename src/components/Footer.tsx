export function Footer() {
  const footerLinks = {
    "Услуги": ["Ремонт и отделка", "Сборка мебели", "Электрика", "Сантехника", "Поклейка обоев", "Покраска", "Установка техники"],
    "Информация": ["Цены", "Порядок работы", "Гарантии", "Отзывы", "Наши работы", "Частые вопросы"],
    "О нас": ["Команда", "Опыт работы", "География", "Конфиденциальность"],
    "Контакты": ["+7 (999) 123-45-67", "Усть-Кут, Иркутская обл.", "info@ustkut.ru", "WhatsApp", "Telegram"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/4b9a3c2f-fda5-4533-80d3-aafcd7b7efcb.png" 
              alt="МАСТЕРОФФ"
              className="h-8"
            />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}