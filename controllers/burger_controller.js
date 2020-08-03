const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.all(function(data) {
    const handlebarsObject = {
      burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});