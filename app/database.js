const {Pool} = require('pg');
const { pg_url } = require(`./config`);

const config = {
    connectionString: pg_url,
};

if (process.env.NODE_ENV === "production") {
    config.ssl = {
        rejectUnauthorized: false
    };
}

const pool = new Pool(config);

module.exports = pool;