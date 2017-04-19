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

    fetch: function fetch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (typeof options.page === 'undefined') {
          return reject(new Error('The page option is required.'));
        }
        return (0, _util.sendRequest)(options.region ? '/species/region/' + options.region + '/page/' + options.page : '/species/page/' + options.page, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    count: function count() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)(options.region ? '/speciescount/region/' + options.region : '/speciescount', function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    citation: function citation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name && !options.id) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.region) {
          if (options.id) endpoint = '/species/citation/id/' + options.id + '/region/' + options.region;else endpoint = '/species/citation/' + options.name + '/region/' + options.region;
        } else {
          if (options.id) endpoint = '/species/citation/id/' + options.id;else endpoint = '/species/citation/' + options.name;
        }
        return (0, _util.sendRequest)(endpoint, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    byCategory: function byCategory() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.category) return reject(new Error('The category option is required.'));
        return (0, _util.sendRequest)('/species/category/' + options.category, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    find: function find() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name && !options.id) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.region) {
          if (options.id) endpoint = '/species/id/' + options.id + '/region/' + options.region;else endpoint = '/species/' + options.name + '/region/' + options.region;
        } else {
          if (options.id) endpoint = '/species/id/' + options.id;else endpoint = '/species/' + options.name;
        }
        return (0, _util.sendRequest)(endpoint, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    narrative: function narrative() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name && !options.id) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.region) {
          if (options.id) endpoint = '/species/narrative/' + options.id + '/region/' + options.region;else endpoint = '/species/narrative/' + options.name + '/region/' + options.region;
        } else {
          if (options.id) endpoint = '/species/narrative/' + options.id;else endpoint = '/species/narrative/' + options.name;
        }
        return (0, _util.sendRequest)(endpoint, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    synonym: function synonym() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name) return reject(new Error('The name option is required.'));
        return (0, _util.sendRequest)('/species/synonym/' + options.name, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    commonNames: function commonNames() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name) return reject(new Error('The name option is required.'));
        return (0, _util.sendRequest)('/species/common_names/' + options.name, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    countries: function countries() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name && !options.id) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.region) {
          if (options.id) endpoint = '/species/countries/id/' + options.id + '/region/' + options.region;else endpoint = '/species/countries/name/' + options.name + '/region/' + options.region;
        } else {
          if (options.id) endpoint = '/species/countries/id/' + options.id;else endpoint = '/species/countries/name/' + options.name;
        }
        return (0, _util.sendRequest)(endpoint, function (err, data) {
          if (err) return reject(new Error(err));
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    historical: function historical() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!options.name && !options.id) {
          return reject(new Error('You must provide either a name or an id'));
        }
        var endpoint = void 0;
        if (options.region) {
          if (options.id) endpoint = '/species/history/id/' + options.id + '/region/' + options.region;else endpoint = '/species/history/name/' + options.name + '/region/' + options.region;
        } else {
          if (options.id) endpoint = '/species/history/id/' + options.id;else endpoint = '/species/history/name/' + options.name;
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