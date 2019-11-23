var express = require("express")
var bodyParser = require("body-parser")
var mongodb = require("mongodb")
var ObjectID = mongodb.ObjectID

var CONTACTS_COLLECTION = "contacts"

var app = express()
app.use(bodyParser.json())

var db

mongodb.MongoClient.connect(process.env.MONGO_URI || "mongodb://localhost:27017/contact", function (err, client) {
    if (err) {
        console.log(err)
        process.exit(1)
    }

    db = client.db()
    console.log("Database connection ready")

    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port
        console.log("App is now running on port", port)
    })
})

//contacts api routes below
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
  
  /*  "/api/contacts"
   *    GET: finds all contacts
   *    POST: creates a new contact
   */
  
  app.get("/api/contacts", function(req, res) {

  });
  
  app.post("/api/contacts", function(req, res) {

  });
  
  /*  "/api/contacts/:id"
   *    GET: find contact by id
   *    PUT: update contact by id
   *    DELETE: deletes contact by id
   */
  
  app.get("/api/contacts/:id", function(req, res) {

  });
  
  app.put("/api/contacts/:id", function(req, res) {

  });
  
  app.delete("/api/contacts/:id", function(req, res) {
      
  });