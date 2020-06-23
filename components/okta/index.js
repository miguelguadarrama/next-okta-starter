import { useOktaAuth } from '@okta/okta-react'
import { useContext, useEffect } from 'react'
import Router from 'next/router'
import AppContext from '../../context/app';
import Loading from '../common/loading'

const OktaComponent = props => {
    const { authState, authService } = useOktaAuth();
    const { state, dispatch } = useContext(AppContext)

    useEffect(() => {
        //console.log("isAuthenticated", authState.isAuthenticated)
        if (authState.isAuthenticated) {
            authService.getUser().then(user => {
                dispatch({ type: 'SET_USER', data: { ...user, token: authState.accessToken } })
            });
        }
    }, [authState, authService])

    if (authState.isPending) {
        return <Loading />
    }

    const route = Router.route

    const okta_urls = ["/okta/callback", "/okta/login", "/login"]

    if (!authState.isAuthenticated && okta_urls.indexOf(route) === -1) {
        authService.login("/")
    }

    if (okta_urls.indexOf(route) === -1 && !state.user) {
        return <Loading />
    }

    return props.children
}

export default OktaComponent