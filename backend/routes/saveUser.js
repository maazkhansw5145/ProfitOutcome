const router = require("express").Router();
const DiscordUser = require("../models/DiscordUser");

router.post("/save", async (req, res) => {
  let user = await DiscordUser.findOne({ email: req.body.data.email });
  if (!user) {
    const newUser = new DiscordUser({
      email: req.body.data.email,
      picture: req.body.data.picture,
      email_verified: req.body.data.email_verified,
      full_name: req.body.data.full_name,
      role: req.body.data.role,
    });
    newUser.save();
    return;
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

router.get("/check/:email", async (req, res) => {
  console.log("CHECK", req.params.email);
  let user = await DiscordUser.findOne({ email: req.params.email });

  if (!user) {
    return res.status(404).json({ msg: "No user found" });
  } else {
    return res.status(200).json({ user: user });
  }
});

module.exports = router;
