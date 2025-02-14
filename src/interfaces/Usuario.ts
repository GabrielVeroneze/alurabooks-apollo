import { Credenciais } from '@/interfaces/Credenciais'

export interface Usuario extends Credenciais {
    nome: string
    endereco: string
    complemento: string
    cep: string
}
