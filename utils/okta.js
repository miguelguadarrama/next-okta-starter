
const getOktaToken = () => {
    if (!window || !window.localStorage || !localStorage) {
        return ''
    }

    let data = localStorage.getItem('okta-token-storage')
    if (!data) {
        return ''
    }

    data = JSON.parse(data)
    return data?.accessToken?.accessToken || ''
}

module.exports = {
    getOktaToken
}