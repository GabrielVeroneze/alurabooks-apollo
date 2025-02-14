import { Link } from 'react-router-dom'
import { AbBotao } from 'ds-alurabooks'
import { formatador } from '@/utils/formatador-moeda'
import { obterValorMinimo } from '@/utils/valor-minimo-livro'
import { Livro } from '@/interfaces/Livro'
import styles from './CardLivro.module.scss'

interface CardLivroProps {
    livro: Livro
}

const CardLivro = ({ livro }: CardLivroProps) => {
    return (
        <div className={styles.card}>
            <img
                className={styles.imagem}
                src={livro.imagemCapa}
                alt={livro.descricao}
            />
            <div className={styles.detalhes}>
                <h3 className={styles.titulo}>{livro.titulo}</h3>
                <p className={styles.preco}>
                    A partir de:{' '}
                    <strong>
                        {formatador.format(obterValorMinimo(livro))}
                    </strong>
                </p>
            </div>
            <Link to={`/livro/${livro.slug}`} className={styles.link}>
                <AbBotao isBlock texto="Comprar" />
            </Link>
        </div>
    )
}

export default CardLivro
