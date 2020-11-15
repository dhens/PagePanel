require('dotenv').config();
const express = require('express');
const app = express();

// START SERVER LISTEN
app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
  });