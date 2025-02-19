import { Autor } from '@/interfaces/Autor'
import { OpcaoCompra } from '@/interfaces/OpcaoCompra'
import { Tag } from '@/interfaces/Tag'

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
    sobre: string
    opcoesCompra: OpcaoCompra[]
    tags: Tag[]
    autor: Autor
}
