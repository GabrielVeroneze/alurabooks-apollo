import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { buscarCategoriaEspecifica } from '@/services/categorias'
import TituloPrincipal from '@/components/TituloPrincipal'
import Loader from '@/components/Loader'
import ListaLivros from '@/components/ListaLivros'

const Categoria = () => {
    const params = useParams()

    const { data: categoria, isLoading } = useQuery({
        queryKey: ['categoria', params.slug],
        queryFn: () => buscarCategoriaEspecifica(params.slug || ''),
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
            <ListaLivros categoria={categoria!} />
        </section>
    )
}

export default Categoria
