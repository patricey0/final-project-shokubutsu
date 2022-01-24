require('dotenv').config();
const express = require('express');

const router = require('./app/router');

const {cleaner} = require('./app/middlewares');

const app = express();

const expressJSDocSwagger  = require('express-jsdoc-swagger');

const port = process.env.PORT || 5000;

// middleware to mitigate XSS Attacks
app.use(cleaner);

app.use(express.json());

app.use('/v1', router);

const options = {
    info: {
        version: '1.0.0',
        description: 'Shokubutsu API Documentation',
        title: `Shokubutsu`,
    },
    produces: [
        "application/json"
    ],
    schemes: ['http', 'https'],
    basePath:`/v1`,
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './app/**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v3/api-docs',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
    // multiple option in case you want more that one instance
    multiple: true,
};

expressJSDocSwagger(app)(options);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

module.exports = app;