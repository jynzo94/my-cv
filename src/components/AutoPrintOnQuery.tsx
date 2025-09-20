// app/(components)/AutoPrintOnQuery.tsx
'use client'

import { useEffect } from 'react'

export default function AutoPrintOnQuery() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('download') === '1') {
      // малко забавяне, за да е сигурно, че всичко е нарисувано
      const t = setTimeout(() => window.print(), 300)
      return () => clearTimeout(t)
    }
  }, [])
  return null
}
