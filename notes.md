14 Homework - Reverse Engineering
Blair Taylor
March 3, 2021

## Setup the App
Run `npm init` in the command line to make a package.json file. The package.json file holds the metadata and is used for managing the app’s dependencies.
Run npm to install the following dependencies: bcryptjs, express, express-session, mysql12, passport, passport-local, and sequelize.
Install the express package by running `npm install express`. The express package is a flexible node.js application that provides more efficiency. 
In the server.js file the npm packages are required for express, express-session, passport. In the server.js file the port is set up with a web server call and then synced for listening for any requests that come in. In the server.js a variable is created for the express app and the middleware is configured. When you see app.use that is the indicator and points express to the directory for efficiency. There are two required routes for the html and the api.

## Config
Config directory holds the config.json, passport. js and the middleware directory for the isAuthentication.js file. The config.json file holds the default configurations. The keys for each of the objects (ie. `development`) point to the database and mysql service used for managing the databases.
The passport.js file is used for creating code to manage the authentication for the app. The npm packages required are passport and passport-local strategy. It calls the passport package strategy for the node.js and the local strategy which points to the type of login to be used. The username field object indicates an email will be used. Passport is exported at the bottom of the file.
A function is created for the sign in using the email and password. If the user enters an email and there is no user with that email and message is returned. If the user enters a matching email but the password is incorrect then a message is returned. 
There is boilerplate code for authentication to serialize and deserialize the user.
The isAuthentication.js file holds the middleware restricting routes to users logged in. If not logged in then they are redirected.

## Model
In the index.js file the npm packages required are setup for fs, path, and sequelize. The fs module enables the index to work with the file system. The index.js contains the code to execute. Sequelize is a promise-based node.js ORM for mysql. Object-relational mapping is a technique for converting data between incompatible type systems. Instead of using multiple objects with additional data objects, a sql database can store a database of relational objects or strings. The index.js is the brain file using sequelize to read, filter and iterate through the data.
The user.js file requires the bcryptjs package which is a library to help hash passwords. The file defines a valid user id using keys of email and password. 

## Public
The public directory holds all the front end code, including the html pages, style sheet and the javascript for the pages. The html pages all use a styling package called bootstrap which provides html/jss code for forms and other elements. The login.html is the form page for the user to login. If the user does not have a login username/email or password they are directed to the sign up page held at signup.html. Once the user is logged in they are directed to the welcome page held at member.html.
The style.css file controls the layout and adds a top margin to the forms on both the signup.html page and the login.html page.
The login.js creates variables based on the values from the form entries using template literals. The file has the interactivity of the form, if the user enters an email and password it ensures they are valid. If they are valid the user is directed to the members.html page.
The member,js file uses a get request promise to find out which user is logged in.
The signup.js file is similar to the login.js file in that the username/email and the password are valid. 

## Route
The api-routes.js file requires both the models directory and the passport.js file via the connection to the config directory. The RESTful route provides mapping from the HTTP app.post and app.get CRUD actions. The CRUD actions are create, read, update, and delete. The get actions equate to read and the post actions equate to create. An post example on line 9 is the user has a valid email and password they are sent to the members.html otherwise they are sent an error. Express matches the app.get and app.post paths pattern in the login, members and signup.js files. On line 17 the user email and password are created in key value pairs of the User object.

## Directory Setup
config
> middleware
> isAuthenticated.js
>config.json
passport.js

models
>index.js
>user.js

public
	>js
		>login.js
>members.js
>signup.js
	>stylesheets
		>style.css
	>login.html
	>members.html
	>signup.html

routes	
	>api-routes.js
>html.routes.js

package.json

server.js




