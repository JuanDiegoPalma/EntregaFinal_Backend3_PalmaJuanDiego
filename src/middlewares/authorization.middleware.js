const authorization = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).send({ error: 'Forbidden' });
        }
        next();
    };
};

const authorizeRole = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role; 
        if (!roles.includes(userRole)) {
            return res.status(403).send({ status: 'error', error: 'No tienes permisos para acceder a este recurso' });
        }
        next();
    };
};

export{
    authorization,
    authorizeRole
}