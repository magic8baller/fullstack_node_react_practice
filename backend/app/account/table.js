const pool = require('../../databasePool');

class AccountTable {
  static storeAccount({ username, password }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account(username, password) VALUES($1, $2)',
        [username, password],
        (err, res) => {
          if (err) return reject(err);

          resolve();
        }
      );
    });
  }
}

module.exports = AccountTable;
