const express = require('express'); //lidar com rotas, parametros e respostas
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); // htpp

const server = require('http').Server(app); // http
const io = require('socket.io')(server); // web socket

// db connection
mongoose.connect('mongodb+srv://semana:semana@cluster0-2jpxm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io; // enable io inside every routes

    next();
});

// enable cross-domain requests
app.use(cors());

//yarn dev
//nodemon hot reload on back-end
//Midleware - Intercepter

// access static files like
// http://localhost:3333/files/headphone-gamer-edifier-g4-verde-life-style.jpg
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

// routes file
app.use(require('./routes'));

server.listen(3333);

