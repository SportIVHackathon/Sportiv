/**
 * Created by amitarie on 04/01/17.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.OPENSHIFT_MYSQL_DB_HOST ||  "127.0.0.1",
    user     :  process.env.OPENSHIFT_MYSQL_DB_USERNAME ||   "adminltHQzBa",
    password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "DESbKr7KSa29",
    port     : process.env.OPENSHIFT_MYSQL_DB_PORT ||  "3306",
    database : process.env.OPENSHIFT_APP_NAME || "sportiv"
});

module.exports = connection;

