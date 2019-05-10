const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const http = require('http');
const cors = require('cors');

const express = require('express'),
    app = module.exports.app = express();
const server = http.createServer(app);

const users = require('./routes/user');
const postroutes = require('./routes/postRoute');
const messages = require('./routes/messages');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.use('/api/posts', postroutes);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    /*console.log(socket.id);*/
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});