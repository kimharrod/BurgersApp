
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the database
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with database
var Burger = sequelize.define("burgers", {
  // the burger name gets saved as a string
  burger_name: Sequelize.STRING,
  // whether or not the burger has been eaten is a Boolean
  devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  }
});

// Syncs with database and seeds database on initial sync
Burger.sync().then(function() {

  Burger.findAll({})
      .then(function(result) {
        // if not already seeded
        if (result.length < 3) {
          var burgArray = ['Big Mac', 'Whopper Jr', 'Baconator'];
        for (var i = 0; i < burgArray.length; i++) {
          Burger.create({
            burger_name: burgArray[i],
            devoured: false
          });
        } // end for
        } // end if not already seeded
      }); // end inner promise
}); // end Burger.sync promise

// Makes the Burger Model available for other files and creates a table
module.exports = Burger;