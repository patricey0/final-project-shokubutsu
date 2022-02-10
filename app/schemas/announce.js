const Joi = require(`joi`);

const announce = Joi.object({
    title: Joi.string().min(1).max(30).required(),
    image: [Joi.string().uri({
        scheme: [
            'http',
            /http\+http?/,
            'https',
            /https\+https?/
        ]
    }).optional().allow(null)],
    description: Joi.string().min(1).max(500).required(),
    category: Joi.string().min(1).max(15).required(),
    author: Joi.number().positive().required()
})

module.exports = announce;