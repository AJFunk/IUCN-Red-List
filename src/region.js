// @flow
import { sendRequest } from './util';

export default function region(): Object {
  return {

    all: (): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          '/region/list',
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        )
      ),

  };
}
