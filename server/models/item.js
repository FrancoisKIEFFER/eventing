const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  category: { type: String, enum: ["drink", "food", "extras", "necessary"] },
  creator: String,
  backer: String,
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
});

module.exports = mongoose.model("Item", itemSchema);
