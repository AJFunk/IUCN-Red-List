// @flow
import { sendRequest } from './util';
let redListToken = process.env.RED_LIST_TOKEN;
const setRedListToken = (token: string): null => {
  redListToken = token;
  return null;
};

const redListVersion = () =>
  new Promise((resolve: object, reject: object): undefined => {
    return sendRequest(
      '/api/v3/version',
      (err: string, data: object): undefined => {
        if (err) return reject(new Error(err));
        return resolve(data);
      }
    );
  });

export {
  redListToken,
  setRedListToken,
  redListVersion,
};
