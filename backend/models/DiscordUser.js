const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true },
  user: {
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
});

var DiscordUser = mongoose.model("User", UserSchema);
module.exports = DiscordUser;
