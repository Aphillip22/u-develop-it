//require mysql2
const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: 'Shitballs$88',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
module.exports = db;