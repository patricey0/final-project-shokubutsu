const jwt = require('../services/jwt');
const {User} = require(`../models`);

jwt_mw = async (request, response, next) => {
    try {
        let token = request.headers['authorization'];
        console.log(`jwt-mw token: `, token);
        if (!token) {
            return response.status(401).json('Invalid token');
        }
        const payload = jwt.validateToken(token);
        console.log( `jwt-mw payload : `, payload);
        if (!payload.data) {
            return response.status(401).json('Invalid token');
        }
        request.userId = payload.data;
        next();
    } catch(error) {
        console.log(error);
        response.status(401).json(error.message);
    }
}

module.exports = jwt_mw;