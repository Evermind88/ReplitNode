const mongoose = require('mongoose');
const { Schema } = mongoose; 
//curly braces looking in mongoose and finding Schema property and assigning it to Schema variable
//mongoose wants to kow ahead of time all the properties were gonna have
const userSchema = new Schema({
    googleId: String
});

mongoose.model ('users',userSchema);
//this will define all the properties our schema will have
//tells mongoose i wanna reate a new collection called users
//can freely add and subtract properties to userSchema variable
