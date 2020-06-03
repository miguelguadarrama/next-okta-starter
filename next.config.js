const {
    OKTA_DOMAIN,
    OKTA_CLIENT_ID,
    OKTA_PKCE_ENABLED,
    OKTA_REDIRECT_URI
} = process.env;

module.exports = {
    env: {
        OKTA_DOMAIN,
        OKTA_CLIENT_ID,
        OKTA_PKCE_ENABLED: typeof OKTA_PKCE_ENABLED === "undefined" ? true : !!OKTA_PKCE_ENABLED,
        OKTA_REDIRECT_URI
    }
}