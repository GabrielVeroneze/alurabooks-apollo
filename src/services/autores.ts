import api from '@/services/api'
import { Autor } from '@/interfaces/Autor'

export async function buscarAutor(id: number): Promise<Autor> {
    try {
        const resposta = await api.get<Autor>(`/autores/${id}`)

        return resposta.data
    } catch {
        throw new Error('Erro ao obter o autor.')
    }
}
