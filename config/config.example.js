/*
  Copy this file, and remove the '.example part', then fill in your own API key(s) locally
  git will ignore config.js
*/

module.exports = {
  mySql: {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'password', /* OR whatever the password is */
        database: 'github_fetcher'
      }
    }
  }
}
