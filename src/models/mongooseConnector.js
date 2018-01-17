const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://admin:admin@ds239137.mlab.com:39137/users';

const getMongoose = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);
    return mongoose;
}

module.exports = { getMongoose };