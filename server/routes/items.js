const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const router = express.Router();
const User = require("../models/user");
const Event = require("../models/event.js");
const Item = require("../models/item.js");

router.get("/items/:itemId", (req, res) => {
  Item.findById(req.params.itemId).then(item => res.json(item));
});

// NOT WORK :(
router.post("/items", (req, res) => {
  Item.pop({ _id: ObjectId(req.params.itemId) }).then(item => res.json(item));
});

//WORK !!!!!!!
router.patch("/items/:itemId", (req, res) => {
  Item.updateOne({ _id: ObjectId(req.params.itemId) }, req.body).then(item =>
    res.json(item)
  );
});

//WORK !!!!!!!
router.delete("/items/:itemId", (req, res) => {
  Item.remove({ _id: ObjectId(req.params.itemId) }).then(item =>
    res.json(item)
  );
});

module.exports = router;
