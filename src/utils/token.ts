export const armazenarToken = (token: string) => {
    sessionStorage.setItem('token', token)
}

export const obterToken = () => {
    return sessionStorage.getItem('token')
}

export const limparToken = () => {
    sessionStorage.removeItem('token')
}
