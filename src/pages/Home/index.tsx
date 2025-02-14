import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AbCampoTexto } from 'ds-alurabooks'
import { buscarLivrosLancamentos, buscarLivrosMaisVendidos } from '@/services/livros'
import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import LivrosDestaque from '@/components/LivrosDestaque'
import TagsCategorias from '@/components/TagsCategorias'
import NewsLetter from '@/components/Newsletter'
import styles from './Home.module.scss'

const Home = () => {
    const [busca, setBusca] = useState<string>('')

    const { data: lancamentos } = useQuery({
        queryKey: ['lancamentos'],
        queryFn: buscarLivrosLancamentos,
    })

    const { data: maisVendidos } = useQuery({
        queryKey: ['maisVendidos'],
        queryFn: buscarLivrosMaisVendidos,
    })

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
            <LivrosDestaque livros={lancamentos ?? []} />
            <Titulo texto="MAIS VENDIDOS" />
            <LivrosDestaque livros={maisVendidos ?? []} />
            <TagsCategorias />
            <NewsLetter />
        </section>
    )
}

export default Home
