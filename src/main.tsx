import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import AppRoutes from '@/routes'
import ABApolloClient from '@/components/ABApolloClient'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ABApolloClient>
            <QueryClientProvider client={queryClient}>
                <AppRoutes />
            </QueryClientProvider>
        </ABApolloClient>
    </React.StrictMode>
)
