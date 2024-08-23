const {Pool} = require('pg');

const inst = new Pool({
    host:'localhost',
    port: '5432',
    user:'aman',
    password: 'aman',
    database: 'top_users'
})