import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
          <nav className="max-w-7xl mx-1 px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center space-x-2 hover:opacity-90 transition duration-200">
              <span>🍽️</span>
              <span>Sabores do Front</span>
            </Link>
            <ul className="flex gap-6 text-lg">
              <li>
                <Link href="/" className="hover:text-orange-100 transition">Início</Link>
              </li>
              <li>
                <Link href="/receitas" className="hover:text-orange-100 transition">Receitas</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Conteúdo principal */}
        <main className="max-w-7xl mx-80 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
  {children}
</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4">
          <p>Arthur Thomas Mariano de Souza - RM: 561061</p>
          <p>Jhonatta Lima Sandes - RM: 560277</p>
        </footer>
      </body>
    </html>
  )
}
    