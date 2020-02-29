// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // calendar route loads calendar 
  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });
  
  app.get("/cms", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // sign up route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
