import { useParams } from 'react-router-dom'
import { useLivro } from '@/graphql/livro/hooks'
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
    const { data, loading, error } = useLivro(params.slug || '')

    if (error) {
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }

    if (loading || !data?.livro) {
        return <Loader />
    }

    return (
        <main>
            <TituloPrincipal texto="Detalhes do livro" />
            <section className={styles.container}>
                <img
                    className={styles.imagem}
                    src={data.livro.imagemCapa}
                    alt={data.livro.descricao}
                />
                <div className={styles.detalhes}>
                    <LivroInfo
                        titulo={data.livro.titulo}
                        descricao={data.livro.descricao}
                        autor={data.livro.autor.nome}
                    />
                    <FormatoLivro
                        opcoes={formatarOpcoesCompra(data.livro.opcoesCompra)}
                    />
                    <ComprarLivro />
                </div>
                <div className={styles.sobre}>
                    <Sobre
                        titulo="Sobre o Autor"
                        texto={data.livro.autor.sobre}
                    />
                    <Sobre
                        titulo="Sobre o livro"
                        texto={data.livro.sobre}
                    />
                </div>
            </section>
        </main>
    )
}

export default DetalhesLivro
