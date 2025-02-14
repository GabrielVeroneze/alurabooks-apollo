import styles from './Titulo.module.scss'

interface TituloProps {
    texto: string
}

const Titulo = ({ texto }: TituloProps) => {
    return (
        <h4 className={styles.titulo}>
            {texto}
        </h4>
    )
}

export default Titulo
