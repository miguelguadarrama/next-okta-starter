const {
    OKTA_PKCE_ENABLED
} = process.env;

let envs = {}
Object.keys(process.env).forEach(v => {
    if (v[0] !== "_" && v.indexOf("NODE") === -1) {
        envs[v] = process.env[v]
    }
})

module.exports = {
    env: {
        ...envs,
        OKTA_PKCE_ENABLED: typeof OKTA_PKCE_ENABLED === "undefined" ? true : !!OKTA_PKCE_ENABLED
    },
    webpack: function (cfg) {
        const originalEntry = cfg.entry
        cfg.entry = async () => {
            const entries = await originalEntry()

            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./client/polyfills.js')
            ) {
                entries['main.js'].unshift('./client/polyfills.js')
            }

            return entries
        }

        return cfg
    }
}