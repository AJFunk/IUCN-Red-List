// @flow
import {
  handleResult,
  sendRequest,
} from './util';

export default function country(): Object {
  return {

    all: (): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          '/country/list',
          resolve,
          reject,
          handleResult
        )
      ),

    species: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('country')) {
          return reject(new Error('The country option is required.'));
        }
        return sendRequest(
          `/country/getspecies/${options.country}`,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
