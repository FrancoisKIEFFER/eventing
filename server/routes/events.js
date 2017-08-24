const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Event = require("../models/event.js");
const Item = require("../models/item");

router.get("/events/:eventId/items", (req, res) => {
  Item.find(req.params.eventId).then(item => res.json(item));
});
// WORK   !!!!!!
router.get("/events/:eventId", (req, res) => {
  Event.findById(req.params.eventId).then(event => res.json(event));
});

//NOT WORK
// router.post("/events", MIDDLEWARE, (req, res) => {
//   Event.insertOne(req.body).then(event => res.json(event));
// });

router.patch("/events/:eventId", (req, res) => {
  Event.updateOne(req.params.evendId).then(user => res.json(user));
});

module.exports = router;
