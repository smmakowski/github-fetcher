const express = require('express');
const Bluebird = require('bluebird');
const https = require('https');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const db = require(path.join(__dirname, '../db-mysql/models.js'));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

app.get('/freebietest', (req, res) => {
  res.send('OK');
});

app.get('/users', (req, res) => {
  db.getAllUsers()
  .then((users) => {
    console.log(users);
    res.send(JSON.stringify(users));
  });
});

const reposRouter = express.Router();

reposRouter.route('/')
  .get((req, res) => {

    res.json('BASE'); // change me after implementation
  });

reposRouter.route('/import')
  .get((req, res) => {
    const options = {
      host: 'https://api.github.com',
      path: '/users/smmakowski/repos',
      method: 'GET',
      rejectUnauthorized: false
    }

    https.request(options, (resp) => {
      let str = "";
      resp.on('data', (chunk) => {
        console.log(chunk)
        str += chunk;
      });
      resp.on('end', () => {
        console.log('done');
        res.json(str); // change me after implementation
      })
    })


  });

app.use('/repos', reposRouter); // use routing for /reops with subroutes

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}.`);
});
