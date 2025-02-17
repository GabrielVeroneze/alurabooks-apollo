import { useState } from 'react'
import { AbCampoTexto } from 'ds-alurabooks'
import { useDestaques } from '@/graphql/destaques/hooks'
import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import LivrosDestaque from '@/components/LivrosDestaque'
import TagsCategorias from '@/components/TagsCategorias'
import NewsLetter from '@/components/Newsletter'
import styles from './Home.module.scss'

const Home = () => {
    const [busca, setBusca] = useState<string>('')
    const { data } = useDestaques()

    return (
        <section className={styles.home}>
            <Banner
                subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!"
                titulo="Já sabe por onde começar?"
            >
                <form className={styles.buscar}>
                    <AbCampoTexto
                        placeholder="Qual será sua próxima leitura?"
                        value={busca}
                        onChange={setBusca}
                        darkmode={true}
                        placeholderAlign="center"
                    />
                </form>
            </Banner>
            <Titulo texto="ÚLTIMOS LANÇAMENTOS" />
            <LivrosDestaque livros={data?.destaques.lancamentos ?? []} />
            <Titulo texto="MAIS VENDIDOS" />
            <LivrosDestaque livros={data?.destaques.maisVendidos ?? []} />
            <TagsCategorias />
            <NewsLetter />
        </section>
    )
}

export default Home
