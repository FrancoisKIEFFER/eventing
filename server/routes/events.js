const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Event = require("../models/event.js");
const Item = require("../models/item");
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.get("/events/:eventId/items", (req, res) => {
  Item.find(req.params.eventId).then(item => res.json(item));
});
// WORK   !!!!!!
router.get("/events/:eventId", (req, res) => {
  Event.findById(req.params.eventId)
    .then(event => {
      return event.populate("host").execPopulate();
    })
    .then(event => {
      res.json(event);
    });
});

//NOT WORK
router.post("/events", (req, res, next) => {
  if (!req.user) {
    res.json({ error: "Not connected" });
  } else {
    console.log("DEBUG req.user ", req.user);
    console.log("DEBUG req.get('Authorization') ", req.get("Authorization"));
    console.log("DEBUG req.headers ", req.headers);

    var { title, date, description, haveIt, token } = req.body;
    var event = new Event({
      eventInfo: {
        title,
        date,
        description,
        haveIt
      },
      place: {
        address: req.user.address,
        zipcode: req.user.zipcode,
        digicode: req.user.digicode
      },
      host: req.user._id
    });
    event.save((err, eventCreated) => {
      if (err) return next(err);
      else res.json(eventCreated);
    });
  }
});

router.patch("/events/:eventId", (req, res) => {
  Event.updateOne(req.params.evendId).then(user => res.json(user));
});

module.exports = router;
