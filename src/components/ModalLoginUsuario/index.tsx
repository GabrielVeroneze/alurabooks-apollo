import { useState } from 'react'
import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import { logarUsuario } from '@/services/autenticacao'
import { armazenarToken } from '@/utils/token'
import imagemPrincipal from './assets/login.png'
import styles from './ModalLoginUsuario.module.scss'

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({
    aberta,
    aoFechar,
    aoEfetuarLogin,
}: ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        logarUsuario({
            email,
            senha,
        })
            .then(resposta => {
                armazenarToken(resposta.access_token)
                setEmail('')
                setSenha('')
                aoEfetuarLogin()
            })
            .catch(erro => {
                if (erro.message) {
                    alert(erro.message)
                } else {
                    alert(
                        'Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!'
                    )
                }
            })
    }

    return (
        <AbModal titulo="Login" aberta={aberta} aoFechar={aoFechar}>
            <section className={styles.conteudo}>
                <img
                    src={imagemPrincipal}
                    alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
                />
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                    />
                    <div className={styles.botao}>
                        <AbBotao texto="Fazer login" />
                    </div>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalLoginUsuario
