import { Livro } from '@/interfaces/Livro'

export const obterValorMinimo = (livro: Livro) => {
    return Math.min(...livro.opcoesCompra.map(opcao => opcao.preco))
}
