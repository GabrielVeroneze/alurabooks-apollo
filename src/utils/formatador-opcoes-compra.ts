import { formatador } from '@/utils/formatador-moeda'
import { OpcaoCompra } from '@/interfaces/OpcaoCompra'

export const formatarOpcoesCompra = (opcoes: OpcaoCompra[]) => {
    return opcoes.map(opcao => ({
        id: opcao.id,
        titulo: opcao.titulo,
        corpo: formatador.format(opcao.preco),
        rodape: opcao.formatos ? opcao.formatos.join(', ') : '',
    }))
}
