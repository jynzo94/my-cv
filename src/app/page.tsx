import Link from 'next/link'

export default function CVLandingPage() {
  return (
    <main className="min-h-screen mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">CV</h1>
      <p className="mt-2 opacity-80">
        Избери език или свали като PDF.
      </p>

      {/* Линкове към страниците */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/cv/en"
          className="underline"
        >
          CV (EN)
        </Link>
        <Link
          href="/cv/bg"
          className="underline"
        >
          CV (BG)
        </Link>
      </div>

      {/* Бутони за директно сваляне */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/cv/en?download=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          ⬇️ Download CV (EN) PDF
        </a>
        <a
          href="/cv/bg?download=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          ⬇️ Download CV (BG) PDF
        </a>
      </div>

      <p className="mt-8 text-xs opacity-70">
        PDF се генерира чрез браузърния печат и print стиловете на страницата.
      </p>
    </main>
  )
}
