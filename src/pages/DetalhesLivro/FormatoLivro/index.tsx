import { useState } from 'react'
import { AbGrupoOpcao, AbGrupoOpcoes } from 'ds-alurabooks'
import styles from './FormatoLivro.module.scss'

interface FormatoLivroProps {
    opcoes: AbGrupoOpcao[]
}

const FormatoLivro = ({ opcoes }: FormatoLivroProps) => {
    const [opcao, setOpcao] = useState<AbGrupoOpcao | null>(null)

    return (
        <div className={styles.formato}>
            <h3 className={styles.titulo}>Selecione o formato de seu livro:</h3>
            <div className={styles.opcoes}>
                <AbGrupoOpcoes
                    opcoes={opcoes}
                    valorPadrao={opcao}
                    onChange={setOpcao}
                />
            </div>
            <p className={styles.texto}>
                *Você terá acesso às futuras atualizações do livro.
            </p>
        </div>
    )
}

export default FormatoLivro
