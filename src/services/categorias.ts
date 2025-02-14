import api from '@/services/api'
import { CategoriaDados } from '@/interfaces/CategoriaDados'

export async function buscarCategorias(): Promise<CategoriaDados[]> {
    try {
        const resposta = await api.get<CategoriaDados[]>('/categorias')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar as categorias.')
    }
}

export async function buscarCategoriaEspecifica(slug: string): Promise<CategoriaDados> {
    try {
        const resposta = await api.get<CategoriaDados[]>('/categorias', {
            params: { slug: slug },
        })

        return resposta.data[0]
    } catch {
        throw new Error('Erro ao carregar a categoria.')
    }
}
