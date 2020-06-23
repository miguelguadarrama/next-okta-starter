import { getOktaToken } from './okta'

const fetchGET = (url) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getOktaToken()}`
        }
    })

const fetchPOST = (url, body) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getOktaToken()}`
        },
        body: JSON.stringify(body)
    })

const fetchBlob = (url, body) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-token': getOktaToken()
        },
        body: JSON.stringify(body)
    })

const fetchBlobGET = (url) =>
    fetch(url, {
        headers: {
            authorization: `Bearer ${getOktaToken()}`
        }
    })

module.exports = {
    fetchGET,
    fetchBlob,
    fetchPOST,
    fetchBlobGET
}