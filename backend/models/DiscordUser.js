const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
  },
  email_verified: {
    type: Boolean,
  },
  role: {
    type: String,
    required: true,
  },
});

var DiscordUser = mongoose.model("User", UserSchema);
module.exports = DiscordUser;
