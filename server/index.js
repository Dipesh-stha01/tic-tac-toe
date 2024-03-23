// importing necessary modules

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

// initialize express
const app =express();
// port in which our server is deployed
// ------------ this port is provided by the service provider ------------ or else default
const port = process.env.port | 3000;

var server = http.createServer(app);


// the below is skipping
// var socketio = require('socket.io)
// var io = socketio(server);
var io = require('socket.io')(server);


// middleware
// client -> middleware ->server
app.use(express.json);

const DB  ='mongodb+srv://dummy:password11012@cluster0.2dmkcf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

io.on('connection',(socket)=>{
    console.log('Connected!!');
    socket.on('createRoom',({nickname})=>{
        console.log(nickname);
    });
});

// promise in js is like future in dart with async or then
mongoose.connect(DB).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
});



// listen to server for changes
// string interpolation needs back tick(``) to work
server.listen(port,'0.0.0.0',()=>{
    console.log(`server is running on port ${port}`);
});