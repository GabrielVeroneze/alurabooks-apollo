import { useState } from 'react'
import { AbCampoTexto } from 'ds-alurabooks'
import styles from './Newsletter.module.scss'

const NewsLetter = () => {
    const [email, setEmail] = useState<string>('')

    return (
        <section className={styles.novidades}>
            <div>
                <h6 className={styles.titulo}>
                    Fique por dentro das novidades!
                </h6>
                <p className={styles.texto}>
                    Atualizações de e-books, novos livros, promoções e outros.
                </p>
            </div>
            <form>
                <AbCampoTexto
                    darkmode={false}
                    value={email}
                    onChange={setEmail}
                    placeholder="Cadastre seu e-mail"
                />
            </form>
        </section>
    )
}

export default NewsLetter
