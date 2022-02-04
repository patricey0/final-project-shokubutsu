const JWT = require('jsonwebtoken');
const { jwt_secret } = require(`../config`)

module.exports = {
    makeToken: userId => {
        try {
            return JWT.sign(
                {
                    data: userId
                },
                jwt_secret,
                {
                    algorithm: 'HS256',
                    expiresIn: '24h'
                }
            );
        } catch(error) {
            console.log(error);
            throw error;
        }
    },

    validateToken: token => {
        try {
            return JWT.verify(
                token,
                jwt_secret,
                {
                    algorithms: ['HS256']
                }
            );
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}