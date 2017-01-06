var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.OPENSHIFT_MYSQL_DB_HOST ||  "127.0.0.1",
    user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
    password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
    port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
    database : process.env.OPENSHIFT_APP_NAME,
});

module.exports = connection;

