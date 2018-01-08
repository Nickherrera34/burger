var mysql = require('mysql');

var connection = mysql.createConnection({

  port: 3306,
  host: "localhost",
  user: "root",
  password:"barton34",
  database: "burgers_db"

});

connection.connect(function(err){
  if(err){
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

//Export connection for our ORM file to use.
module.exports = connection;
