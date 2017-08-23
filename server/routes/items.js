const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Event = require("../models/event.js");
const Item = require("../models/item.js");

router.post("/items", (req, res) => {
  Item.insertOne(req.body).then(item => res.json(item));
});

router.patch("/items/:itemId", (req, res) => {
  Item.updateOne(req.params.itemId).then(item => res.json(item));
});

router.delete("/items/:itemId", (req, res) => {
  Item.remove(req.params.itemId).then(item => res.json(item));
});

module.exports = router;
