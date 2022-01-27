const Joi = require(`joi`);

const user = Joi.object({
    nickname: Joi.string().min(1).max(15).required(),
    mail: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
    city: Joi.string().min(1).max(30).required(),
    picture: Joi.string().uri({
        scheme: [
            'http',
            /http\+http?/,
            'https',
            /https\+https?/
        ]
    }).optional(),
    isAdmin: Joi.boolean().optional()
});

module.exports = user;