var express = require("express");
var Burger = require("../models/burger.js");
//router
var router = express.Router();

//routes
router.get("/", function (req, res) {
    Burger.selectAll(function (data) {
        res.render("index", {burger: data});
    });
});

router.post("/api/burger", function (req, res) {
    Burger.insertOne(req.body.burgerName, function (result) {
        res.end();
    });
});

router.put("/api/burger/:id", function (req, res) {
    Burger.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
