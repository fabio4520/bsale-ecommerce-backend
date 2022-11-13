const mysql = require('mysql');

const db_config = {
  connectionLimit: 10,
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  port: 3306,
  database: 'bsale_test'
}

const connection = mysql.createPool(db_config);
connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
    }
}
  if (connection) connection.release()
  return
})

module.exports = connection;

