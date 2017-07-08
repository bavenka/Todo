import mongoose from 'mongoose';

let Connection = mongoose.connection;

let timeout = 5000;

const connect = () => mongoose.connect('mongodb://localhost/test', {server: {auto_reconnect: true}});
connect();

Connection.on('error', function (err) {
    console.error('Connection error(DB):', err.message);
});
Connection.on('open', function callback() {
    console.info("Connected to DB opened!");
});

Connection.on('disconnected', function () {
    console.log('DB disconnected!');
    setTimeout(connect, timeout);
});

module.exports = Connection;