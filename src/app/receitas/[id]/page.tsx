'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Tipo da receita completa com ingredientes e modo de preparo
type Receita = {
  id: string
  nome: string
  categoria: string
  ingredientes: string[]
  preparo: string
  imagem: string
}

export default function ReceitaPage() {
  // Lê o parâmetro da URL (id da receita)
  const { id } = useParams() as { id: string }

  const [receita, setReceita] = useState<Receita | null>(null)
  const [carregando, setCarregando] = useState(true)

  // Carrega os dados da receita correspondente ao ID
  useEffect(() => {
    fetch('/data/receitas.json')
      .then((res) => res.json())
      .then((data: Receita[]) => {
        const found = data.find((r) => r.id === id)
        if (found) setReceita(found)
        setCarregando(false)
      })
  }, [id])

  // Enquanto estiver carregando os dados
  if (carregando) return <p className="p-4">Carregando...</p>

  // Caso a receita não seja encontrada
  if (!receita) return <p className="p-4">Receita não encontrada.</p>

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">  
      {/* Link para voltar à página inicial */}
      <Link
        href="/"
        className="inline-block text-green-500 hover:underline text-sm mb-4"
      >
        ← Voltar para a Home
      </Link>

      {/* Bloco de conteúdo da receita */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <Image
          src={receita.imagem}
          alt={receita.nome}
          width={800}
          height={400}
          className="object-cover w-full h-64"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-700">{receita.nome}</h1>
          <p className="text-sm text-gray-500">Categoria: {receita.categoria}</p>

          {/* Ingredientes da receita */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Ingredientes</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {receita.ingredientes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Modo de preparo */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">👨‍🍳 Modo de preparo</h2>
            <p className="leading-relaxed text-gray-700 whitespace-pre-line">{receita.preparo}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
