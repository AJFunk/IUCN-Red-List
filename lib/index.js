'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Threat = exports.Species = exports.setRedListToken = exports.Region = exports.redListVersion = exports.Habitat = exports.Country = undefined;

var _config = require('./config');

var Country = require('./country')();
var Habitat = require('./habitat')();
var Region = require('./region')();
var Species = require('./species')();
var Threat = require('./threat')();

exports.Country = Country;
exports.Habitat = Habitat;
exports.redListVersion = _config.redListVersion;
exports.Region = Region;
exports.setRedListToken = _config.setRedListToken;
exports.Species = Species;
exports.Threat = Threat;