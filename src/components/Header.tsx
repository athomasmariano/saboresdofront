'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight flex items-center space-x-2 hover:opacity-90 transition duration-200"
        >
          <span>🍽️</span>
          <span>Sabores do Front</span>
        </Link>
      </nav>
    </header>
  )
}
