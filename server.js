require('dotenv').config();
const express = require('express');
const app = express();
const api = require('./utils/api');
const API_PORT = process.env.API_PORT;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.post('/page', (req, res) => {
    const asyncGetPage = async (requestUrl) => {
        return api.getPageDom(requestUrl);
    }
    asyncGetPage(req.body.message)
        .then(r => console.log(r))
});

// START SERVER LISTEN
app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
});