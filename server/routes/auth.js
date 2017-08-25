const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");
const Event = require("../models/event");

router.post("/signup", (req, res, next) => {
  const {
    username,
    email,
    password,
    address,
    zipcode,
    phonenumber,
    digicode
  } = req.body;

  const user = new User({
    username,
    email,
    address,
    zipcode,
    phonenumber,
    digicode
  });

  User.register(user, password, err => {
    if (err) {
      return next(err);
    }
    res.json({ success: true });
  });
});

const authenticate = User.authenticate();
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        return next(err);
      }
      if (failed) {
        return res.status(401).json(failed.message);
      }
      if (user) {
        const payload = {
          id: user.id
        };

        const token = jwt.encode(payload, config.jwtSecret);
        res.json({ token, username });
      }
    });
  } else {
    res.sendStatus(401).json("Username or Password are missing");
  }
});

router.get("/events/:eventId", (req, res) => {
  Event.findById(req.params.eventId).then(item => res.json(item));
});

module.exports = router;
