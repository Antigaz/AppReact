const express = require('express');
const app = express();
const PostRoute = express.Router();

// Require Post model in our routes module
let Post = require('../models/post');

// Defined store route
PostRoute.route('/add').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(function(post){
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
PostRoute.route('/').get(function (req, res, next) {
    Post.find().sort({date:-1})
        .populate('id_user')
        .then(function(post){
            res.json(post);
        }).catch(next);
});

// Defined update data
PostRoute.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            return next(new Error('Could not load Document'));
        else {
            post.body = req.body;

            post.save().then(post => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
PostRoute.route('/delete/:id').get(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err, post){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});

module.exports = PostRoute;