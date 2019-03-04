const pool = require('../../databasePool');
const DragonTable = require('./table');
const getDragonWithTraits = ({ dragonId }) => {
  //wrap promises around each query
  return Promise.all([DragonTable.getDragon({ dragonId })]);
};
