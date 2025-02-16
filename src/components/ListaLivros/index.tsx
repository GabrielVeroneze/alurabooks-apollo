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

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const [textoBusca, setTextoBusca] = useState<string>('')

    const { data, refetch } = useQuery<{ livros: Livro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id,
        },
    })

    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (textoBusca) {
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca,
            })
        }
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={buscarLivros}>
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
