const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eventing");

const Event = require("../models/event");
const User = require("../models/user");
const Item = require("../models/item");

mongoose.set("debug", true);

User.remove({}, function(err) {
  Event.remove({}, function(err) {
    Item.remove({}, function(err) {
      const user = new User({
        name: "Fk",
        email: "fkieffer@fr.fr",
        address: "33 rue Lafayette",
        zipcode: "75008 Paris",
        phonenumber: "06 12 34 56 78",
        digicode: "Ask to reception"
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
        event.save().then(eventNew => {
          mongoose.connection.close();
        });
      });
    });
  });
});
