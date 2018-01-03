const express = require('express');
const path = require('path');
const app = express();

const db = require(path.join(__dirname, '../db-mysql/index.js'));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}.`);
});
