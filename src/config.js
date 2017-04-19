// @flow
import { sendRequest } from './util';
let redListToken = process.env.RED_LIST_TOKEN;
const setRedListToken = (token: string): null => {
  redListToken = token;
  return null;
};

const redListVersion = (): Promise<any> =>
  new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
    sendRequest(
      '/version',
      (err: Error | null, data?: Object): void => {
        if (err) return reject(new Error(err));
        return data ? resolve(data) : reject(new Error('No data found'));
      }
    )
  );

export {
  redListToken,
  setRedListToken,
  redListVersion,
};
