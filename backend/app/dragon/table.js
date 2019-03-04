const pool = require('../../databasePool');
class DragonTable {
  static storeDragon(dragon) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId") VALUES($1, $2, $3) RETURNING id`,
        [dragon.birthdate, dragon.nickname, dragon.generationId],
        (err, res) => {
          if (err) return reject(err);
          const { id } = res.rows[0];
          resolve({ dragonId: id });
        }
      );
    });
  }
}

module.exports = DragonTable;
