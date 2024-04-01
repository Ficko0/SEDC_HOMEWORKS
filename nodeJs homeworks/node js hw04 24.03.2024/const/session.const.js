import session from "express-session";

const authSession = session({
    secret: '123123',
    name: 'userId',
    cookie: {
        maxAge: 2 * 60 * 60 * 1000
    },
    saveUninitialized: true,
    resave: true,
})

export default authSession;