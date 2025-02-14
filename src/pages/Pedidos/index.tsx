import { useEffect, useState } from 'react'
import { AbBotao } from 'ds-alurabooks'
import { buscarPedidos, removerPedido } from '@/services/pedidos'
import { Pedido } from '@/interfaces/Pedido'
import styles from './Pedidos.module.scss'

const Pedidos = () => {
    const formatador = Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    const [pedidos, setPedidos] = useState<Pedido[]>([])

    useEffect(() => {
        buscarPedidos()
            .then(dados => setPedidos(dados))
            .catch(erro => console.log(erro))
    }, [])

    const excluir = (pedidoExcluido: Pedido) => {
        removerPedido(pedidoExcluido.id)
            .then(() => {
                setPedidos(
                    pedidos.filter(pedido => pedido.id !== pedidoExcluido.id)
                )
            })
            .catch(erro => console.log(erro))
    }

    return (
        <section className={styles.pedidos}>
            <h1 className={styles.titulo}>Meus pedidos</h1>
            {pedidos.map((pedido) => (
                <div className={styles.pedido} key={pedido.id}>
                    <ul className={styles.dados}>
                        <li>
                            Pedido: <strong>{pedido.id}</strong>
                        </li>
                        <li>
                            Data do pedido:{' '}
                            <strong>
                                {new Date(pedido.data).toLocaleDateString()}
                            </strong>
                        </li>
                        <li>
                            Valor total:{' '}
                            <strong>{formatador.format(pedido.total)}</strong>
                        </li>
                        <li>
                            Entrega realizada em:{' '}
                            <strong>
                                {new Date(pedido.entrega).toLocaleDateString()}
                            </strong>
                        </li>
                    </ul>
                    <div className={styles.botoes}>
                        <AbBotao
                            tipo="secundario"
                            texto="Excluir"
                            onClick={() => excluir(pedido)}
                        />
                        <AbBotao tipo="primario" texto="Detalhes" />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Pedidos
