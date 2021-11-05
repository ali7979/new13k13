const mysql = require('mysql');

const db = mysql.createConnection({
    // host: "rms13db.cessx89fbyme.us-east-2.rds.amazonaws.com",
    // user: "13k13",
    // password: "123456789",
    // database: "13k13",
    host:"localhost",
    user:"root",
    password:"",
    database:"13k13_sql",
    port:3306

});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database connected successfully !')
});



module.exports = db;
