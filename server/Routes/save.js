const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:6017/hari';


router.post('/save', (req, res, next) => {
  console.log("hai ra sami");
  const results = [];
  // Grab data from http request
  const data = {id: req.body.id, name: req.body.name,email:req.body.email,password:req.body.password};
  console.log("ath"+" "+data.id);
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log("hai ra sami");
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    console.log("hari");
    const query= client.query('INSERT INTO students(id,name,email,password) values($1, $2,$3,$4)',[data.id,data.name,data.email,data.password]);
    query.on('end', () => {
          done();
          return res.send("registered");
        });
    // After all data is returned, close connection and return results

  });
});


module.exports = router;
