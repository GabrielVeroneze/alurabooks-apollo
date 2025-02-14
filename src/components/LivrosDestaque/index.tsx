import { useEffect, useState } from 'react'
import { AbBotao, AbCard } from 'ds-alurabooks'
import { obterValorMinimo } from '@/utils/valor-minimo-livro'
import { formatador } from '@/utils/formatador-moeda'
import { Livro } from '@/interfaces/Livro'
import styles from './LivrosDestaque.module.scss'

interface LivrosDestaqueProps {
    livros: Livro[]
}

const LivrosDestaque = ({ livros }: LivrosDestaqueProps) => {
    const [selecionado, selecionarLivro] = useState<Livro | null>(null)

    useEffect(() => {
        if (livros?.length) {
            selecionarLivro(livros[0])
        }
    }, [livros])

    const valorMinimo = selecionado ? obterValorMinimo(selecionado) : 0

    return (
        <section className={styles.destaque}>
            <ul className={styles.livros}>
                {livros.map(livro => (
                    <li
                        key={livro.id}
                        onClick={() => selecionarLivro(livro)}
                        className={`
                            ${styles.livro}
                            ${selecionado?.titulo === livro.titulo ? styles.selecionado : ''}
                        `}
                    >
                        <img
                            className={styles.imagem}
                            src={livro.imagemCapa}
                            alt={`Capa do livro ${livro.titulo} escrito por ${livro.autor}`}
                        />
                    </li>
                ))}
            </ul>
            <AbCard>
                <div className={styles.detalhes}>
                    <header>
                        <h5 className={styles.titulo}>Sobre o livro:</h5>
                    </header>
                    <h6 className={styles.nome}>{selecionado?.titulo}</h6>
                    <p className={styles.info}>{selecionado?.descricao}</p>
                    <p className={styles.info}>Por: {selecionado?.autor}</p>
                    <footer className={styles.rodape}>
                        <div className={styles.preco}>
                            <em>A partir de:</em>
                            <strong>
                                {formatador.format(valorMinimo)}
                            </strong>
                        </div>
                        <div className={styles.botao}>
                            <AbBotao texto="Comprar" />
                        </div>
                    </footer>
                </div>
            </AbCard>
        </section>
    )
}

export default LivrosDestaque
