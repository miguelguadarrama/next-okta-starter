const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
    assertClaims: {
        aud: 'api://default'
    }
});

const validateToken = async (req, res) => {
    const accessTokenString = (req.headers.authorization || "").replace("Bearer ", "")
    const expectedAudience = 'api://default';

    if (!accessTokenString) {
        return ({ result: false })
    }

    const okta = await oktaJwtVerifier.verifyAccessToken(accessTokenString, expectedAudience)
        .catch(err => {
            console.log(err)
            return false
        }).then(jwt => {
            return jwt
        })

    return ({ result: okta && okta.claims && okta.claims.sub ? true : false, okta })
}


module.exports = {
    validateToken
}
