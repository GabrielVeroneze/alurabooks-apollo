import { makeVar } from '@apollo/client'
import { Livro } from '@/interfaces/Livro'

export const livrosVar = makeVar<Livro[]>([])
