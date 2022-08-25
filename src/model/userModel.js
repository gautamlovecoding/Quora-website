import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String, unique: true}, 
  password: {type: String, required: true}, // encrypted password
  creditScore: {type: Number, required: true}

},{timestamp: true});

const userModel = mongoose.model("User", userSchema);

export default userModel;

