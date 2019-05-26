'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModelServer = require('../helpers/ModelServer');

var _ModelServer2 = _interopRequireDefault(_ModelServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  client: {
    http: new _ModelServer2.default({
      protocol: process.env.CLIENT_HTTP_PROTOCOL,
      host: process.env.CLIENT_HOST,
      port: process.env.CLIENT_PORT,
      route: process.env.CLIENT_ROUTE
    })
  }
};

exports.default = config;