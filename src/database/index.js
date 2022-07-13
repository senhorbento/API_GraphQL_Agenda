const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Agenda');
mongoose.Promise = global.Promise;

module.exports = mongoose;