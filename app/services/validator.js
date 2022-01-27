const validator = {
    validateBody: (schema, callback) => (request, response, next) => {
        const {error} = schema.validate(request.body);
        if (error) {
            callback(response, error);
        } else {
            next();
        }
    }
};

module.exports = validator;