import { useQuery } from '@apollo/client'
import { OBTER_DESTAQUES } from '@/graphql/destaques/queries'
import { Destaques } from '@/interfaces/Destaques'

export const useDestaques = () => {
    const { data } = useQuery<{ destaques: Destaques }>(OBTER_DESTAQUES)

    return {
        data,
    }
}
