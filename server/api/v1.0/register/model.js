let mongoose = require('mongoose');
let ObjectID = mongoose.Schema.ObjectId;
let registerDetails = new mongoose.Schema({
    name: String,
    email: String,
    mobilenumber:Number,
    emergency:String,
    discription:String,
    creatorId : ObjectID
})
let registerModel = mongoose.model('register',registerDetails);
module.exports = registerModel;