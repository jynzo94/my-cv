import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AutoPrintOnQuery from '@/components/AutoPrintOnQuery'

export const metadata: Metadata = {
  title: 'Alexander Kolarov — CV',
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
            Alexander Kolarov
          </h1>
          <p className="mt-1 text-sm opacity-80">Full-Stack Engineer • Next.js • TypeScript • NodeJS • SQL/NoSQL</p>
          <ul className="mt-3 text-sm opacity-80 space-y-0.5">
            <li>📍 Sofia, Bulgaria</li>
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
            unoptimized
            alt="Alexander Kolarov"
            width={120}
            height={120}
           className="rounded-full aspect-square object-cover border"
          />
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto max-w-4xl px-6 pb-16 print:pb-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
      <aside className="md:col-span-1 space-y-6">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Summary</h2>
            <p className="mt-2 text-sm leading-6 break-inside-avoid">
              Full-stack developer with 10+ years of experience building and scaling
              web applications. Strong background in Next.js, Tailwind, PayloadCMS,
              SQL & NoSQL databases, marketing and automations. Experienced mentor and project lead.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Skills</h2>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1 break-inside-avoid">
              <li>Frontend: Next.js 15, React, Tailwind, shadcn/ui, redux/zustand</li>
              <li>Backend: Node.js, ASP.NET, Prisma, Sql/NoSql</li>
              <li>Infra: Docker, Coolify/Dokploy, Vercel, Cloudflare, Linux</li>
              <li>AI/Tools: OpenAI, Weaviate, GA, GTM, Meta Ads, Voluum</li>
              <li>Other: PixiJS, Flash, Astro.js, Unity3D, and many more</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Education</h2>
            <p className="mt-2 text-sm break-inside-avoid">Applied Mathematics, Sofia University (2013–2015, not completed)</p>
            <p className="mt-1 text-sm break-inside-avoid">B.S. Computer Science — UNIBIT, Sofia (2022–present)</p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Languages</h2>
            <p className="mt-2 text-sm break-inside-avoid">Bulgarian (native), English (fluent)</p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Interests</h2>
            <p className="mt-2 text-sm break-inside-avoid">Running, hiking, movies, politics</p>
          </div>
        </aside>

        {/* Right column */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Experience</h2>
            <div className="mt-2 space-y-5">
               <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">EGT Interactive (Amusnet) — Junior → Senior Developer</h3>
                  <span className="text-xs opacity-70">2015 — 2020 • Sofia</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Led and developed casino games in the roulette category. Mentored junior devs and took ownership of the entire roulette project line.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Technologies: Flash, PixiJS, React, Node.js.</li>
                  <li>Delivered multiple production-ready roulette games with high player traffic.</li>
                  <li>Mentored and guided new hires and juniors.</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Freelance & Family Business</h3>
                  <span className="text-xs opacity-70">2020 — 2023 • Remote</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Freelance projects and support for family business, while continuously coding and building personal projects.
                </p>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Betnamin — Full‑Stack Developer</h3>
                  <span className="text-xs opacity-70">2023 — 2024 • Remote</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Sportsbook project betnamin.com (no longer active). Worked across multiple parts of the stack.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Next.js, custom CMS, Tailwind, Material UI, PostgreSQL.</li>
                  <li>Delivered core sportsbook features with a small team.</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Tiebreak Solutions — Full‑Stack Developer</h3>
                  <span className="text-xs opacity-70">2024 — 2025 • Sofia</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Worked on large Next.js(pages router) + PayloadCMS project, marketing tool integrations, and landing page systems.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Rebuilt with new concept www.tradeapp.com from Nextjs(pages router) & PayloadCMS 2 → Next.js(app router) with PayloadCMS 3 as headless for blog.</li>
                  <li>Integrated GA, GTM, Meta Ads, Voluum.</li>
                  <li>Implemented multi-tenant LP system: Astro frontend, Headless CMS, Tailwind, Github actions, Coolify/Dokploy, AWS, n8n and AI automations.</li>
                </ul>
              </article>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-foreground/80">Personal Projects</h2>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1 break-inside-avoid">
              <li><strong>anketi.bg</strong> (2021) — React, ASP.NET, MSSQL survey platform.</li>
              <li><strong>kolarclub.com</strong> (2024) — Personal blog (Next.js 15, PayloadCMS 3).</li>
              <li><strong>cveten-podaruk.com</strong> (2025) — Flower shop (Next.js 15, PayloadCMS 3, Stripe).</li>
              <li><strong>nextvote.com(comming soon)</strong> (2025–2026) — Polls & analytics platform with OpenAI + Weaviate.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}