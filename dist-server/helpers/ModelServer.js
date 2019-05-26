'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelServer = function () {
  function ModelServer(_ref) {
    var _ref$protocol = _ref.protocol,
        protocol = _ref$protocol === undefined ? '' : _ref$protocol,
        _ref$port = _ref.port,
        port = _ref$port === undefined ? '' : _ref$port,
        _ref$host = _ref.host,
        host = _ref$host === undefined ? '' : _ref$host,
        _ref$route = _ref.route,
        route = _ref$route === undefined ? '' : _ref$route;

    _classCallCheck(this, ModelServer);

    this.protocol = protocol;
    this.port = port;
    this.host = host;
    this.route = route;
  }

  _createClass(ModelServer, [{
    key: 'getUri',
    value: function getUri() {
      var protocol = this.protocol,
          port = this.port,
          host = this.host,
          route = this.route;

      if (route === '/') return protocol + '://' + host + ':' + port;
      return protocol + '://' + host + ':' + port + route;
    }
  }]);

  return ModelServer;
}();

exports.default = ModelServer;