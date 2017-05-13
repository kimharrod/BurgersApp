// Require Express
var express = require("express");
// Set up the router middleware
var router = express.Router();

var burgList = [];

//Import the model (burger.js) to use its database functions
var Burger = require("../models/burger.js");

//Create routes and set up logic within those routes

// Route to get all burgers and display to user
router.get("/", function(req, res) {

	Burger.findAll({})
	.then(function(result) {

		var data = {
			menu: []
		};

		  for (var i = 0; i < result.length; i++) {
		  	burgList.push(result[i].burger_name);
		  	if (result[i].devoured === false) {
		  	  data.menu.push({'not_eaten': result[i].burger_name});
			} else {
			  data.menu.push({'eaten': result[i].burger_name});
		    } // end if/else

		  } // end for loop
		  console.log("\n" + data.menu + "\n");

		 res.render("index", data); 

	}); // end promise
}); // end get route


// Route to add a burger to the menu
router.post("/", function(req, res) {

	// Take the request
	var burg = req.body;

	if (burgList.indexOf(burg.burger_name) === -1) {
		// create burger
		Burger.create({
			burger_name: burg.burger.name,
			devoured: false
		});
	} // end burger create

	res.redirect("/");

}); // end post a burger route


// Route to "eat" a burger
router.post("/devoured", function(req, res) {

	var burg = req.body;

	Burger.update({
		devoured: true
	  }, {
		where: {
		  burger_name: burg.not_eaten
		}
	  }).then(function(data) {
  	res.redirect("/");
	});
	
}); // end "devoured"



