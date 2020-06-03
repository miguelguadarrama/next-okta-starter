import { Security } from '@okta/okta-react';

const config = {
    issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
    redirectUri: process.env.OKTA_REDIRECT_URI,
    clientId: process.env.OKTA_CLIENT_ID,
    pkce: process.env.OKTA_PKCE_ENABLED
};

const App = ({ Component, pageProps }) => {

    return (
        <Security {...config}>
            <Component {...pageProps} />
        </Security>
    )
}

export default App