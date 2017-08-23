const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  quantity: Number,
  category: { type: String, enum: ["drink", "food", "extras", "necessary"] },
  creator: String,
  backer: String
});

module.exports = mongoose.model("Item", itemSchema);
