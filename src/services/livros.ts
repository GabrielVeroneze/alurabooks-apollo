import api from '@/services/api'
import { Livro } from '@/interfaces/Livro'
import { CategoriaDados } from '@/interfaces/CategoriaDados'

export async function buscarLivrosLancamentos(): Promise<Livro[]> {
    try {
        const resposta = await api.get<Livro[]>('/public/lancamentos')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os lançamentos de livros.')
    }
}

export async function buscarLivrosMaisVendidos(): Promise<Livro[]> {
    try {
        const resposta = await api.get<Livro[]>('/public/mais-vendidos')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar a lista de livros mais vendidos.')
    }
}

export async function buscarLivrosPorCategoria(categoria: CategoriaDados): Promise<Livro[]> {
    try {
        const resposta = await api.get<Livro[]>('/livros', {
            params: {
                categoria: categoria.id,
            },
        })

        return resposta.data
    } catch {
        throw new Error('Erro ao buscar os livros pela categoria.')
    }
}

export async function buscarLivroEspecifico(slug: string): Promise<Livro | null> {
    try {
        const resposta = await api.get<Livro[]>('/livros', {
            params: { slug: slug },
        })

        if (resposta.data.length === 0) {
            return null
        }

        return resposta.data[0]
    } catch {
        throw new Error('Erro ao carregar o livro.')
    }
}
