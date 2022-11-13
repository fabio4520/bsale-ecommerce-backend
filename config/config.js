const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  port: 3306,
  database: 'bsale_test'
})

connection.connect(function (err) {
  if (err) {
    console.log('Database connection failed: ' + err.stack);
    return
  }
  console.log('Connected to database');
})

module.exports = connection;

