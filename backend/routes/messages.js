const express = require('express');
const app = express();
const messagesRoute = express.Router();

// Require Message model in our routes module
let Messages = require('../models/messages');

let x;

module.exports = function (app) {

    x = app;

    // Get Messages
    app.get('/messages', (req, res) => {
        Messages.find({}, (err, messages) => {
            res.send(messages);
        })
    })

    // Save Messages
    app.post('/messages', function (req, res) {
        let messages = new Messages(req.body);
        messages.save()
            .then(messages => {
                res.status(200).json(messages);
            })
            .catch(err => {
                res.status(400).send("unable to save to database" + err);
            });
    });

}
