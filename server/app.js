require("dotenv").config();

const history = require("express-history-api-fallback");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("./models/user");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

const config = require("./config");
const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:8080"
  })
);

passport.initialize();
// Create the strategy for JWT
const strategy = new Strategy(
  {
    // this is a config we pass to the strategy
    // it needs to secret to decrypt the payload of the
    // token.
    secretOrKey: config.jwtSecret,
    // This options tells the strategy to extract the token
    // from the header of the request
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    // payload is the object we encrypted at the route /api/token
    // We get the user id, make sure the user exist by looking it up
    User.findById(payload.id).then(user => {
      if (user) {
        // make the user accessible in req.user
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
// tell pasport to use it
passport.use(strategy);

const authRoutes = require("./routes/auth");
const itemsRoutes = require("./routes/items");
const eventsRoutes = require("./routes/events");

app.use("/api", (req, res, next) => {
  passport.authenticate("jwt", config.jwtSession, (err, user, fail) => {
    req.user = user;
    next(err);
  })(req, res, next);
});

app.get("/api/me", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({
      message: "You're not connected"
    });
  }
});

app.get(
  "/api/secret",
  // this is protecting the route and giving us access to
  // req.user
  ensureLoggedIn(),
  (req, res) => {
    // send the user his own information
    res.json(req.user);
  }
);

app.use("/api", authRoutes);
app.use("/api", itemsRoutes);
app.use("/api", eventsRoutes);

const clientRoot = path.join(__dirname, "../client/dist");
app.use("/", express.static(clientRoot));
app.use(history("index.html", { root: clientRoot }));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json(req.app.get("env") === "development" ? err : {});
});

module.exports = app;
