import { Usuario } from '@/interfaces/Usuario'

export interface Autenticacao {
    access_token: string
    user: Usuario
}
