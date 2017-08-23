const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  participants: [String],
  eventInfo: {
    title: String,
    date: String,
    description: String,
    haveIt: String
  },
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  place: {
    address: String,
    zipcode: String,
    digicode: String
  }
});

module.exports = mongoose.model("Event", eventSchema);
