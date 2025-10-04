import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AutoPrintOnQuery from "@/components/AutoPrintOnQuery";

export const metadata: Metadata = {
  title: "Alexander Kolarov — CV",
  description: "Curriculum Vitae",
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      <AutoPrintOnQuery />

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-8 print:py-0 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight print:text-2xl 
                         bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500
                         bg-clip-text text-transparent print:text-black">
            Alexander Kolarov
          </h1>
          <p className="mt-1 text-sm opacity-80 text-indigo-600 print:text-black">
            Full-Stack Engineer • Building Products & Solving Problems
          </p>
          <ul className="mt-3 text-sm opacity-80 space-y-0.5">
            <li>📍 Sofia, Bulgaria</li>
            <li>✉️ alexander.m.kolarov@gmail.com • ☎️ +359876508666</li>
            <li>
              <Link href="https://kolarclub.com/about#author" className="underline print:text-black">kolarclub.com/about</Link> •{" "}
              <Link href="https://github.com/jynzo94" className="underline print:text-black">github.com/jynzo94</Link> •{" "}
              <Link href="https://linkedin.com/in/alexander-m-kolarov" className="underline print:text-black">linkedin.com/in/alexander-m-kolarov</Link>
            </li>
          </ul>
        </div>
        <div className="shrink-0">
          <Image
            src={"/my-photo.jpg"}
            unoptimized
            alt="Alexander Kolarov"
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover border-2 border-indigo-300"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="mx-auto max-w-4xl border-t border-indigo-300/50 print:border-black/20" />

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16 print:pb-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <aside className="md:col-span-1 space-y-6">
          {/* Summary */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Summary
            </h2>
            <p className="mt-2 text-sm leading-6 break-inside-avoid">
              <span className="font-semibold">Full-stack engineer</span> with
              <span className="font-semibold"> 10+ years</span> of experience,
              passionate about building software, learning new technologies, and
              solving problems across domains. I aim to{" "}
              <span className="font-semibold">add real value</span> while
              contributing as part of a
              <span className="font-semibold"> collaborative team</span>.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Technologies
            </h2>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1 break-inside-avoid marker:text-indigo-500">
              <li>Frontend: Next.js 15, React, Tailwind, shadcn/ui, Redux / Zustand</li>
              <li>Backend: Node.js, TypeScript, Supabase, SQL / NoSQL</li>
              <li>DevOps / Infrastructure: Docker, Coolify / Dokploy, Vercel, AWS, Cloudflare, CI/CD</li>
              <li>AI / Data / Tools: OpenAI, embeddings, Weaviate, n8n, automations</li>
              <li>Other: PayloadCMS, GA / GTM, Meta Ads, Voluum, Unity3D, C# / ASP.NET</li>
            </ul>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Core Skills
            </h2>
            <p className="mt-2 text-sm break-inside-avoid">
              Communicative · Cooperative · Proactive · Adaptable · Problem-solver · Leadership & mentoring · Continuous learner
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Education
            </h2>
            <p className="mt-2 text-sm break-inside-avoid">
              Applied Mathematics, Sofia University (2013–2015, not completed)
            </p>
            <p className="mt-1 text-sm break-inside-avoid">
              B.S. Computer Science — UNIBIT, Sofia (2022–present)
            </p>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Languages
            </h2>
            <p className="mt-2 text-sm break-inside-avoid">
              Bulgarian (native), English (fluent)
            </p>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Interests
            </h2>
            <p className="mt-2 text-sm break-inside-avoid">
              Running · Hiking · Politics · Entrepreneurship · Movies · Reading
            </p>
          </div>
        </aside>

        {/* Right column */}
        <div className="md:col-span-2 space-y-8">
          {/* Experience */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Experience
            </h2>
            <div className="mt-2 space-y-5">
              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">EGT Interactive (Amusnet) — Junior to Senior Developer</h3>
                  <span className="text-xs opacity-70">2015 — 2020 • Sofia</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Led development of roulette games, mentored junior developers, and took full ownership of the roulette project line.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1 marker:text-indigo-500">
                  <li>Technologies: Flash, PixiJS, React, Node.js, OOP</li>
                  <li>Delivered production-ready high-traffic games</li>
                  <li>Mentored new hires; took architectural decisions to ensure scalable solutions</li>
                  <li>Supported growth from ~20 to ~150 people, adapting to evolving processes</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Freelance & Family Business</h3>
                  <span className="text-xs opacity-70">2020 — 2023 • Remote</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Developed multiple freelance projects and supported business systems while working on personal projects.
                </p>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Betnamin — Full-Stack Developer</h3>
                  <span className="text-xs opacity-70">2023 — 2024 • Remote</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Worked across frontend and backend in a sportsbook project (no longer active).
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1 marker:text-indigo-500">
                  <li>Next.js, custom CMS, Tailwind, Material UI, PostgreSQL</li>
                  <li>Delivered key features with a lean team, shaped UX flows & backend logic</li>
                </ul>
              </article>

              <article className="break-inside-avoid">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Tiebreak Solutions — Full-Stack Developer</h3>
                  <span className="text-xs opacity-70">2024 — 2025 • Sofia</span>
                </header>
                <p className="mt-1 text-sm opacity-90">
                  Contributed to a large fintech project and played a key role in building and deploying a multi-tenant platform for landing pages and marketing websites with AI integrations.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1 marker:text-indigo-500">
                  <li>Technologies: Next.js (Pages/App Router), PayloadCMS, MongoDB, Supabase, Astro.js</li>
                  <li>Infra: Docker, GitHub Actions, Vercel, Coolify, AWS</li>
                  <li>Integrations: Customer.io, Voluum, OpenAI, n8n, GA / GTM, Meta Ads</li>
                </ul>
              </article>
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-700 pl-3 border-l-2 border-indigo-300">
              Personal Projects
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1 break-inside-avoid marker:text-indigo-500">
              <li>
                <strong>anketi.bg</strong> (2021) — Public opinion survey platform with ~3000 users (React, ASP.NET, MS SQL, MUI)
              </li>
              <li>
                <strong>createnote.xyz</strong> (2021) — Notes web app (Next.js 13, Prisma / Supabase, Clerk, Vercel)
              </li>
              <li>
                <strong>kolarclub.com</strong> (2024) — Personal blog (Next.js 15, PayloadCMS, Coolify)
              </li>
              <li>
                <strong>cveten-podaruk.com</strong> (2025) — E-commerce platform for our flower business, enabling unique customer services (Next.js 15, shadcn/ui, PayloadCMS 3, MongoDB, Stripe, Coolify)
              </li>
              <li>
                <strong>nextvote (coming soon)</strong> — Public opinion surveys with advanced AI analytics (Next.js 15, Postgres, Weaviate, OpenAI, shadcn)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
