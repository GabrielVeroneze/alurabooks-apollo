import { gql } from '@apollo/client'

export const OBTER_DESTAQUES = gql`
    query ObterDestaques {
        destaques {
            lancamentos {
                id
                titulo
                descricao
                imagemCapa
                opcoesCompra {
                    preco
                }
                autor {
                    nome
                }
            }
            maisVendidos {
                id
                titulo
                descricao
                imagemCapa
                opcoesCompra {
                    preco
                }
                autor {
                    nome
                }
            }
        }
    }
`
