import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AutoPrintOnQuery from '@/components/AutoPrintOnQuery'

export const metadata: Metadata = {
  title: 'Александър Коларов — Автобиография',
  description: 'Curriculum Vitae',
}

export default async function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
    <AutoPrintOnQuery />
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-8 print:py-0 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight print:text-2xl">
            Александър Коларов
          </h1>
          <p className="mt-1 text-sm opacity-80">Full-Stack инженер • Next.js • TypeScript • NodeJS • SQL/NoSQL</p>
          <ul className="mt-3 text-sm opacity-80 space-y-0.5">
            <li>📍 София, България</li>
            <li>✉️ alexander.m.kolarov@gmail.com • ☎️ +359876508666</li>
            <li>
             <Link href="https://kolarclub.com/about#author" className="underline print:text-black">kolarclub.com/about</Link> •{' '}
              <Link href="https://github.com/jynzo94" className="underline print:text-black">github.com/jynzo94</Link> •{' '}
              <Link href="https://linkedin.com/in/alexander-m-kolarov" className="underline print:text-black">linkedin.com/in/alexander-m-kolarov</Link>
            </li>
          </ul>
        </div>
        <div className="shrink-0">
          <Image
            src={'/my-photo.jpg'}
            alt="Alexander Kolarov"
            width={120}
            height={120}
            unoptimized
            className="rounded-full aspect-square object-cover border"
          />
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto max-w-4xl px-6 pb-16 print:pb-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <aside className="md:col-span-1 space-y-6">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Резюме</h2>
            <p className="mt-2 text-sm leading-6 break-inside-avoid">
              Full-stack разработчик с 10+ години опит в изграждането и скалирането
              на уеб приложения. Солиден опит с Next.js, Tailwind, PayloadCMS,
              SQL и NoSQL бази, маркетинг интеграции и автоматизации. Опитен ментор и ръководител на проекти.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Умения</h2>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1 break-inside-avoid">
              <li>Фронтенд: Next.js 15, React, Tailwind, shadcn/ui, redux/zustand</li>
              <li>Бекенд: Node.js, ASP.NET, Prisma, SQL/NoSQL</li>
              <li>Инфра: Docker, Coolify/Dokploy, Vercel, Cloudflare, Linux</li>
              <li>AI/Инструменти: OpenAI, Weaviate, GA, GTM, Meta Ads, Voluum</li>
              <li>Друго: PixiJS, Flash, Astro.js, Unity3D и много други</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Образование</h2>
            <p className="mt-2 text-sm break-inside-avoid">Приложна математика, СУ (2013–2015, незавършено)</p>
            <p className="mt-1 text-sm break-inside-avoid">Бакалавър Компютърни науки — УНИБИТ, София (2022–настояще)</p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Езици</h2>
            <p className="mt-2 text-sm break-inside-avoid">Български (роден), Английски (свободно)</p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Интереси</h2>
            <p className="mt-2 text-sm break-inside-avoid">Бягане, планини, кино, политика</p>
          </div>
        </aside>

        {/* Right column */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Опит</h2>
            <div className="mt-2 space-y-5">
              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">EGT Interactive (Amusnet) — Джуниър → Сениър разработчик</h3>
                  <span className="text-xs opacity-70">2015 — 2020 • София</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Ръководих и разработвах казино игри в категория рулетка. Менторирах джуниъри и поех цялата продуктова линия за рулетки.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Технологии: Flash, PixiJS, React, Node.js.</li>
                  <li>Доставих множество продукционни рулетки с висок трафик.</li>
                  <li>Менторирах и въвеждах нови колеги.</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Фрийланс и семеен бизнес</h3>
                  <span className="text-xs opacity-70">2020 — 2023 • Дистанционно</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Фрийланс проекти и подкрепа за семейния бизнес, като паралелно продължавах да кодирам и изграждам лични проекти.
                </p>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Betnamin — Full-Stack разработчик</h3>
                  <span className="text-xs opacity-70">2023 — 2024 • Дистанционно</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Спортбук проект betnamin.com (вече неактивен). Работех по множество части от стека.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Next.js, custom CMS, Tailwind, Material UI, PostgreSQL.</li>
                  <li>Доставих основни спортбук функционалности в малък екип.</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Tiebreak Solutions — Full-Stack разработчик</h3>
                  <span className="text-xs opacity-70">2024 — 2025 • София</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Работих по голям проект с Next.js (pages router) + PayloadCMS, интеграции с маркетинг инструменти и система за лендинг страници.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Ребилд на www.tradeapp.com от Next.js (pages router) & PayloadCMS 2 → Next.js (app router) с PayloadCMS 3 като headless за блога.</li>
                  <li>Интеграции: GA, GTM, Meta Ads, Voluum.</li>
                  <li>Имплементирах мултитенант LP система: Astro фронтенд, Headless CMS, Tailwind, GitHub Actions, Coolify/Dokploy, AWS, n8n и AI автоматизации.</li>
                </ul>
              </article>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Лични проекти</h2>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1 break-inside-avoid">
              <li><strong>anketi.bg</strong> (2021) — Платформа за анкети (React, ASP.NET, MSSQL).</li>
              <li><strong>kolarclub.com</strong> (2024) — Личен блог (Next.js 15, PayloadCMS 3).</li>
              <li><strong>cveten-podaruk.com</strong> (2025) — Цветарски магазин (Next.js 15, PayloadCMS 3, Stripe).</li>
              <li><strong>nextvote.com (скоро)</strong> (2025–2026) — Платформа за анкети и анализи с OpenAI + Weaviate.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
