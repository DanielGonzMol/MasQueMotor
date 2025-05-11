const sql = require('mssql');
require('dotenv').config();

const poolPromise = new sql.ConnectionPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true, 
  },
})
  .connect()
  .then(pool => {
    console.log('Conexión exitosa a la base de datos');
    return pool;
  })
  .catch(err => {
    console.error('Error en la conexión a la base de datos', err);
    process.exit(1);
  });

module.exports = poolPromise;
