require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./app/router');

const {cleaner} = require('./app/middlewares');

const app = express();

const expressJSDocSwagger  = require('express-swagger-generator');


const port = process.env.PORT || 5000;

// middleware to mitigate XSS Attacks
app.use(cleaner);

app.use(express.json());

app.use(cors());

app.use('/v1', router);

let options = {
    swaggerDefinition: {
        info: {
            description: 'Shokubutsu API documentation',
            title: 'Shokubutsu',
            version: '1.0.0',
        },
        host: `localhost:${port}`,
        basePath: '/v1',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['./app/**/*.js'] //Path to the API handle folder
};


expressJSDocSwagger(app)(options);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

module.exports = app;