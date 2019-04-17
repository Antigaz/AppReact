const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const cors = require('cors');
const path = require('path');
const users = require('./routes/user');
const postroutes = require('./routes/postRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const PORT = 5000;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = require('./routes/user')(app);
const post = require('./routes/postRoute')(app);

app.post('/users', (req, res, next) =>{
    res.send(require('./routes/user'));
    next();
});
app.post('/posts', (req, res, next) => {
    res.send(require('./routes/postRoute'));
    next();
});
app.post('/login', (req, res, next) => {
    res.send(require('./routes/user'));
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

server.listen(PORT);

/*app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});*/

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});