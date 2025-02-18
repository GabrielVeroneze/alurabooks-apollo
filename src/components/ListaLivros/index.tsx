import { useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { AbBotao, AbCampoTexto } from 'ds-alurabooks'
import { filtroLivrosVar, livrosVar } from '@/graphql/livros/state'
import { useLivros } from '@/graphql/livros/hooks'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import CardLivro from '@/components/CardLivro'
import styles from './ListaLivros.module.scss'

interface ListaLivrosProps {
    categoria: CategoriaDados
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const [textoBusca, setTextoBusca] = useState<string>('')

    filtroLivrosVar({ categoria: categoria, titulo: textoBusca })

    const livros = useReactiveVar(livrosVar)

    useLivros()

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
                {livros.map(livro => (
                    <CardLivro key={livro.id} livro={livro} />
                ))}
            </div>
        </section>
    )
}

export default ListaLivros
