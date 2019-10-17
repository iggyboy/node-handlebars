var orm = require("../config/orm.js");

//call orm functions

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },

    insertOne: function(cb, vals){
        orm.insertOne("burger", vals, function(res){
            cb(res);
        });
    },

    updateOne: function(colsvals, id, cb){
        orm.updateOne("burger", colsvals, id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;