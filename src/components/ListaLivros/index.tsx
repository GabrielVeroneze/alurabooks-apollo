import { gql, useQuery } from '@apollo/client'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import { Livro } from '@/interfaces/Livro'
import CardLivro from '@/components/CardLivro'
import styles from './ListaLivros.module.scss'

interface ListaLivrosProps {
    categoria: CategoriaDados
}

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int) {
        livros(categoriaId: $categoriaId) {
            id
            titulo
            slug
            descricao
            imagemCapa
            opcoesCompra {
                preco
            }
        }
    }
`

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const { data } = useQuery<{ livros: Livro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id,
        },
    })

    return (
        <section className={styles.livros}>
            {data?.livros.map(livro => (
                <CardLivro key={livro.id} livro={livro} />
            ))}
        </section>
    )
}

export default ListaLivros
