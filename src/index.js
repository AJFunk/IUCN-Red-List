import {
  redListVersion,
  setRedListToken,
} from './config';

const Country = require('./country')();
const Region = require('./region')();
const Species = require('./species')();

export {
  Country,
  redListVersion,
  Region,
  setRedListToken,
  Species,
};
