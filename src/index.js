import {
  redListVersion,
  setRedListToken,
} from './config';

const Country = require('./country')();
const Region = require('./region')();
const Species = require('./species')();
const Threat = require('./threat')();

export {
  Country,
  redListVersion,
  Region,
  setRedListToken,
  Species,
  Threat,
};
