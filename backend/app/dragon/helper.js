const pool = require('../../databasePool');
const DragonTable = require('./table');
const getDragonWithTraits = ({ dragonId }) => {
  //wrap promises around each query
  return Promise.all([
    DragonTable.getDragon({ dragonId }),
    new Promise((resolve, reject) => {
      pool.query(
        `SELECT "traitType", "traitValue"
        FROM trait
        INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
        WHERE dragonTrait."dragonId" = $1`,
        [dragonId],
        (err, res) => {
          if (err) return reject(err);

          resolve(res.rows);
        }
      );
    })
  ])
    .then(([dragon, dragonTraits]) => {
      //maitain internal consistency by returning NEW INSTANCE of dragon class instead of building the object like so:
      // dragon.dragonId = dragonId;
      // dragon.traits = dragonTraits;
      // return dragon;

      return new Dragon({
        ...dragon,
        dragonId,
        traits: dragonTraits
      });
    })
    .catch(err => console.error(err));
};
module.exports = { getDragonWithTraits };
