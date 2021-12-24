import { createConnection } from 'mysql';
// var mysql = require('mysql');

var con = createConnection({
    host: 'localhost',
    database: 'db_rest_api',
    user: 'root',
    password: ''
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});
module.exports = con;
