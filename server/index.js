const express = require('express');
const path = require('path');
const app = express();

const db = require(path.join(__dirname, '../db-mysql/index.js'));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

app.get('/freebietest', (req, res) => {
  res.send('OK');
});

const reposRouter = express.Router();

reposRouter.route('/')
  .get((req, res) => {

    res.send('BASE'); // change me after implementation
  });
reposRouter.route('/import')
  .post((req, res) => {

    res.send('IMPORT'); // change me after implementation
  });

app.use('/repos', reposRouter); // use routing for /reops with subroutes

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}.`);
});
