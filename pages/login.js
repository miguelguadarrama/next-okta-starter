import Layout from '../components/Layout'
import { useOktaAuth } from '@okta/okta-react';

const Login = props => {
    const { authService } = useOktaAuth();
    const oktaLogin = () => {
        authService.login("/")
    }

    return (
        <Layout>
            <p>Login page</p>
            <button type="button" onClick={oktaLogin}>Login</button>
        </Layout>
    )
}

export default Login