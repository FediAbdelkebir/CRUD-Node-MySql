'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'bmbgtad8tzqs64ygsjmv-mysql.services.clever-cloud.com',
  user     : 'uih4rit4jcdcv7dl',
  password : 'hFr4kIzImcyQQstp4rTH',
  database : 'bmbgtad8tzqs64ygsjmv'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;