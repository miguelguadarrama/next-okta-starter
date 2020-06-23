import Head from 'next/head'

const Layout = props => {

    const title = "App"

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
            </Head>
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    )
}

export default Layout