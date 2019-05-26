'use strict';

var _express = require('express');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _foro = require('./foro');

var _foro2 = _interopRequireDefault(_foro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = (0, _express.Router)();

api.use('/user', _user2.default);
api.use('/foro', _foro2.default);
module.exports = api;