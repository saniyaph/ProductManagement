const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    retuired: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const userModel = mongoose.model("admin", userSchema);

module.exports = userModel;
