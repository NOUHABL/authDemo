const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'USERNAME EMPTY']
    },
    password: {
        type: String,
        require: [true, 'PASSWORD EMPTY']
    }
})

module.exports = mongoose.model('User', userSchema);