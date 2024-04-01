const validateSession = (req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn;

    if (isLoggedIn) {
        next();
    }

    else {
        res.status(403).send({message: 'Please login'})
    }
}

export default validateSession;