var connection = require("./connection.js");

//ORM object
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: function (tableInput, vals, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableInput, vals], function(err, data){
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    //UPDATE burger SET devoured = 1 WHERE id = 
    updateOne: function(tableInput, id, cb){
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [tableInput, id], function(err,data){
            if (err){
                throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;