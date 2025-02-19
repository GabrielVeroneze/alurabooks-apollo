import { gql } from '@apollo/client'

export const OBTER_LIVRO = gql`
    query ObterLivro($slug: String!) {
        livro(slug: $slug) {
            titulo
            descricao
            imagemCapa
            sobre
            opcoesCompra {
                id
                titulo
                preco
                formatos
            }
            tags {
                id
                nome
            }
            autor {
                nome
                sobre
            }
        }
    }
`
