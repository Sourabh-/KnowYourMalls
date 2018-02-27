const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Pool } = require('pg');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json"));

const pool = new Pool({
  host: config.postgres.host,
  user: config.postgres.user,
  password: config.postgres.pass,
  database: config.postgres.database,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const city = require('./routes/city');
const mall = require('./routes/mall');
const store = require('./routes/store');

app.pool = pool;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/city', city);
app.use('/mall', mall);
app.use('/store', store);

app.listen(process.env.PORT || '6000', () => console.log(`Server started on port: ${process.env.PORT || '6000'}`));