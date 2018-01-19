const Bluebird = require('bluebird');
const con = Bluebird.promisifyAll(require('./index.js').con);

const getAllUsers = () => {
  return con.queryAsync('SELECT  * FROM users;');
};

module.exports = {
  getAllUsers
}
