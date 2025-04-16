'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-green-500 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center space-x-3 hover:opacity-90 transition duration-200">
          <Image
            src="/imagens/logo.png" //
            alt="Logo Sabores do Front"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span>Sabores do Front</span>
        </Link>
      </nav>
    </header>
  )
}
