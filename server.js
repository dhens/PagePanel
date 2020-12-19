require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const API_PORT = process.env.API_PORT;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome!');
});

// convert url to DOM data and send back to client
app.post('/page', [
        body('message').isURL(),    // Validate that the data submitted is a URL
        body('notifyOnReply').toBoolean()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {    // If there are errors, return a 400 with the errors to the client
        console.log('/page POST validation failed: ' + req.body.message)
        return res.status(400).json({ errors: errors.array() });
    }
    axios.get(req.body.message) // Grab the DOM data of the user submitted URL
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (err) {
            res.send(err);
        })
});

// START SERVER LISTEN
app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
});