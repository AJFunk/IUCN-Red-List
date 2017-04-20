'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = threat;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function threat() {
  return {

    fetch: function fetch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ? '/threats/species/id/' + options.id + '/region/' + options.region : '/threats/species/name/' + options.name + '/region/' + options.region;
        } else {
          endpoint = options.hasOwnProperty('id') ? '/threats/species/id/' + options.id : '/threats/species/name/' + options.name;
        }
        return (0, _util.sendRequest)(endpoint, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    }

  };
}
module.exports = exports['default'];