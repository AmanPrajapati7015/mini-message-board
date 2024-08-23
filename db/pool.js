const {Pool} = require('pg');

const pool = new Pool({
    host:'localhost',
    port: '5432',
    user:'aman',
    password: 'aman',
    database: 'top_users'
})

module.exports = pool;