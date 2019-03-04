const { Pool } = require('pg');
const dbConfig = require('./secrets/databaseConfig');
const pool = new Pool(dbConfig);

module.exports = pool;

pool.query('SELECT * FROM dragon', (err, res) => {
  if (err) return console.log('error', err);

  console.log('response', res.rows);
});
