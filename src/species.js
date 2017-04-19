// @flow
import {
  checkRequiredOptions,
  sendRequest,
} from './util';

export default function species(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        const invalid = checkRequiredOptions(options, ['page']);
        if (invalid) return reject(new Error(`The ${invalid} option is required.`));
        const { page } = options;
        return sendRequest(
          `/species/page/${page}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    byRegion: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        const invalid = checkRequiredOptions(options, ['region', 'page']);
        if (invalid) return reject(new Error(`The ${invalid} option is required.`));
        const { region, page } = options;
        return sendRequest(
          `/species/region/${region}/page/${page}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

  };
}
