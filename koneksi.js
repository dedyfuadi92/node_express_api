import { createConnection } from 'mysql';
var conn = createConnection({
    host: 'localhost',
    database: 'db_rest_api',
    user: 'root',
    password: ''
});

conn.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

export { conn };