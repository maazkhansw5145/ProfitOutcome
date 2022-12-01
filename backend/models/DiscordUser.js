const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true },
  username: { type: String, required: true },
  emailId: {
    type: String,
    unique: true,
    required: true,
  },
  role: { type: String, required: true },
});

var DiscordUser = mongoose.model("User", UserSchema);
module.exports = DiscordUser;
