'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = exports.handleResult = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleResult = function handleResult(resolve, reject, err, data) {
  if (err) return reject(err);
  return data ? resolve(data) : reject(new Error('No data found'));
};

var sendRequest = function sendRequest(endpoint, resolve, reject, cb) {
  var params = {
    host: 'apiv3.iucnredlist.org',
    path: '/api/v3' + endpoint.replace(/\s/g, '%20') + '?token=' + _config.redListToken,
    method: 'GET'
  };

  var req = _http2.default.request(params, function (res) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb(resolve, reject, 'statusCode=' + res.statusCode);
    }
    var buf = [];
    res.on('data', function (c) {
      return buf.push(c);
    });
    res.on('end', function () {
      return cb(resolve, reject, null, JSON.parse(Buffer.concat(buf)));
    });
    return null;
  });
  req.on('error', function (err) {
    return cb(resolve, reject, err);
  });
  req.end();
};

exports.handleResult = handleResult;
exports.sendRequest = sendRequest;