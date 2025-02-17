import { useQuery } from '@apollo/client'
import { OBTER_LIVROS } from '@/graphql/livros/queries'
import { livrosVar } from '@/graphql/livros/state'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import { Livro } from '@/interfaces/Livro'

export const useLivros = (categoria: CategoriaDados) => {
    const { data, refetch } = useQuery<{ livros: Livro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id,
        },
        onCompleted(data) {
            if (data.livros) {
                livrosVar(data.livros)
            }
        },
    })

    return {
        data,
        refetch,
    }
}
