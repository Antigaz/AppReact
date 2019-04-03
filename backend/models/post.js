const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);