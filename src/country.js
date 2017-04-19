// @flow
import { sendRequest } from './util';

export default function country(): Object {
  return {

    all: (): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          '/country/list',
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        )
      ),

    species: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.country) return reject(new Error('Country ISO-code is required.'));
        return sendRequest(
          `/country/getspecies/${options.country}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

  };
}
