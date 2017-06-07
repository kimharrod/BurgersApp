# BurgersApp
Order and eat delish burgers!


### Overview

This Burgers app is a full-stack site implemented with node, express, handlebars and Sequelize ORM.

You can start the app from the command line using "node server.js".


### User Interface


BurgersApp works as follows:

1. Users are welcomed to BurgersApp with the message "Order a Burger!". 

2. There is a call to action entry form, where the user can enter the name of a burger.

3. When the user enters a burger name and clicks Submit, the new burger name appears in the "Burgers on the Menu" section, along with a randomly assigned burger image, and a dynamically generated "Devour it" button. 

4. The user can continue to add burgers, or click "Devour it" for any of the Burgers shown on the menu.

![BurgerApp home page](http://fios.vc/BurgerAppPage.png "Home Page")

5. If the user clicks a "Devour it" button, the name & image of that burger will be transferred to the "Devoured Burgers" section of the page.


### Dependencies and Packages

The app requires the 'express', 'express-handlebars, 'body-parser', 'method-override' and 'sequelize' npm packages.

The app uses handlebars to display the html, and Sequelize for the data model and queries.
