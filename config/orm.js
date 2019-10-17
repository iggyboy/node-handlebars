var connection = require("./connection.js");

//ORM object
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableInput], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: function (tableInput, vals, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?)";
        connection.query(queryString, [tableInput, vals], cb) {
            if (err) {
                throw err;
            }
            cb(data);
        }
    },

    updateOne: function(tableInput, colsvals, id, cb){
        var queryString = "UPDATE ?? SET ?? WHERE id = ?";
        connection.query(queryString, [tableInput, colsvals, id], function(err,data){
            if (err){
                throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;