const mongoose = require('mongoose')

//here we are creating userSchema
// name,email, profile are the schema fields
const userSchema = new mongoose.Schema({
    name: {
        type: String, // object 
        lowercase: true,  // we can only use lowercase and uppercase in string type data
        required: true, // boolean type, if you want to require any thing from front-end
        minLength: 5, // want to store name which have atleast 5 char.
        maxLength: 10  // want to store name which have atmost 10 char.

    },
    age:
    {
        type: Number,
        min: 18,
        max: 45
    },
    email:
    {
        type: String,
        uppercase: true, // want to store email in uppercase
    },
    profile:
    {
        type: String,
        default: '' //if front-end user don't have any profile then database automatically store default value.   
    },
    createdAt:
    {
        type: Date,
        default: Date.now(),
        immutable: true // date can't be modify
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'], // only want to store one of them, we can use enum in array
        default: 'user' // Default value if not provided
    }

})


const User = mongoose.model('User', userSchema) // 'User' is a collection name
module.exports = User