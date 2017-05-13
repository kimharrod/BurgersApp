// Require Express
var express = require("express");
// Set up the router middleware
var router = express.Router();

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


