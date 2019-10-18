var orm = require("../config/orm.js");

//call orm functions

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },

    insertOne: function(val, cb){
        orm.insertOne("burger", val, function(res){
            cb(res);
        });
    },

    updateOne: function( id, cb){
        orm.updateOne("burger", id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;