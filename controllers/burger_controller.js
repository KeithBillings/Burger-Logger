const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data[0]);
    res.render("index", {burgers: data});
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


module.exports = router;