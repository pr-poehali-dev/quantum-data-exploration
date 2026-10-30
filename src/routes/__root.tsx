import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {CookieBanner} from "@/components/CookieBanner";
import NotFound from "@/pages/NotFound";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

const TITLE = "МАСТЕРОФФ — строительная компания в Усть-Куте";
const DESCRIPTION =
    "Строительная компания МАСТЕРОФФ в Усть-Куте. Строительство домов, бань, заборов, фундаментов под ключ. Гарантия качества, доступные цены. Звоните: +7 (950) 099-09-31";
const OG_IMAGE =
    "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/3333e0bd-34e6-4307-a0dd-f123f70ac75d.jpg";

const LOCAL_BUSINESS_LD = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МАСТЕРОФФ",
      "description": "Профессиональные разнорабочие в Усть-Куте",
      "image": "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/366dd0d4-cb9f-48ee-a86c-56ed2d9f48dc.png",
      "telephone": "+79086461687",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Усть-Кут",
        "addressRegion": "Иркутская область",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "56.7943",
        "longitude": "105.7653"
      },
      "url": "https://servismasteroff.ru/",
      "priceRange": "500₽/час",
      "areaServed": {
        "@type": "City",
        "name": "Усть-Кут"
      },
      "openingHours": "Mo-Su 08:00-20:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 5.0,
        "reviewCount": 47,
        "bestRating": 5,
        "worstRating": 1
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Наталья В." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Заказала сборку шкафа-купе ИКЕА. Мастер приехал в тот же день, собрал быстро и аккуратно."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Андрей С." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Помогли с переездом, всё сделали быстро и аккуратно. Рекомендую!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Марина Л." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Очень довольна работой мастеров. Приехали вовремя, сделали всё качественно."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги разнорабочих",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ремонт и отделка",
              "description": "Поклейка обоев, покраска стен, укладка ламината"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Электрика",
              "description": "Установка розеток, выключателей, монтаж люстр"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Сантехника",
              "description": "Установка смесителей, унитазов, замена труб"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Сборка мебели",
              "description": "Сборка шкафов, кухонь, столов, навеска полок"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Услуги грузчиков",
              "description": "Погрузка и разгрузка, помощь при переезде, подъём на этаж, вынос мусора в Усть-Куте",
              "url": "https://servismasteroff.ru/gruzchiki"
            }
          }
        ]
      }
    });

const METRIKA = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(106815107, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "keywords", content: "разнорабочие усть-кут, грузчики усть-кут, услуги грузчиков усть-кут, переезд усть-кут, погрузка разгрузка усть-кут, мастер на час усть-кут, ремонт квартир усть-кут, сборка мебели усть-кут, электрик усть-кут, сантехник усть-кут, мелкий ремонт усть-кут, клининг усть-кут, уборка квартиры усть-кут, химчистка мебели усть-кут, профессиональная уборка усть-кут"},
            {name: "author", content: "МАСТЕРОФФ"},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:type", content: "website"},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "1200"},
            {property: "og:image:height", content: "630"},
            {property: "og:image:alt", content: "МАСТЕРОФФ - Профессиональные разнорабочие"},
            {name: "twitter:image", content: OG_IMAGE},
            {name: "geo.region", content: "RU-IRK"},
            {name: "geo.placename", content: "Усть-Кут"},
            {name: "yandex-verification", content: "1bf6d3fb45977cf7"},
            {name: "google-site-verification", content: "jYlLEDalYP9tQogAqRBlMog3sG5cI1kr8ZH4UCCp2Yk"},
            {name: "robots", content: "index, follow"},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "icon", type: "image/jpeg", href: OG_IMAGE},
            {rel: "sitemap", type: "application/xml", href: "/sitemap.xml"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {type: "application/ld+json", children: LOCAL_BUSINESS_LD},
            {children: METRIKA},
            {src: "//code.jivo.ru/widget/5XWJgSSjfE", async: true},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <Outlet/>
                    <CookieBanner/>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/106815107" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        {children}
        <Scripts/>
        </body>
        </html>
    );
}
