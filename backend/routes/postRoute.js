const express = require('express');
const app = express();
const PostRoute = express.Router();

// Require Post model in our routes module
let Post = require('../models/post');

let x;

module.exports = function (app) {

    x = app;

// Defined store route
    app.post('/add', function (req, res) {
        let post = new Post(req.body);
        post.save()
            .then(post => {
                res.status(200).json(post);
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    });

// Defined get data(index or listing) route
    app.get('/', function (req, res) {
        Post.find({}).sort({date: -1}).exec(function (err, posts) {
            if (err) {
                console.log(err);
            } else {
                res.json(posts);
            }
        });
    });

// Defined delete | remove | destroy route
    app.get('/delete/:id', function (req, res) {
        Post.findByIdAndRemove({_id: req.params.id}, function (err, post) {
            if (err) res.json(err);
            else res.json(req.params.id);
        });
    });

}
