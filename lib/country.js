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
        return (0, _util.sendRequest)('/country/list', function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    species: function species(countryCode) {
      return new _promise2.default(function (resolve, reject) {
        if (!countryCode) return reject(new Error('Country ISO-code required.'));
        return (0, _util.sendRequest)('/country/getspecies/' + countryCode, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    }

  };
}
module.exports = exports['default'];