require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("passport");
// const discordStrategy = require("./strategies/discordstrategy");
const db = require("./database/database");
const path = require("path");
const cors = require("cors");

db.then(() => console.log("Connected to MongoDB.")).catch((err) =>
  console.log(err)
);

// Routes
const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");
const saveUserRoute = require('./routes/saveUser')
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "some random secret",
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
    name: "ProfitOutcome",
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);
app.use("/user", saveUserRoute);

app.get("/", (req, res) => {
  res.render("home", {
    users: [
      { name: "Connor", email: "Challam1296@gmail.com" },
      { name: "Steve", email: "Steve5678@gmail.com" },
      { name: "Gary", email: "Gary1374@gmail.com" },
      { name: "Derek", email: "Dirkh@gmail.com" },
      { name: "Whippy", email: "Whipster@gmail.com" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Now listening to requests on port ${PORT}`);
});
