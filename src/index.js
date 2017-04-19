import {
  redListVersion,
  setRedListToken,
} from './config';

const Country = require('./country')();
const Region = require('./region')();

export {
  Country,
  redListVersion,
  Region,
  setRedListToken,
};
