import styles from './ContaNavegacao.module.scss'

interface ContaNavegacaoProps {
    texto: string
    imagem: string
    imagemAlt: string
    onClick: () => void
}

const ContaNavegacao = ({ texto, imagem, imagemAlt, onClick }: ContaNavegacaoProps) => {
    return (
        <button className={styles.botao} onClick={() => onClick()}>
            <img src={imagem} alt={imagemAlt} />
            {texto}
        </button>
    )
}

export default ContaNavegacao
