import axios from 'axios'
import { obterToken } from '@/utils/token'

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
    },
})

api.interceptors.request.use(
    function (config) {
        const token = obterToken()

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    function (error) {
        console.log('Erro no interceptor do axios')

        return Promise.reject(error)
    }
)

export default api
