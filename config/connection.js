var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qspggli4t14bro3n",
  password: "ksumvnjina9usbbu",
  database: "aprvs6ia7krcz6o7"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;