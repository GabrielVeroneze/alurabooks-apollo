import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import AreaLogada from '@/pages/AreaLogada'
import Pedidos from '@/pages/Pedidos'
import Categoria from '@/pages/Categoria'
import DetalhesLivro from '@/pages/DetalhesLivro'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="minha-conta" element={<AreaLogada />}>
                        <Route path="pedidos" element={<Pedidos />} />
                    </Route>
                    <Route path="categorias/:slug" element={<Categoria />} />
                    <Route path="livro/:slug" element={<DetalhesLivro />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
