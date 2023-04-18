const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, require:true },
    lastName: { type: String, require:true },
    email: { type: String, require:true, unique:true },
    role: {
        type: String,
        enum: ['USER','ADMIN'],
        require:true
    },
    mobileNumber: { type: Number, require:true, unique:true },
    password: { type: String, require:true },
    otp: Number
}, {
    collection: "users"
})

const User =  mongoose.model('users', userSchema);

module.exports= User;
