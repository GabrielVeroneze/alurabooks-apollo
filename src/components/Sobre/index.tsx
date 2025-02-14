import styles from './Sobre.module.scss'

interface SobreProps {
    titulo: string
    texto: string
}

const Sobre = ({ titulo, texto }: SobreProps) => {
    return (
        <div className={styles.sobre}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{texto}</p>
        </div>
    )
}

export default Sobre
