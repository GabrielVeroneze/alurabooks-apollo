import { makeVar } from '@apollo/client'
import { Livro } from '@/interfaces/Livro'
import { CategoriaDados } from '@/interfaces/CategoriaDados'

interface FiltroLivros {
    categoria?: CategoriaDados
    titulo?: string
}

export const filtroLivrosVar = makeVar<FiltroLivros>({})

export const livrosVar = makeVar<Livro[]>([])
