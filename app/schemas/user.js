import Joi from joi;

const user = Joi.object({
    nickname: Joi.string().min(1).required(),
    mail: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
    city: Joi.string().min(1).required(),
    picture: Joi.string().allow('').optional()
});

module.exports = user;