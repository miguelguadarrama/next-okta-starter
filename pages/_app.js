import dynamic from 'next/dynamic'
import { Security } from '@okta/okta-react';
import AppContext from '../context/app'
import { useReducer } from 'react'
import appReducer from '../context/appReducer'
import { SWRConfig } from 'swr'
import { fetchGET } from '../utils/fetch'
import Layout from '../components/Layout'
import debug from '../utils/debug'
import '../styles/global.css'

const OktaComponent = dynamic(() => import('../components/okta'), {
    ssr: false
})

const fetcher = (...args) => fetchGET(...args)
    .then(res => {
        debug("fetching", ...args);
        return res.json()
    })

const okta_config = {
    issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
    redirectUri: process.env.OKTA_REDIRECT_URI,
    clientId: process.env.OKTA_CLIENT_ID,
    pkce: process.env.OKTA_PKCE_ENABLED
};

const App = ({ Component, pageProps }) => {

    const [state, dispatch] = useReducer(appReducer, {})

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Security {...okta_config}>
                <OktaComponent>
                    <SWRConfig
                        value={{
                            fetcher,
                            revalidateOnFocus: false
                        }}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SWRConfig>
                </OktaComponent>
            </Security>
        </AppContext.Provider>
    )
}

export default App