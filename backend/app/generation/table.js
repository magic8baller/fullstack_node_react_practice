const pool = require('../../databasePool');

class GenerationTable {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        (err, res) => {
          if (err) return reject(err);
          const { id } = res.rows[0]; //res.rows[0].id
          resolve({ generationId: id });
        }
      );
    });
  }
}

module.exports = GenerationTable;
