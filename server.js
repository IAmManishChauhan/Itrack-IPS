    // Load required packages
    var express = require('express');
    var bodyParser = require("body-parser");



    // Create our Express application
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ "extended" : false }));

    var fs = require("fs");
    // Default routing 
    app.use(express.static(__dirname + '/'));



    // Start the server
  //  app.listen(8080);
