import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export const authMiddleware = (req, res, next) => {

    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try{
        const decodedToken = jwt.verify(token,SECRET);
        req.user = decodedToken;
        //* All templates have acces to user
        res.locals.user = decodedToken;

        next();
    } catch(err){
        //* If token is expired...
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
}