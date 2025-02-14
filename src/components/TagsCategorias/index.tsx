import { AbTag } from 'ds-alurabooks'
import styles from './TagsCategorias.module.scss'

const TagsCategorias = () => {
    const tags = [
        'Android',
        'Orientação a Objetos',
        'Marketing Digital',
        'Agile',
        'Startups',
        'HTML & CSS',
        'Java',
        'Python',
    ]

    return (
        <section className={styles.categorias}>
            <h4 className={styles.titulo}>CATEGORIAS MAIS BUSCADAS</h4>
            <div className={styles.tags}>
                {tags.map((tag) => (
                    <AbTag texto={tag} key={tag} />
                ))}
            </div>
        </section>
    )
}

export default TagsCategorias
