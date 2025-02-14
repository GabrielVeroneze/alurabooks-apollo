import { useQuery } from '@tanstack/react-query'
import { buscarLivrosPorCategoria } from '@/services/livros'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import CardLivro from '@/components/CardLivro'
import styles from './ListaLivros.module.scss'

interface ListaLivrosProps {
    categoria: CategoriaDados
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const { data: livros } = useQuery({
        queryKey: ['livrosPorCategoria', categoria],
        queryFn: () => buscarLivrosPorCategoria(categoria),
    })

    return (
        <section className={styles.livros}>
            {livros?.map(livro => (
                <CardLivro key={livro.id} livro={livro} />
            ))}
        </section>
    )
}

export default ListaLivros
