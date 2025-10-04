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
    <main className="min-h-screen bg-white text-[#0C2340] print:bg-white print:text-black">
      <AutoPrintOnQuery />

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-8 print:py-0 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          {/* Name with subtle Appolica gradient */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight print:text-2xl">
            <span className="text-blue-600">{`{`}</span>
            <span className="text-blue-600">Alex</span>
            <span className="text-blue-600">{`}`}</span>
            <span className="font-bold text-black">ander Kolarov</span>
          </h1>

          {/* Tagline — product/user value tone */}
          <p className="mt-1 text-sm text-[#0C2340]/80 print:text-black">
            Full-Stack Engineer • Product-Oriented • Delivering Real Value
          </p>

          {/* Contacts */}
          <ul className="mt-3 text-sm text-[#0C2340]/80 space-y-0.5">
            <li>📍 Sofia, Bulgaria</li>
            <li>✉️ alexander.m.kolarov@gmail.com • ☎️ +359876508666</li>
            <li>
              <Link
                href="https://kolarclub.com/about#author"
                className="underline decoration-[#00AEEF] underline-offset-4 print:text-black"
              >
                kolarclub.com/about
              </Link>{" "}
              •{" "}
              <Link
                href="https://github.com/jynzo94"
                className="underline decoration-[#00AEEF] underline-offset-4 print:text-black"
              >
                github.com/jynzo94
              </Link>{" "}
              •{" "}
              <Link
                href="https://linkedin.com/in/alexander-m-kolarov"
                className="underline decoration-[#00AEEF] underline-offset-4 print:text-black"
              >
                linkedin.com/in/alexander-m-kolarov
              </Link>
            </li>
          </ul>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <Image
            src={"/my-photo.jpg"}
            unoptimized
            alt="Alexander Kolarov"
            width={120}
            height={120}
            className="rounded-full object-cover border-3 border-blue-600 aspect-square w-40 h-40"
          />
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 pb-16 print:pb-0 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left sidebar — compact */}
        <aside className="md:col-span-1 flex flex-col space-y-4">
          {/* Helper: section title style */}
          {/** Use consistent Appolica-like section headers */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Summary
            </h2>
            <p className="mt-1 text-sm leading-5">
              Full-stack engineer with 10+ years of experience, passionate about
              building software, learning new technologies, and solving problems
              across domains.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Technologies
            </h2>
            <ul className="mt-1 list-disc pl-5 text-sm space-y-0.5 marker:text-[#00AEEF]">
              <li>Frontend: Next.js, React, Tailwind, Astro.js</li>
              <li>Backend: Node.js, PayloadCMS, Supabase, SQL / NoSQL</li>
              <li>DevOps: Docker, Vercel, AWS, Cloudflare, Coolify, CI/CD</li>
              <li>Other: OpenAI, Weaviate, n8n, C#, Python, Unity3D, Pixi.js</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Core Skills
            </h2>
            <p className="mt-1 text-sm">
              Communicative · Cooperative · Proactive · Adaptable ·
              Problem-solver · Continuous learner · Team player · Fast Learner · Leadership
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Education
            </h2>
            <p className="mt-1 text-sm">
              Applied Mathematics, Sofia Univ. (2013–2015, not completed)
            </p>
            <p className="mt-0.5 text-sm">
              B.S. Computer Science — UNIBIT (2022–present)
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Languages
            </h2>
            <p className="mt-1 text-sm">Bulgarian (native), English (fluent)</p>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Interests
            </h2>
            <p className="mt-1 text-sm">
              Running · Hiking · Politics · Movies · Entrepreneurship · Reading
            </p>
          </div>
        </aside>

        {/* Right content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Experience
            </h2>

            <div className="mt-2 space-y-4">
              {/* Amusnet */}
              <article>
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">
                    EGT Interactive (Amusnet) — Junior to Senior Developer
                  </h3>
                  <span className="text-xs text-[#0C2340]/70">
                    2015 — 2020 • Sofia
                  </span>
                </header>
                <p className="mt-1 text-sm">
                  Led development of roulette games, mentored junior developers,
                  and owned the roulette project line.
                </p>
                <ul className="mt-1 list-disc pl-5 text-sm space-y-0.5 marker:text-[#00AEEF]">
                  <li>Technologies: Flash, PixiJS, React, Node.js</li>
                  <li>Delivered production-ready high-traffic games</li>
                  <li>
                    Took key architectural decisions for scalable solutions
                  </li>
                  <li>Part of the company’s growth from ~20 to ~150 employees, supporting both technical direction and team development</li>
                </ul>
              </article>

              {/* Freelance */}
              <article>
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">Freelance & Family Business</h3>
                  <span className="text-xs text-[#0C2340]/70">
                    2020 — 2023 • Remote
                  </span>
                </header>
                <p className="mt-1 text-sm">
                  Delivered freelance projects and supported familly business
                  while building personal projects.
                </p>
              </article>

              {/* Betnamin */}
              <article>
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">
                    Betnamin — Full-Stack Developer
                  </h3>
                  <span className="text-xs text-[#0C2340]/70">
                    2023 — 2024 • Remote
                  </span>
                </header>
                <p className="mt-1 text-sm">
                  Worked across frontend and backend in a sportsbook project (no
                  longer active).
                </p>
                <ul className="mt-1 list-disc pl-5 text-sm space-y-0.5 marker:text-[#00AEEF]">
                  <li>Next.js, custom CMS, Tailwind, MUI</li>
                  <li>Delivered key features with a lean team</li>
                </ul>
              </article>

              {/* Tiebreak */}
              <article>
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">
                    Tiebreak Solutions — Full-Stack Developer
                  </h3>
                  <span className="text-xs text-[#0C2340]/70">
                    2024 — 2025 • Sofia
                  </span>
                </header>
                <p className="mt-1 text-sm">
                  Contributed to a large fintech project and took key role in building and deploying a
                  multi-tenant platform for landing pages and marketing websites
                  with AI integrations.
                </p>
                <ul className="mt-1 list-disc pl-5 text-sm space-y-0.5 marker:text-[#00AEEF]">
                  <li>
                    Technologies: Next.js (Pages/App Router), PayloadCMS,
                    MongoDB, Supabase, Astro.js
                  </li>
                  <li>Infra: Docker, GitHub Actions, Vercel, AWS</li>
                  <li>
                    Integrations: Customer.io, Voluum, OpenAI, n8n, GA / GTM,
                    Meta Ads
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-[#00AEEF] border-l-2 border-[#0C2340] pl-3">
              Personal Projects
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-0.5 marker:text-[#00AEEF]">
              <li>
                <strong>anketi.bg</strong> (2021) — Public opinion survey
                platform with ~3000 users (React, ASP.NET, MS SQL, MUI)
              </li>
              <li>
                <strong>createnote.xyz</strong> (2021) — Notes app (Next.js,
                Prisma/Supabase, Clerk, Vercel)
              </li>
              <li>
                <strong>kolarclub.com</strong> (2024) — Personal blog (Next.js,
                PayloadCMS, Coolify, Cloudflare)
              </li>
              <li>
                <strong>cveten-podaruk.com</strong> (2025) — E-commerce platform
                for our flower business with unique services (Next.js, PayloadCMS, MongoDB, Stripe,
                Coolify, Cloudflare)
              </li>
              <li>
                <strong>nextvote (coming soon)</strong> — Public opinion surveys
                with AI analytics (Next.js, Postgres, Weaviate, OpenAI)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
