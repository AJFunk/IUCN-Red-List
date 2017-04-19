'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = species;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function species() {
  return {

    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        var invalid = (0, _util.checkRequiredOptions)(options, ['page']);
        if (invalid) return reject(new Error('The ' + invalid + ' option is required.'));
        var page = options.page;

        return (0, _util.sendRequest)('/species/page/' + page, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    byRegion: function byRegion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        var invalid = (0, _util.checkRequiredOptions)(options, ['region', 'page']);
        if (invalid) return reject(new Error('The ' + invalid + ' option is required.'));
        var region = options.region,
            page = options.page;

        return (0, _util.sendRequest)('/species/region/' + region + '/page/' + page, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    }

  };
}
module.exports = exports['default'];