const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Pool } = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  database: 'KnowYourMalls',
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