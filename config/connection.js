var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ux0gavbxvt49qt8l",
  password: "t0bq1teonh14lh95",
  database: "o9023mc95r3c01sg"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;