import { useQuery } from '@apollo/client'
import { OBTER_LIVRO } from '@/graphql/livro/queries'
import { Livro } from '@/interfaces/Livro'

export const useLivro = (slug: string) => {
    const { data, loading, error } = useQuery<{ livro: Livro }>(OBTER_LIVRO, {
        variables: {
            slug: slug,
        },
    })

    return {
        data,
        loading,
        error,
    }
}
