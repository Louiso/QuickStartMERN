'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var userRoute = (0, _express.Router)();

userRoute.get('/', function (req, res) {
  res.json({
    user: 'Vallugas esta cagando'
  });
});

userRoute.get('/:id', function (req, res) {
  res.json({
    userID: req.params.id
  });
});

exports.default = userRoute;