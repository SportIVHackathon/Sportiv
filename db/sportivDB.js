/**
 * Created by amitarie on 04/01/17.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     :  $OPENSHIFT_MYSQL_DB_HOST,
    port     :  $OPENSHIFT_MYSQL_DB_PORT,
    user     : 'adminltHQzBa',
    password : 'DESbKr7KSa29',
    database : 'sportiv'
});

module.exports = connection;

