const pool = require('../../databasePool');

class AccountTable {
  static storeAccount({ usernameHash, passwordHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account("usernameHash", "passwordHash") VALUES($1, $2)',
        [usernameHash, passwordHash],
        (err, res) => {
          if (err) return reject(err);

          resolve();
        }
      );
    });
  }

  static getAccount({ usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, "passwordHash" FROM account
        WHERE "usernameHash" = $1`,
        [usernameHash],
        (err, res) => {
          if (err) return reject(err);

          resolve({ account: res.rows[0] });
        }
      );
    });
  }
}

module.exports = AccountTable;
