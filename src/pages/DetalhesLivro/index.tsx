import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { buscarLivroEspecifico } from '@/services/livros'
import { buscarAutor } from '@/services/autores'
import { formatarOpcoesCompra } from '@/utils/formatador-opcoes-compra'
import Loader from '@/components/Loader'
import TituloPrincipal from '@/components/TituloPrincipal'
import Sobre from '@/components/Sobre'
import LivroInfo from './LivroInfo'
import FormatoLivro from './FormatoLivro'
import ComprarLivro from './ComprarLivro'
import styles from './DetalhesLivro.module.scss'

const DetalhesLivro = () => {
    const params = useParams()

    const { data: livro, isLoading, error } = useQuery({
        queryKey: ['livro', params.slug],
        queryFn: () => buscarLivroEspecifico(params.slug || ''),
    })

    const { data: autor } = useQuery({
        queryKey: ['autor', livro?.autor],
        queryFn: () => buscarAutor(livro!.autor),
    })

    if (error) {
        console.log(error.message)
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }

    if (livro === null) {
        return <h1>Livro não encontrado!</h1>
    }

    if (isLoading || !livro || !autor) {
        return <Loader />
    }

    return (
        <main>
            <TituloPrincipal texto="Detalhes do livro" />
            <section className={styles.container}>
                <img
                    className={styles.imagem}
                    src={livro.imagemCapa}
                    alt={livro.descricao}
                />
                <div className={styles.detalhes}>
                    <LivroInfo
                        titulo={livro.titulo}
                        descricao={livro.descricao}
                        autor={autor.nome}
                    />
                    <FormatoLivro
                        opcoes={formatarOpcoesCompra(livro.opcoesCompra)}
                    />
                    <ComprarLivro />
                </div>
                <div className={styles.sobre}>
                    <Sobre titulo="Sobre o Autor" texto={autor.sobre} />
                    <Sobre titulo="Sobre o livro" texto={livro.sobre} />
                </div>
            </section>
        </main>
    )
}

export default DetalhesLivro
