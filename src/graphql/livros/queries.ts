import { gql } from '@apollo/client'

export const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int, $titulo: String) {
        livros(categoriaId: $categoriaId, titulo: $titulo) {
            id
            titulo
            slug
            descricao
            imagemCapa
            opcoesCompra {
                preco
            }
        }
    }
`
