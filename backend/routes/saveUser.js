const router = require("express").Router();
const DiscordUser = require("../models/DiscordUser");

router.post("/save", async (req, res) => {
  console.log(req.body);
  let user = await DiscordUser.findOne({ discordId: req.body.userObject.discordId });
  console.log("User", user);
  if (!user) {
    const newUser = new DiscordUser({
      discordId: req.body.userObject.discordId,
      user: {
        username: req.body.userObject.user.username,
        avatar: req.body.userObject.user.avatar,
      },
    });
    newUser.save();
  }
});

module.exports = router;
