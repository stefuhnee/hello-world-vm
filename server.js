'use strict';

const http = require('http');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

const express = require('express');
const dir = process.cwd();

const app = express();
app.use(express.static(dir));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let currentDir = dir;
  let query = req.query.path || '';
  if (query) currentDir = path.join(dir, query);
  fs.readdirAsync(currentDir)
  .then(files => Promise.all(files.map(getStats)))
  .then(console.log)
  .catch(err => res.send(err));
});

function getStats(file) {
  return fs.statAsync(path.join(dir, file))
}

const server = http.createServer(app);

server.listen(80, () => {
  console.log('listening on port 80');
});
