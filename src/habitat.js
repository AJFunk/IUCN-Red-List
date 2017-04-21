// @flow
import {
  handleResult,
  sendRequest,
} from './util';

export default function habitat(): Object {
  return {

    fetch: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/habitats/species/id/${options.id}/region/${options.region}` :
            `/habitats/species/name/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/habitats/species/id/${options.id}` :
            `/habitats/species/name/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
