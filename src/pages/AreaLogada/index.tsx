import { Link, Outlet } from 'react-router-dom'
import styles from './AreaLogada.module.scss'

const AreaLogada = () => {
    return (
        <>
            <h1 className={styles.titulo}>Minha conta</h1>
            <section className={styles.painel}>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/minha-conta/pedidos">
                            Pedidos
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/minha-conta/trocas">
                            Trocas
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/minha-conta/cupons">
                            Cupons
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/minha-conta/dados">
                            Seus dados
                        </Link>
                    </li>
                </ul>
                <div className={styles.conteudo}>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default AreaLogada
