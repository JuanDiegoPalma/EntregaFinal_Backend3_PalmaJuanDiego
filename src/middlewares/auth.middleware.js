export const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] 
    const token = authHeader.split(' ')[1]
    jwt.verify(token, PRIVATE_KEY, (error, userDataDecode) => {
        if(error) return res.send({status: 'success', error: 'no atuhorized'})
            console.log(userDataDecode)
        req.user = userDataDecode
        next()

    })
}

export const authentication = (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.status(401).send({ status: 'error', error: 'Unauthorized' });
    }
    next();
};