const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:6017/hari';

router.post('/clogin', (req, res, next) => {
  const results = [];
    const data = {from:req.body.from,username: req.body.username, password: req.body.password};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    console.log(data.username+" "+data.password);
    const query = client.query('SELECT * FROM coach where username = ($1) and password =($2)',[data.username,data.password]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      console.log(results);
      if(results!="")
      return res.sendFile("DashBoard.html", {"root": __dirname});
    });
  });
});

module.exports = router;
