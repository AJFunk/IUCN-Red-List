'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRedListToken = exports.Region = exports.redListVersion = exports.Country = undefined;

var _config = require('./config');

var Country = require('./country')();
var Region = require('./region')();

exports.Country = Country;
exports.redListVersion = _config.redListVersion;
exports.Region = Region;
exports.setRedListToken = _config.setRedListToken;