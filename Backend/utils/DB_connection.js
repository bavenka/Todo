import mongoose from 'mongoose';

let Connection = mongoose.connection;

let timeout = 5000;

export const connect = (url) => mongoose.connect(url || 'mongodb://localhost/test', {server: {auto_reconnect: true}});

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

export default Connection;