const router = require("express").Router();
const DiscordUser = require("../models/DiscordUser");

router.post("/save", async (req, res) => {
  console.log(req.body);
  let user = await DiscordUser.findOne({ email: req.body.data.email })
  console.log("User", user);
  if (!user) {
    const newUser = new DiscordUser({
      email: req.body.data.email,
      picture: req.body.data.picture,
      email_verified: req.body.data.email_verified,
      full_name: req.body.data.full_name,
      role: req.body.data.role,
    });
    newUser.save()
    return
  } else {
    await DiscordUser.findOneAndUpdate(
      { email: req.body.data.email },
      {
        picture: req.body.data.picture,
        email_verified: req.body.data.email_verified,
        full_name: req.body.data.full_name,
        role: req.body.data.role,
      }
    );
  }
});

module.exports = router;
