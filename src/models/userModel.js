const { getMongoose } = require('./mongooseConnector');

const mongoose = getMongoose();
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleID: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;