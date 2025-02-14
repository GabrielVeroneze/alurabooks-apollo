import fundo from './assets/fundo.png'
import styles from './Banner.module.scss'

interface BannerProps {
    titulo?: string
    subtitulo?: string
    children?: React.ReactNode
}

const Banner = ({ titulo, subtitulo, children }: BannerProps) => {
    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${fundo})` }}
        >
            <h2 className={styles.titulo}>{titulo}</h2>
            <h3 className={styles.subtitulo}>{subtitulo}</h3>
            {children}
        </section>
    )
}

export default Banner
