import tokenService from 'jsonwebtoken'
const mid = async (req, res, next) => {
    const noAuthPaths = ["/api/user/login", "/about"]
    if (noAuthPaths.includes(req.path) || (req.path === '/api/user')  && req.method === 'POST' ) {
        return next();
    }

    const token = req.headers.authorization;
    try {
        if(!token) {
            throw new Exception("Usuário não autorizado")
        }

        const tokenIsValid = await tokenService.verify(token, process.env.SECRET)
        if (tokenIsValid) {
            return next()
        }
        throw new Exception("Usuário não autorizado")
    } catch (err) {
        res.status(401).json({message: err.message})
    }

    //pegar o token e validar
}

export default mid