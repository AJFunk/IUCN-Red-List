// @flow
import {
  handleResult,
  sendRequest,
} from './util';
let redListToken = process.env.RED_LIST_TOKEN;
const setRedListToken = (token: string): null => {
  redListToken = token;
  return null;
};

const redListVersion = (): Promise<any> =>
  new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
    sendRequest(
      '/version',
      resolve,
      reject,
      handleResult
    )
  );

export {
  redListToken,
  setRedListToken,
  redListVersion,
};
