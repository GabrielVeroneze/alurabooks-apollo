import { useQuery, useReactiveVar } from '@apollo/client'
import { OBTER_LIVROS } from '@/graphql/livros/queries'
import { filtroLivrosVar, livrosVar } from '@/graphql/livros/state'
import { Livro } from '@/interfaces/Livro'

export const useLivros = () => {
    const filtro = useReactiveVar(filtroLivrosVar)

    const { data, refetch } = useQuery<{ livros: Livro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: filtro.categoria?.id,
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
