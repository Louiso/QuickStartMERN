'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mongoose = require('mongoose');
var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

if (process.env.NODE_ENV === 'prod') {
  app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist-client')));

  app.get('/', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, '../dist-client/index.html'));
  });
} else {
  app.use((0, _cors2.default)({
    origin: _config2.default.client.http.getUri()
  }));
}
app.use('/api', _routes2.default);

var PORT = process.env.REACT_APP_BACKEND_PORT;

app.listen(PORT, function () {
  console.log('Server running on port : ' + PORT);
});