import Image from 'next/image'
import Link from 'next/link'
import { Receita } from '@/hooks/useReceitas'

// Props esperadas pelo componente ReceitaCard
interface Props {
  receita: Receita
}

// Componente reutilizável para exibir um card de receita
export default function ReceitaCard({ receita }: Props) {
  return (
    <Link href={`/receitas/${receita.id}`}>
      <div className="rounded-xl shadow-md hover:shadow-lg transition p-4">
        <Image
          src={receita.imagem}
          alt={receita.nome}
          width={400}
          height={250}
          className="rounded-md object-cover"
        />
        <h2 className="text-xl font-bold mt-2">{receita.nome}</h2>
        <p className="text-sm text-gray-900">{receita.categoria}</p>
        <p className="text-sm mt-1">⏱ {receita.tempo}</p>
      </div>
    </Link>
  )
}
