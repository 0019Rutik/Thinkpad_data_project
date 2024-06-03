// loginSchema.js

const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true , unique:true}
});




const LoginSch = mongoose.model('Login', loginSchema);

module.exports = LoginSch;