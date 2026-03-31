'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-lg font-medium text-black dark:text-white">
          🐾 OpenClaw
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Setup Night · Hamburg
        </p>
      </div>
    </header>
  )
}
