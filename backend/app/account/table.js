const pool = require('../../databasePool');

class AccountTable {
  static storeAccount({ username, pass }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account(username, pass) VALUES($1, $2)',
        [username, pass],
        (err, res) => {
          if (err) return reject(err);

          resolve();
        }
      );
    });
  }
}

module.exports = AccountTable;
