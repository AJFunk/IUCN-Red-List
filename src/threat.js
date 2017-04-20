// @flow
import { sendRequest } from './util';

export default function threat(): Object {
  return {

    fetch: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          if (options.hasOwnProperty('id')) endpoint = `/threats/species/id/${options.id}/region/${options.region}`;
          else endpoint = `/threats/species/name/${options.name}/region/${options.region}`;
        } else {
          if (options.hasOwnProperty('id')) endpoint = `/threats/species/id/${options.id}`;
          else endpoint = `/threats/species/name/${options.name}`;
        }
        return sendRequest(
          endpoint,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

  };
}
