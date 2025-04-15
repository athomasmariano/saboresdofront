'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Define o tipo da estrutura de uma receita
type Receita = {
  id: string
  nome: string
  categoria: string
  imagem: string
}

export default function Home() {
  // Estado que guarda todas as receitas carregadas do JSON
  const [receitas, setReceitas] = useState<Receita[]>([])

  // Estado que armazena a categoria selecionada (para filtro)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null)

  // Carrega as receitas a partir do arquivo JSON dentro da pasta /public/data/
  useEffect(() => {
    fetch('/data/receitas.json')
      .then((res) => res.json())
      .then((data) => setReceitas(data))
  }, [])

  // Cria uma lista com as categorias únicas (sem repetição)
  const categorias = [...new Set(receitas.map((r) => r.categoria))]

  // Filtra receitas de acordo com a categoria selecionada
  const receitasFiltradas = categoriaSelecionada
    ? receitas.filter((r) => r.categoria === categoriaSelecionada)
    : receitas

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">👩‍🍳 Receitas</h1>

      {/* Botões para filtrar receitas por categoria */}
      <div className="mb-6 flex gap-2 flex-wrap text-red-500">
        <button
          onClick={() => setCategoriaSelecionada(null)}
          className={`px-4 py-1 rounded-full border ${categoriaSelecionada === null ? 'bg-red-500 text-white' : ''}`}
        >
          Todas
        </button>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-1 rounded-full border ${categoriaSelecionada === cat ? 'bg-red-500 text-white' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de receitas renderizada dinamicamente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {receitasFiltradas.map((receita) => (
          <Link
            key={receita.id}
            href={`/receitas/${receita.id}`}
            className="border rounded p-4 hover:shadow-md"
          >
            <Image
              src={receita.imagem}
              alt={receita.nome}
              width={400}
              height={200}
              className="object-cover w-full h-48 rounded mb-2"
            />
            <h2 className="text-lg font-semibold text-black">{receita.nome}</h2>
            <p className="text-sm text-gray-600">{receita.categoria}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
