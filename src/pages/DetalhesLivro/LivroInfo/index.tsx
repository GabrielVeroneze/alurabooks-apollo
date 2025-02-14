import styles from './LivroInfo.module.scss'

interface LivroInfoProps {
    titulo: string
    descricao: string
    autor: string
}

const LivroInfo = ({ titulo, descricao, autor }: LivroInfoProps) => {
    return (
        <div className={styles.info}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.descricao}>{descricao}</p>
            <p className={styles.autor}>Por: {autor}</p>
        </div>
    )
}

export default LivroInfo
