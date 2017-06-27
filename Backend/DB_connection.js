var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var DB = mongoose.connection;

DB.on('error', function (err) {
    console.error('Connection error(DB):', err.message);
});
DB.once('open', function callback() {
    console.info("Connected to DB!");
});

module.exports = DB;