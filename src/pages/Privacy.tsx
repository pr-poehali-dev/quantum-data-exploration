import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm mb-8"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <h1 className="text-2xl md:text-3xl font-medium text-white mb-8">
          Политика обработки персональных данных
        </h1>

        <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-medium text-base mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки
              и защиты персональных данных пользователей сайта МАСТЕРОФФ (далее — Оператор).
            </p>
            <p className="mt-2">
              Оператор: ИП / самозанятый, оказывающий услуги разнорабочих в г. Усть-Кут, Иркутская область.
            </p>
            <p className="mt-2">
              Контактный телефон: +7 (908) 646-16-87
            </p>
            <p className="mt-2">
              Email: masteroff38@mail.ru
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">2. Какие данные мы собираем</h2>
            <p>При использовании сайта могут собираться следующие персональные данные:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Имя</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Описание задачи / заказа</li>
              <li>Данные об использовании сайта (cookies, IP-адрес, информация о браузере)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">3. Цели обработки данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Обработка заявок и обратная связь с пользователем</li>
              <li>Оказание услуг, указанных на сайте</li>
              <li>Улучшение качества работы сайта и сервиса</li>
              <li>Статистический анализ посещаемости сайта (Яндекс.Метрика)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">4. Правовые основания обработки</h2>
            <p>
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
              <li>Согласия субъекта персональных данных на обработку</li>
              <li>Необходимости исполнения договора, стороной которого является субъект</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">5. Порядок обработки данных</h2>
            <p>
              Оператор обрабатывает персональные данные с использованием средств автоматизации и без них. 
              Данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
            </p>
            <p className="mt-2">
              Срок хранения персональных данных — до момента отзыва согласия пользователем или до достижения
              целей обработки.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">6. Использование cookies</h2>
            <p>
              Сайт использует файлы cookies для обеспечения корректной работы, а также для сбора статистики
              через сервис Яндекс.Метрика (счётчик № 106815107).
            </p>
            <p className="mt-2">
              Cookies позволяют анализировать взаимодействие пользователей с сайтом, включая:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Просмотренные страницы и время на сайте</li>
              <li>Источники перехода на сайт</li>
              <li>Действия на сайте (клики, прокрутка)</li>
              <li>Технические данные (браузер, устройство, разрешение экрана)</li>
            </ul>
            <p className="mt-2">
              Вы можете отключить cookies в настройках своего браузера, однако это может повлиять на 
              корректность работы сайта.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">7. Защита данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных данных
              от неправомерного доступа, уничтожения, изменения, блокирования, копирования и распространения.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">8. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Получить информацию об обработке своих персональных данных</li>
              <li>Потребовать уточнения, блокирования или уничтожения своих данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия оператора в уполномоченный орган (Роскомнадзор)</li>
            </ul>
            <p className="mt-2">
              Для реализации своих прав обращайтесь по телефону +7 (908) 646-16-87 или на email masteroff38@mail.ru.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-base mb-3">9. Изменение Политики</h2>
            <p>
              Оператор оставляет за собой право вносить изменения в настоящую Политику. Новая редакция вступает
              в силу с момента её размещения на сайте.
            </p>
            <p className="mt-2 text-zinc-500">
              Дата последнего обновления: 13 февраля 2026 г.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
