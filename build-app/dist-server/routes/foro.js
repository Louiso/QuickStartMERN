'use strict';

var _express = require('express');

var _foro = require('../routes/foro');

var foro = (0, _express.Router)();

foro.get('/', function (req, res) {
  res.json({
    user: 'Vallugas esta cagando'
  });
});

foro.get('/:id', function (req, res) {
  var id = req.params;

  var foro = (0, _foro.getForoById)({ id: id }, null);
  res.json({
    foro: foro
  });
});

module.exports = foro;