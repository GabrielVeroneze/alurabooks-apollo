import { OpcaoCompra } from '@/interfaces/OpcaoCompra'

export interface Livro {
    id: number
    categoria: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autor: number
    opcoesCompra: OpcaoCompra[]
    sobre: string
}
