const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({ 
    username: {type: String, required: true},
    password: {type: String, required: true},
    profileID: {type: String, required: true},

}); 

let User = mongoose.model("UserSchema", UserSchema);

module.exports = {User};