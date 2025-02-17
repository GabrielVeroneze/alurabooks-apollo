import { Autor } from '@/interfaces/Autor'
import { OpcaoCompra } from '@/interfaces/OpcaoCompra'

export interface Livro {
    id: number
    autorId: number
    categoria: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autor: Autor
    opcoesCompra: OpcaoCompra[]
    sobre: string
}
