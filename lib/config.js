'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redListVersion = exports.setRedListToken = exports.redListToken = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redListToken = process.env.RED_LIST_TOKEN;

var setRedListToken = function setRedListToken(token) {
  exports.redListToken = redListToken = token;
  return null;
};

var redListVersion = function redListVersion() {
  return new _promise2.default(function (resolve, reject) {
    return (0, _util.sendRequest)('/version', resolve, reject, _util.handleResult);
  });
};

exports.redListToken = redListToken;
exports.setRedListToken = setRedListToken;
exports.redListVersion = redListVersion;