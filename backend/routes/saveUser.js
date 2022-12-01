const router = require("express").Router();
const DiscordUser = require("../models/DiscordUser");

router.post("/save", async (req, res) => {
  console.log(req.body);
  let user = await DiscordUser.findOne({ emailId: req.body.user.email });
  console.log("User", user);
  if (!user) {
    const newUser = new DiscordUser({
      emailId: req.body.user.email,
      username: req.body.user.full_name,
      discordId: req.body.user.provider_id,
      role: req.body.role,
    });
    newUser.save();
  }
});

module.exports = router;
