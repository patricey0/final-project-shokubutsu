const Joi = require(`joi`);

const announce = Joi.object({
    title: Joi.string().min(1).required(),
    image: Joi.string().uri({
        scheme: [
            'http',
            /http\+http?/,
            'https',
            /https\+https?/
        ]
    }).optional(),
    creation_date: Joi.date().timestamp().required(),
    description: Joi.string().min(1).max(500).required(),
    category: Joi.string().min(1).max(50).required(),
    author: Joi.number().positive().required()
})

module.exports = announce;