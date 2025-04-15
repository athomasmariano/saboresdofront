'use client'
import { useEffect, useState } from 'react'

export interface Receita {
  id: number
  categoria: string
  nome: string
  ingredientes: string[]
  modoPreparo: string
  tempo: string
  imagem: string
}

export const useReceitas = () => {
  const [receitas, setReceitas] = useState<Receita[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const fetchReceitas = async () => {
      const res = await fetch('/data/receitas.json')
      const data = await res.json()
      setReceitas(data)
      setCarregando(false)
    }

    fetchReceitas()
  }, [])

  return { receitas, carregando }
}