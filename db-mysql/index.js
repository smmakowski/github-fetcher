const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('github_fetcher', 'root', '', {host: 'localhost', dialect: 'mysql'});

sequelize.authenticate()
.then(() => {
  console.log('DB CONNECTION MADE');
})
.catch(err => {
  console.log(err);
})
