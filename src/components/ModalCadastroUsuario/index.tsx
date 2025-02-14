import { useState } from 'react'
import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import { registrarUsuario } from '@/services/autenticacao'
import imagemPrincipal from './assets/login.png'
import styles from './ModalCadastroUsuario.module.scss'

interface ModalCadastroUsuarioProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalCadastroUsuario = ({
    aberta,
    aoFechar,
}: ModalCadastroUsuarioProps) => {
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [endereco, setEndereco] = useState<string>('')
    const [complemento, setComplemento] = useState<string>('')
    const [cep, setCep] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [senhaConfirmada, setSenhaConfirmada] = useState<string>('')

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        registrarUsuario({
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
        })
            .then(() => {
                alert('Usuário foi cadastrado com sucesso!')
                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setSenhaConfirmada('')
                aoFechar()
            })
            .catch(erro => {
                alert(erro.message)
            })
    }

    return (
        <AbModal titulo="Cadastrar" aberta={aberta} aoFechar={aoFechar}>
            <section className={styles.conteudo}>
                <img
                    src={imagemPrincipal}
                    alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
                />
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <AbCampoTexto
                        label="Nome"
                        value={nome}
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        label="Endereço"
                        value={endereco}
                        onChange={setEndereco}
                    />
                    <AbCampoTexto
                        label="Complemento"
                        value={complemento}
                        onChange={setComplemento}
                    />
                    <AbCampoTexto label="CEP" value={cep} onChange={setCep} />
                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                    />
                    <AbCampoTexto
                        label="Confirmação da senha"
                        value={senhaConfirmada}
                        onChange={setSenhaConfirmada}
                        type="password"
                    />
                    <div className={styles.botao}>
                        <AbBotao texto="Cadastrar" />
                    </div>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalCadastroUsuario
