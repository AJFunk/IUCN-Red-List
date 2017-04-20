'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = country;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function country() {
  return {

    all: function all() {
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)('/country/list', resolve, reject, _util.handleResult);
      });
    },

    species: function species() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.hasOwnProperty('country')) {
          return reject(new Error('The country option is required.'));
        }
        return (0, _util.sendRequest)('/country/getspecies/' + options.country, resolve, reject, _util.handleResult);
      });
    }

  };
}
module.exports = exports['default'];