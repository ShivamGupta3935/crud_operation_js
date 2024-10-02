const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxLength: [20, "name should be less then 20 word"]
    },
    email:{
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)