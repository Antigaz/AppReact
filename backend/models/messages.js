const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Messages = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String
    }
},{
    collection: 'messages'
});

module.exports = mongoose.model('Messages', Messages);