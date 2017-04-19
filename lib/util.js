'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendRequest = function sendRequest(endpoint, cb) {
  var params = {
    host: 'apiv3.iucnredlist.org',
    path: '/api/v3' + encodeURI(endpoint) + '?token=' + _config.redListToken,
    method: 'GET'
  };

  var req = _http2.default.request(params, function (res) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb('statusCode=' + res.statusCode);
    }
    var buf = [];
    res.on('data', function (c) {
      return buf.push(c);
    });
    res.on('end', function () {
      return cb(null, JSON.parse(Buffer.concat(buf)));
    });
    return null;
  });
  req.on('error', function (err) {
    return cb(err);
  });
  req.end();
};

exports.sendRequest = sendRequest;