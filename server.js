require('dotenv').config();
const express = require('express');
const app = express();

const API_PORT= process.env.API_PORT;


app.get('/', (req, res) => {
    res.send('Welcome!');
})

// START SERVER LISTEN
app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
  });