const jwt = require("jsonwebtoken");

function requireAuth(req, res, next){
    const authHeader = req.headers.authorization || '';
    const [scheme, token] = authHeader.split(' ');

    if(scheme !== 'Bearer' || !token){
        return res.status(401).json({error: "Unauthorized"});
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { id: payload.sub, username: payload.username};
        return next();
    }
    catch(error){
        return res.status(401).json({error: "Token is invalid or expired"});
    }
};

module.exports = requireAuth;