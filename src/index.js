import {
  redListVersion,
  setRedListToken,
} from './config';

const Country = require('./country')();
const Habitat = require('./habitat')();
const Region = require('./region')();
const Species = require('./species')();
const Threat = require('./threat')();

export {
  Country,
  Habitat,
  redListVersion,
  Region,
  setRedListToken,
  Species,
  Threat,
};
