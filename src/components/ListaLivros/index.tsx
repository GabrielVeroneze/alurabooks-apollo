import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { AbBotao, AbCampoTexto } from 'ds-alurabooks'
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
    const [textoBusca, setTextoBusca] = useState<string>('')

    const { data } = useQuery<{ livros: Livro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id,
        },
    })

    return (
        <section className={styles.container}>
            <form className={styles.form}>
                <AbCampoTexto
                    placeholder="Digite o título do livro"
                    value={textoBusca}
                    onChange={setTextoBusca}
                />
                <AbBotao texto="Buscar" />
            </form>
            <div className={styles.livros}>
                {data?.livros.map(livro => (
                    <CardLivro key={livro.id} livro={livro} />
                ))}
            </div>
        </section>
    )
}

export default ListaLivros
