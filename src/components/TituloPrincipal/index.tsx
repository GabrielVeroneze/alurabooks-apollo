import styles from './TituloPrincipal.module.scss'

interface TituloPrincipalProps {
    texto: string
}

const TituloPrincipal = ({ texto }: TituloPrincipalProps) => {
    return (
        <h1 className={styles.titulo}>{texto}</h1>
    )
}

export default TituloPrincipal
