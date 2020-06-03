import { validateToken } from './_libs/okta'

export default async (req, res) => {
  const valid = await validateToken(req, res)

  console.log({ valid })

  if (!valid.result) {
    res.statusCode = 401;
    return res.json({ result: false })
  }

  res.json({ message: `Hello ${valid.okta.claims.sub}!` })
}
