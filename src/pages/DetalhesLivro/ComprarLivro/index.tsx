import { useState } from 'react'
import { AbBotao, AbInputQuantidade } from 'ds-alurabooks'
import styles from './ComprarLivro.module.scss'

const ComprarLivro = () => {
    const [quantidade, setQuantidade] = useState<number>(0)

    return (
        <div className={styles.comprar}>
            <AbInputQuantidade value={quantidade} onChange={setQuantidade} />
            <AbBotao texto="Comprar" />
        </div>
    )
}

export default ComprarLivro
