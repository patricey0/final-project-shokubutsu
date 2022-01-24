const {Pool} = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") {
    config.ssl = {
        rejectUnauthorized: false
    };
}

const pool = new Pool(config);

if (pool) console.log(`db config ok`);

module.exports = pool;