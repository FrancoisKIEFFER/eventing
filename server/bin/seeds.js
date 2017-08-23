const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eventing");

const Event = require("../models/event");
const User = require("../models/user");
const Item = require("../models/item");

const user = new User({
  name: "fk",
  email: "fk@fk.fk",
  address: "33 rue Lafayette",
  zipcode: "75008 Paris",
  phonenumber: "0623486504",
  digicode: "Interphone fk"
});

user.save().then(userNew => {
  const event = new Event({
    participants: ["John", "Seb", "Toto"],
    eventInfo: {
      title: "Soirée fin d'été",
      date: "31/08/17",
      description: "Fête de fin de l'été",
      haveIt: "Chaises, tables, plancher"
    },
    host: userNew._id,
    place: {
      address: "33 rue Lafayette",
      zipcode: "75008 Paris",
      digicode: "Interphone fk"
    }
  });
  event.save();
});

const item = new Item({
  name: "Bières",
  quantity: 1,
  category: "drink",
  creator: "John",
  backer: "Seb"
});
item.save();

mongoose.connection.close();
