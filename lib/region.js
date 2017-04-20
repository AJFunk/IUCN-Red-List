'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = region;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function region() {
  return {

    all: function all() {
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)('/region/list', resolve, reject, _util.handleResult);
      });
    }

  };
}
module.exports = exports['default'];