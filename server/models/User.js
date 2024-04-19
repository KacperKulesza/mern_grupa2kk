const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    imageUrl: String
})

const User = mongoose.model("User", userSchema, "User");

module.exports = User;