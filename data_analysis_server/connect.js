var mysql2 = require('mysql');

module.exports = con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "shreya26",
  database: "testdb",
  dialect: "mysql"
});
