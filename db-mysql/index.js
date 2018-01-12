const mysql = require('mysql');
// const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.js')).mySql[env]['connection'];

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
    console.log('Connection established');
});

// connection.query('INSERT INTO users (username, profile_url) VALUES ("fakename", "http://www.google.com")', (err, results) => {
//   if (err) {
//     throw err;
//   }
//   console.log('put it in!');
//   connection.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       throw err;
//     }
//     console.log("RESULTS", results);
//   })
// })
// sequelize.authenticate()
// .then(() => {
//   console.log('DB CONNECTION MADE');
// })
// .catch(err => {
//   console.log(err);
// })
