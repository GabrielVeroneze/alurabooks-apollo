import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:9000/graphql',
    cache: new InMemoryCache(),
})

interface ABApolloClientProps {
    children: React.ReactNode
}

const ABApolloClient = ({ children }: ABApolloClientProps) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ABApolloClient
