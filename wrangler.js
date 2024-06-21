// index.js
const express = require('express');
const app = express();
const port = 3005;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/wrangler', (req, res) => {
  connection.query('SELECT wrg_image,wrg_name,wrg_msrp,wrg_le FROM wrangler', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('wrangler', { wrangler: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});