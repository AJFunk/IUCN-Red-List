import {
  redListVersion,
  setRedListToken,
} from './config';

const Country = require('./country')();
const GrowthForms = require('./growth-forms')();
const Habitat = require('./habitat')();
const Measure = require('./measure')();
const Region = require('./region')();
const Species = require('./species')();
const Threat = require('./threat')();

export {
  Country,
  GrowthForms,
  Habitat,
  Measure,
  redListVersion,
  Region,
  setRedListToken,
  Species,
  Threat,
};
