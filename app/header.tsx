'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        {/* ✏️ Replace with your name */}
        <Link href="/" className="text-lg font-medium text-black dark:text-white">
          Your Name
        </Link>
        {/* ✏️ Replace with your title */}
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Your Title
        </TextEffect>
      </div>
    </header>
  )
}
