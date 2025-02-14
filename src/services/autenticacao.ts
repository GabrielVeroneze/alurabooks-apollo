import api from '@/services/api'
import { AxiosError } from 'axios'
import { Usuario } from '@/interfaces/Usuario'
import { Credenciais } from '@/interfaces/Credenciais'
import { Autenticacao } from '@/interfaces/Autenticacao'
import { Erro } from '@/interfaces/Erro'

export async function registrarUsuario(usuario: Usuario): Promise<number> {
    try {
        const resposta = await api.post<Usuario>('/public/registrar', usuario)

        return resposta.status
    } catch {
        throw new Error('Erro ao registrar o usuário.')
    }
}

export async function logarUsuario(credenciais: Credenciais): Promise<Autenticacao> {
    try {
        const resposta = await api.post<Autenticacao>('/public/login', credenciais)

        return resposta.data
    } catch (error) {
        const erro = error as AxiosError<Erro>

        throw new Error(erro.response?.data.message)
    }
}
